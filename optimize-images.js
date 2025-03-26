const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "public";
const outputDir = "public/optimized-images";

const optimizeImage = async (file) => {
  const inputFilePath = path.join(inputDir, file);
  const outputFilePath = path.join(outputDir, file);

  await sharp(inputFilePath)
    .resize({ width: 800 }) // Resize to a maximum width of 800px
    .toFormat("jpeg", { quality: 75 }) // Convert to JPEG with 75% quality
    .toFile(outputFilePath);

  console.log(`Optimized ${file}`);
};

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    if (/\.(jpg|jpeg|png|svg)$/i.test(file)) {
      optimizeImage(file);
    }
  });
});
