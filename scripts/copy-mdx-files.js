// scripts/copy-mdx-files.js

const path = require("path");
const fs = require("fs-extra");
const glob = require("glob");

async function copyMdxFiles() {
  const sourceDirectory = path.join(process.cwd(), "pages");
  const targetDirectory = path.join(process.cwd(), "public", "mdx");

  // Remove the mdx directory if it exists
  await fs.remove(targetDirectory);

  // Ensure the target directory exists
  await fs.ensureDir(targetDirectory);

  // Find all .mdx files in the source directory and its subdirectories
  const files = glob.sync("**/*.mdx", { cwd: sourceDirectory });

  // Copy each .mdx file to the target directory
  for (const file of files) {
    // only copy the file if it is a slide
    if (!file.includes("slides")) {
      continue;
    }

    const sourcePath = path.join(sourceDirectory, file);
    const targetPath = path.join(targetDirectory, file);

    // Ensure the target subdirectory exists
    await fs.ensureDir(path.dirname(targetPath));

    // Copy the .mdx file
    await fs.copy(sourcePath, targetPath);
  }
}

copyMdxFiles().catch(console.error);
