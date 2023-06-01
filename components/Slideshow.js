import Link from "next/link";

export default function Slideshow({ file }) {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "0",
    paddingBottom: "56.25%",
  };

  const iframeStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  };
  return (
    <div>
      <div style={containerStyle}>
        <iframe
          src={`/slides/index.html?set=${file}`}
          style={iframeStyle}
        ></iframe>
      </div>
      <Link href={file}>View all slides</Link>
    </div>
  );
}
