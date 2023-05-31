import fs from "fs";
import path from "path";

function readFileContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(process.cwd(), filePath), "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export async function getStaticProps() {
  const filePath = "pages/module1/test.mdx";
  const content = await readFileContent(filePath);
  console.log(content);
  return { props: { content } };
}

export default function RawContent({ content }) {
  return <>{content}</>;
}
