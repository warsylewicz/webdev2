const Page = `"use client";

import { useState, useEffect } from 'react';

export default function PublicAPIs() {
  const [apis, setApis] = useState([]);
  const [error, setError] = useState(null);

  async function fetchAPIs() {
    try {
      const response = await fetch('https://api.publicapis.org/entries');
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      const data = await response.json();
      setApis(data.entries);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchAPIs();
  }, []); // Run the effect only once after the initial render

  if (error) return (
    <div>
      <h2>Public APIs:</h2>
      <p>{error}</p>
    </div>
  );
  
  return (
    <div>
      <h2>Public APIs:</h2>
      {apis.length > 0 ? (
        <ul>
          {apis.map((api, index) => (
            <li key={index}>
              <a href={api.Link}>
                {api.API}
              </a>
              : {api.Description}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
`;

// Location of file as key (always starts with /)
export const example = {
  "/page.js": {
    code: Page,
    active: true,
  },
};

/* Foo is used to solve the bug: Build optimization failed:
  found page without a React Component as default export in pages/week-1/samples-demo
*/
export default function Foo() {
  return <div>Foo</div>;
}
