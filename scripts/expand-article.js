import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/blogArticles.js');
const articleId = parseInt(process.argv[2]);
const input = process.argv[3];

if (!articleId || !input) {
    console.error('Usage: node expand-article.js <id> <newContentJsonOrFilePath>');
    process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// Try to parse as file path first, then as JSON string
let newContent;
if (fs.existsSync(input)) {
    newContent = JSON.parse(fs.readFileSync(input, 'utf8'));
} else {
    newContent = JSON.parse(input);
}

const articleRegex = new RegExp(`id:\\s*${articleId},`, 'g');
const match = articleRegex.exec(content);

if (!match) {
    console.error(`Article ${articleId} not found`);
    process.exit(1);
}

const articleStartIndex = match.index;
const contentStartRegex = /content:\s*\{/;
contentStartRegex.lastIndex = articleStartIndex;
const contentMatch = contentStartRegex.exec(content.slice(articleStartIndex));

if (!contentMatch) {
    console.error(`Content for article ${articleId} not found`);
    process.exit(1);
}

const contentStartIndex = articleStartIndex + contentMatch.index;

let braceCount = 0;
let contentEndIndex = -1;
let inString = false;
let stringChar = '';

for (let i = contentStartIndex + contentMatch[0].indexOf('{'); i < content.length; i++) {
    const char = content[i];
    if ((char === '"' || char === "'" || char === "`") && content[i - 1] !== '\\') {
        if (!inString) {
            inString = true;
            stringChar = char;
        } else if (char === stringChar) {
            inString = false;
        }
    }

    if (!inString) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        if (braceCount === 0) {
            contentEndIndex = i + 1;
            break;
        }
    }
}

if (contentEndIndex === -1) {
    console.error(`Could not find closing brace for article ${articleId} content`);
    process.exit(1);
}

const formattedContent = `content: ${JSON.stringify(newContent, null, 4)}`;
const newFileContent = content.slice(0, contentStartIndex) + formattedContent + content.slice(contentEndIndex);

fs.writeFileSync(filePath, newFileContent);
console.log(`Article ${articleId} expanded successfully`);
