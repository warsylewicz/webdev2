export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res
      .status(400)
      .json({ message: "URL is required as a query parameter." });
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
