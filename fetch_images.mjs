import https from 'https';
import fs from 'fs';
import { URL } from 'url';

const baseUrl = 'https://al-lissan.org';
const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
};

const visited = new Set();
const images = new Set();
const queue = [baseUrl];
const maxPages = 15;
let pagesVisited = 0;

function fetch(url) {
    return new Promise((resolve) => {
        if (visited.has(url) || pagesVisited >= maxPages) {
            resolve();
            return;
        }
        
        console.log(`Fetching: ${url}`);
        visited.add(url);
        pagesVisited++;

        https.get(url, options, (res) => {
            let data = '';
            
            // Handle redirects
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const redirectUrl = new URL(res.headers.location, baseUrl).href;
                if (!visited.has(redirectUrl)) queue.push(redirectUrl);
                resolve();
                return;
            }

            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                // Extract Images
                const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
                let match;
                while ((match = imgRegex.exec(data)) !== null) {
                    let imgUrl = match[1];
                    try {
                        const fullUrl = new URL(imgUrl, baseUrl).href;
                        // Filter for likely content images (exclude tiny icons if possible, but keep all for now)
                        if (fullUrl.match(/\.(jpg|jpeg|png|webp|svg)$/i)) {
                            images.add(fullUrl);
                        }
                    } catch (e) {}
                }

                // Extract Links for crawling
                const linkRegex = /<a[^>]+href=["']([^"']+)["']/g;
                while ((match = linkRegex.exec(data)) !== null) {
                    let linkUrl = match[1];
                    try {
                        const fullUrl = new URL(linkUrl, baseUrl).href;
                        if (fullUrl.startsWith(baseUrl) && !visited.has(fullUrl) && !fullUrl.match(/\.(jpg|png|pdf|zip)$/i)) {
                            queue.push(fullUrl);
                        }
                    } catch (e) {}
                }
                resolve();
            });
        }).on('error', () => resolve());
    });
}

async function crawl() {
    while (queue.length > 0 && pagesVisited < maxPages) {
        const url = queue.shift();
        await fetch(url);
    }
    
    const uniqueImages = Array.from(images);
    fs.writeFileSync('all_images.json', JSON.stringify(uniqueImages, null, 2));
    console.log(`Done. Visited ${pagesVisited} pages. Found ${uniqueImages.length} images.`);
}

crawl();
