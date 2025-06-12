#!/usr/bin/node

// load environment variable
require('dotenv').config();

// import fs, https, and path module
const fs = require('fs');
const https = require('https');
const path = require('path');



// API key and sol value
const api_key = process.env.API_KEY;
const sol = process.env.SOL;

console.log(api_key);
console.log(sol);

// Mapping content-type to extensions (optional fallback)
const mimeToExt = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/gif': '.gif',
    'image/webp': '.webp',
};


function ensureFolder(folder) {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
}

// Main download function for a given rover
function downloadRoverPhotos(rover) {
    const folder = `${rover}_photos`;
    ensureFolder(folder);

    const api_url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=${api_key}&sol=${sol}`;

    fetch(api_url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const photos = data.photos;

            if (photos.length === 0) {
                console.log(`No photos found for ${rover} on sol ${sol}.`);
                return;
            }

            const limitDownload = Math.min(10, photos.length);
            for (let i = 0; i < limitDownload; i++) {
                const urlDownload = photos[i].img_src.replace("http:", "https:");
                const ext = path.extname(new URL(urlDownload).pathname) || '.jpg';
                const filePath = path.join(folder, `${rover}_${i + 1}${ext}`);
                const file = fs.createWriteStream(filePath);

                https.get(urlDownload, response => {
                    response.pipe(file);
                    file.on('finish', () => {
                        file.close();
                        console.log(`Downloaded ${rover}_${i + 1}${ext}`);
                    });
                }).on('error', error => {
                    fs.unlink(filePath, () => {});
                    console.error("Download error:", error.message);
                });
            }
        })
        .catch(error => {
            console.error(`Error fetching data for ${rover}:`, error);
        });
}

['curiosity', 'opportunity', 'spirit'].forEach(downloadRoverPhotos);
