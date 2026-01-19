
import { blogArticles } from '../src/data/blogArticles.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let output = "--- Blog Article Word Count Audit ---\n";
output += "Target: 1200-1500 words per article\n\n";

blogArticles.forEach(article => {
    let wordCount = 0;

    // Count intro
    if (article.content.intro) {
        wordCount += article.content.intro.split(/\s+/).length;
    }

    // Count sections
    if (article.content.sections) {
        article.content.sections.forEach(section => {
            if (section.heading) wordCount += section.heading.split(/\s+/).length;
            if (section.content) wordCount += section.content.split(/\s+/).length;
        });
    }

    // Count conclusion
    if (article.content.conclusion) {
        wordCount += article.content.conclusion.split(/\s+/).length;
    }

    const status = wordCount < 1000 ? "🔴 THIN" : (wordCount < 1500 ? "🟡 OK" : "🟢 GOOD");
    output += `[${article.id}] ${article.slug}: ${wordCount} words ${status}\n`;
});

fs.writeFileSync(path.join(process.cwd(), 'word_counts_utf8.txt'), output, 'utf8');
console.log("Audit written to word_counts_utf8.txt");
