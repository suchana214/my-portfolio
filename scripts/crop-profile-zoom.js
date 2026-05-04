const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function cropZoom(inputPath, outputPath, offsetPercent = 0.25, zoom = 1.4, outSize = 400) {
  if (!fs.existsSync(inputPath)) {
    console.error('Input file not found:', inputPath)
    process.exit(2)
  }

  const img = sharp(inputPath)
  const meta = await img.metadata()
  const width = meta.width || 0
  const height = meta.height || 0
  const base = Math.min(width, height)

  // reduce base by zoom factor to zoom in (zoom>1 -> smaller crop area)
  const cropSize = Math.round(base / zoom)

  const left = Math.max(0, Math.round((width - cropSize) / 2))
  const top = Math.max(0, Math.round((height - cropSize) * offsetPercent))

  await img
    .extract({ left, top, width: cropSize, height: cropSize })
    .resize(outSize, outSize)
    .jpeg({ quality: 92 })
    .toFile(outputPath)

  console.log(`Saved zoomed crop to ${outputPath} (left=${left},top=${top},size=${cropSize})`)
}

const argv = process.argv.slice(2)
if (argv.length < 1) {
  console.error('Usage: node scripts/crop-profile-zoom.js <input> [offsetPercent] [zoom] [output]')
  process.exit(1)
}

const input = path.resolve(argv[0])
const offset = parseFloat(argv[1] || '0.25')
const zoom = parseFloat(argv[2] || '1.4')
const output = path.resolve(argv[3] || path.join(__dirname, '..', 'public', 'profile.jpg'))

cropZoom(input, output, offset, zoom).catch(err => { console.error(err); process.exit(3) })
