
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, '../src/data/blogArticles.js');
let content = readFileSync(filePath, 'utf8');

// Strip export to allow parsing as a plain script
content = content.replace(/export const/g, 'const');

try {
    import('vm').then(vm => {
        try {
            new vm.default.Script(content);
            console.log("Syntax OK");
        } catch (e) {
            console.error("Syntax Error found:");
            console.error(e.message);

            // Try to find the line number
            const match = e.stack.match(/evalmachine\.<anonymous>:(\d+)/);
            if (match) {
                const lineNum = parseInt(match[1]);
                console.log(`Error near line ${lineNum}`);
                const lines = content.split('\n');
                for (let i = Math.max(0, lineNum - 10); i < Math.min(lines.length, lineNum + 10); i++) {
                    console.log(`${i + 1}: ${lines[i]}`);
                }
            } else {
                console.error(e.stack);
            }
        }
    });
} catch (e) {
    console.error(e);
}
