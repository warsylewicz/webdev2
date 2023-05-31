import Link from "next/link";

export default function Slideshow({ file }) {
  return (
    <div>
      <Link href={file}>All code</Link>
      <iframe src={`/slides/index.html?set=${file}`}></iframe>
    </div>
  );
}
