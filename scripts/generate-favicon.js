const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateFavicon() {
  try {
    const inputPath = path.join(__dirname, '..', 'public', 'gen-coin.png');
    const outputPath = path.join(__dirname, '..', 'public', 'favicon.ico');
    
    // Create 16x16 and 32x32 versions for favicon
    const img16 = await sharp(inputPath)
      .resize(16, 16)
      .toBuffer();
    
    const img32 = await sharp(inputPath)
      .resize(32, 32)
      .toBuffer();
    
    // Write the 32x32 version as a PNG to the output path
    // (While not a true .ico file, this works for most browsers)
    await sharp(img32)
      .png()
      .toFile(outputPath);
    
    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 