import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const folders = ['public/projects', 'public/AllProjects', 'public/profileMagang'];

async function compressImages() {
  for (const folder of folders) {
    try {
      const files = await readdir(folder);
      
      for (const file of files) {
        if (file.endsWith('.png') || file.endsWith('.PNG')) {
          const inputPath = join(folder, file);
          const outputPath = join(folder, file);
          
          console.log(`Compressing ${file}...`);
          
          await sharp(inputPath)
            .resize(1920, null, { // Max width 1920px, maintain aspect ratio
              withoutEnlargement: true,
              fit: 'inside'
            })
            .png({ 
              quality: 85,
              compressionLevel: 9,
              effort: 10
            })
            .toFile(outputPath + '.tmp');
          
          // Replace original with compressed
          await sharp(outputPath + '.tmp')
            .toFile(outputPath);
          
          // Clean up temp file
          const fs = await import('fs');
          fs.unlinkSync(outputPath + '.tmp');
          
          console.log(`✓ Compressed ${file}`);
        }
      }
    } catch (err) {
      console.log(`Folder ${folder} not found or error:`, err.message);
    }
  }
  
  console.log('\n✓ All images compressed!');
}

compressImages();
