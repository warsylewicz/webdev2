const Page = `"use client";

import { useState, useEffect } from 'react';

export default function PublicAPIs() {
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchFacts() {
    try {
      const response = await fetch('https://dogapi.dog/api/v2/facts');
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      const data = await response.json();
      setFacts(data.data);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchFacts();
  }, []); // Run the effect only once after the initial render

  if (error) return (
    <div>
      <h2>Dog Fact</h2>
      <p>{error}</p>
    </div>
  );
  
  return (
    <div>
      <h2>Dog Fact</h2>
      {facts.length > 0 ? (
        <ul>
          {facts.map((fact) => (
            <li key={fact.id}>
              {fact.attributes.body}
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
