// pages/api/raw-markdown.js

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { file } = req.query;

  // Check if file parameter is not empty, ends with .mdx and does not contain ".." to prevent path traversal
  if (!file || !file.endsWith(".mdx") || file.includes("..")) {
    return res.status(400).json({ error: "Invalid file parameter" });
  }

  // Construct the full file path
  const filePath = path.join(process.cwd(), "pages", file);

  // Ensure file is inside the /pages/ directory
  const isInsidePagesDirectory = filePath.startsWith(
    path.join(process.cwd(), "pages")
  );

  if (!isInsidePagesDirectory) {
    return res.status(403).json({ error: "File access is restricted" });
  }

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  // Read the file content
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Return the file content as a response
  res.status(200).send(fileContent);
}
