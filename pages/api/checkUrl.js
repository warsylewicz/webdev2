export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res
      .status(400)
      .json({ message: "URL is required as a query parameter." });
  }

  if (!url.startsWith("https://github.com/")) {
    return res
      .status(400)
      .json({ message: "URL must start with 'https://github.com/'" });
  }

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Only GET requests are allowed." });
  }

  try {
    const response = await fetch(url);
    // If the request is successful, the URL exists
    return res.status(200).json({ exists: response.status === 200 });
  } catch (error) {
    // If the request fails, the URL does not exist or is not reachable
    return res.status(200).json({ exists: false });
  }
}
