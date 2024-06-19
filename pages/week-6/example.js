const Page = `"use client";

import { useState } from "react";

export default function FruitList() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const items = ['apple', 'banana', 'cherry'];

  function handleClick(item) {
    if (selectedFruit === item) {
      setSelectedFruit(null); // deselect item
      return;
    }

    setSelectedFruit(item);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Select a fruit:</h1>
      <ul className="mb-4">
        {items.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={\`cursor-pointer hover:text-blue-700 \${selectedFruit === item ? "text-red-500" : ""}\`}
          >
            {item}
          </li>
        ))}
      </ul>
      {selectedFruit && (
        <p className="text-xl">
          You selected: <span className="font-bold">{selectedFruit}</span>
        </p>
      )}
    </main>
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
