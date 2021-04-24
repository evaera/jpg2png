#!/usr/bin/env node

const fs = require("fs");
const sharp = require("sharp");

for (const file of fs.readdirSync(".")) {
  if (file.endsWith(".jpg")) {
    sharp(fs.readFileSync(file))
      .png()
      .toFile(`${file.substr(0, file.length - 4)}.png`);

    if (process.argv.includes("-r")) {
      fs.unlinkSync(file);
    }
  }
}
