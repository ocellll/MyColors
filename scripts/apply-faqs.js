import fs from 'fs';
import path from 'path';

const articlesPath = path.resolve('src/data/blogArticles.js');
const faqDataPath = path.resolve('scripts/faq-data.json');

const articlesContent = fs.readFileSync(articlesPath, 'utf8');
const faqData = JSON.parse(fs.readFileSync(faqDataPath, 'utf8'));

let newFileContent = articlesContent;

faqData.forEach(item => {
    const { id, faq } = item;
    console.log(`Processing FAQ for Article ${id}...`);

    // 1. Find Article ID
    const articleRegex = new RegExp(`id:\\s*${id},`, 'g');
    const match = articleRegex.exec(newFileContent);

    if (!match) {
        console.error(`Article ${id} not found`);
        return;
    }

    const articleStartIndex = match.index;

    // 2. Find Content Block Start
    const contentStartRegex = /content:\s*\{/;
    contentStartRegex.lastIndex = articleStartIndex;
    const contentMatch = contentStartRegex.exec(newFileContent.slice(articleStartIndex));

    if (!contentMatch) {
        console.error(`Content for article ${id} not found`);
        return;
    }

    const absContentStartIndex = articleStartIndex + contentMatch.index;
    const braceStartIndex = absContentStartIndex + contentMatch[0].indexOf('{');

    // 3. Find Content Block End (Brace Balancing)
    let braceCount = 0;
    let contentEndIndex = -1;
    let inString = false;
    let stringChar = '';

    for (let i = braceStartIndex; i < newFileContent.length; i++) {
        const char = newFileContent[i];

        // Handle strings to ignore braces inside them
        if ((char === '"' || char === "'" || char === "`") && newFileContent[i - 1] !== '\\') {
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
        console.error(`Could not find closing brace for article ${id}`);
        return;
    }

    // 4. Extract and Parse JSON
    const contentString = newFileContent.slice(braceStartIndex, contentEndIndex);

    try {
        const currentContent = JSON.parse(contentString);

        // 5. Add FAQ
        currentContent.faq = faq;

        // 6. Stringify and Replace
        const updatedContentString = JSON.stringify(currentContent, null, 4);

        // We replace in 'newFileContent' - but we must handle offset shifts if we were doing this sequentially on the original string
        // Since we are iterating, we must split and rejoin carefully or restart regex search on the NEW string.
        // EASIER: Split string into [before][old][after], then join with [new].
        // But doing this in a loop requires updating 'newFileContent' and resetting indices is tricky because offsets change.

        // FIX: Regex search MUST run on 'newFileContent' in each iteration.
        // Since we re-run regex on `newFileContent` at the start of loop, we are good!

        const before = newFileContent.slice(0, braceStartIndex);
        const after = newFileContent.slice(contentEndIndex);

        newFileContent = before + updatedContentString + after;
        console.log(`  -> Injected ${faq.length} FAQs.`);

    } catch (e) {
        console.error(`  -> Failed to parse JSON for article ${id}: ${e.message}`);
        // This might happen if the content is not strict JSON (e.g. has comments or JS keys).
        // Since expanded articles are strictly JSON.stringify'd, this should pass for them.
    }
});

fs.writeFileSync(articlesPath, newFileContent);
console.log('All FAQs applied successfully!');
