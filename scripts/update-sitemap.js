import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://mycolorspro.vercel.app';
const blogArticlesPath = path.join(__dirname, '../src/data/blogArticles.js');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

// Static routes configuration
const staticRoutes = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/blog', changefreq: 'weekly', priority: '0.9' },
    { loc: '/about', changefreq: 'monthly', priority: '0.8' },
    { loc: '/how-it-works', changefreq: 'monthly', priority: '0.8' },
    { loc: '/faq', changefreq: 'monthly', priority: '0.8' },
    { loc: '/glossary', changefreq: 'monthly', priority: '0.7' },
    { loc: '/guia-primavera', changefreq: 'monthly', priority: '0.7' },
    { loc: '/guia-verano', changefreq: 'monthly', priority: '0.7' },
    { loc: '/guia-otono', changefreq: 'monthly', priority: '0.7' },
    { loc: '/guia-invierno', changefreq: 'monthly', priority: '0.7' },
    { loc: '/contact', changefreq: 'yearly', priority: '0.6' },
    { loc: '/privacy', changefreq: 'yearly', priority: '0.5' },
    { loc: '/terms', changefreq: 'yearly', priority: '0.5' },
    { loc: '/disclaimer', changefreq: 'yearly', priority: '0.5' },
];

function generateSitemap() {
    try {
        // Read blog articles file
        const articlesContent = fs.readFileSync(blogArticlesPath, 'utf8');

        // Extract slugs using regex
        const slugRegex = /slug:\s*'([^']+)'/g;
        let match;
        const blogSlugs = [];

        while ((match = slugRegex.exec(articlesContent)) !== null) {
            blogSlugs.push(match[1]);
        }

        console.log(`Found ${blogSlugs.length} blog articles.`);

        // Generate XML
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        const today = new Date().toISOString().split('T')[0];

        // Add static routes
        staticRoutes.forEach(route => {
            xml += '  <url>\n';
            xml += `    <loc>${baseUrl}${route.loc}</loc>\n`;
            xml += `    <lastmod>${today}</lastmod>\n`;
            xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
            xml += `    <priority>${route.priority}</priority>\n`;
            xml += '  </url>\n';
        });

        // Add blog routes
        blogSlugs.forEach(slug => {
            xml += '  <url>\n';
            xml += `    <loc>${baseUrl}/blog/${slug}</loc>\n`;
            xml += `    <lastmod>${today}</lastmod>\n`;
            xml += `    <changefreq>monthly</changefreq>\n`;
            xml += `    <priority>0.8</priority>\n`;
            xml += '  </url>\n';
        });

        xml += '</urlset>\n';

        // Write sitemap
        fs.writeFileSync(sitemapPath, xml);
        console.log(`Sitemap generated successfully at ${sitemapPath}`);

    } catch (error) {
        console.error('Error generating sitemap:', error);
        process.exit(1);
    }
}

generateSitemap();
