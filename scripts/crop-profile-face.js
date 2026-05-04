const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function cropFace(inputPath, outputPath) {
  if (!fs.existsSync(inputPath)) {
    console.error('Input file not found:', inputPath)
    process.exit(2)
  }

  const img = sharp(inputPath)
  const meta = await img.metadata()
  const size = Math.min(meta.width || 0, meta.height || 0)

  // Use 'north' position so crop prioritizes the top area (usually where the face is)
  await img
    .resize({ width: size, height: size, fit: 'cover', position: 'north' })
    .jpeg({ quality: 90 })
    .toFile(outputPath)

  console.log('Saved face-focused cropped image to', outputPath)
}

const argv = process.argv.slice(2)
if (argv.length < 1) {
  console.error('Usage: node scripts/crop-profile-face.js <input-image-path> [output-path]')
  process.exit(1)
}

const input = path.resolve(argv[0])
const output = path.resolve(argv[1] || path.join(__dirname, '..', 'public', 'profile.jpg'))

cropFace(input, output).catch((err) => {
  console.error('Error cropping image:', err)
  process.exit(3)
})
