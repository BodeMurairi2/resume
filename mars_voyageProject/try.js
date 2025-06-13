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

    fetch(api_url, {body: "stream"})
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            response = response.json();
            const photos = response.photos;

            if (photos.length === 0) {
                console.log(`No photos found for ${rover} on sol ${sol}.`);
                return;
            };
            