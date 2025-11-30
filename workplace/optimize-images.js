const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directories = [
    'public/FOTO/MATRIMONI',
    'public/FOTO/AZIENDE',
    'public/FOTO/FOTO DISCO',
    'public/FOTO/CONCERTI'
];

async function processDirectory(dir) {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
        console.log(`Directory not found: ${dir}`);
        return;
    }

    const files = fs.readdirSync(fullPath);

    for (const file of files) {
        if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')) {
            const filePath = path.join(fullPath, file);
            try {
                const image = sharp(filePath);
                const metadata = await image.metadata();

                if (metadata.width > 1920) {
                    console.log(`Resizing ${dir}/${file} (Width: ${metadata.width}) -> 1920px`);
                    const buffer = await image
                        .resize({ width: 1920 })
                        .toBuffer();

                    fs.writeFileSync(filePath, buffer);
                } else {
                    // console.log(`Skipping ${dir}/${file} (Width: ${metadata.width})`);
                }
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }
    }
}

async function createHeroPoster() {
    const source = 'public/FOTO/AZIENDE/1.webp';
    const dest = 'public/FOTO/AZIENDE/poster_hero.webp';

    try {
        console.log('Creating optimized Hero poster...');
        await sharp(source)
            .resize({ width: 1280 })
            .webp({ quality: 60 })
            .toFile(dest);
        console.log('Hero poster created at ' + dest);
    } catch (err) {
        console.error('Error creating hero poster:', err);
    }
}

async function main() {
    console.log('Starting image optimization...');
    for (const dir of directories) {
        await processDirectory(dir);
    }
    await createHeroPoster();
    console.log('Optimization complete.');
}

main();
