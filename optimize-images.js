const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "public/";
const outputDir = "public/optimized-images";

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const optimizeImage = async (file) => {
  const inputFilePath = path.join(inputDir, file);
  const outputFilePath = path.join(outputDir, file);

  const extension = path.extname(file).toLowerCase();

  if (extension === ".png") {
    await sharp(inputFilePath)
      .resize({ width: 800 }) // Resize to a maximum width of 800px
      .toFormat("png") // Convert to PNG
      .toFile(outputFilePath);
    console.log(`Optimized ${file}`);
  } else if (extension === ".jpg" || extension === ".jpeg") {
    await sharp(inputFilePath)
      .resize({ width: 800 }) // Resize to a maximum width of 800px
      .toFormat("jpeg", { quality: 75 }) // Convert to JPEG with 75% quality
      .toFile(outputFilePath);
    console.log(`Optimized ${file}`);
  } else {
    console.log(`Skipping ${file} (not a PNG or JPEG)`);
  }
};

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    if (/\.(jpg|jpeg|png)$/i.test(file)) {
      optimizeImage(file);
    } else {
      console.log(`Skipping ${file} (not a PNG or JPEG)`);
    }
  });
});
