const Activity = `"use client";

import { useState } from "react";

export default function FruitList() {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [filter, setFilter] = useState(false);

  const items = ['apple', 'banana', 'apricot', 'cherry', 'avocado'];

  function handleClick(item) {
    if (selectedFruit === item) {
      setSelectedFruit(null); // deselect item
      return;
    }

    setSelectedFruit(item);
  }

  function toggleFilter() {
    setFilter(!filter);
  }

  // TODO: filter items based on filter state
  const displayedItems = items;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Select a fruit:</h1>
      <ul className="mb-4">
        {displayedItems.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={\`cursor-pointer hover:text-blue-700 \${selectedFruit === item ? "text-red-500" : ""}\`}
          >
            {item}
          </li>
        ))}
      </ul>
      <button 
        onClick={toggleFilter} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {filter ? 'Show All' : 'Show Only Starting with "a"'}
      </button>
      {selectedFruit && (
        <p className="text-xl">
          You selected: <span className="font-bold">{selectedFruit}</span>
        </p>
      )}
    </main>
  );
}
`;

const Solution = `"use client";

import { useState } from "react";

export default function FruitList() {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [filter, setFilter] = useState(false);

  const items = ['apple', 'banana', 'apricot', 'cherry', 'avocado'];

  function handleClick(item) {
    if (selectedFruit === item) {
      setSelectedFruit(null); // deselect item
      return;
    }

    setSelectedFruit(item);
  }

  function toggleFilter() {
    setFilter(!filter);
  }

  const displayedItems = filter ? items.filter(item => item.startsWith('a')) : items;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Select a fruit:</h1>
      <ul className="mb-4">
        {displayedItems.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={\`cursor-pointer hover:text-blue-700 \${selectedFruit === item ? "text-red-500" : ""}\`}
          >
            {item}
          </li>
        ))}
      </ul>
      <button 
        onClick={toggleFilter} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {filter ? 'Show All' : 'Show Only Starting with "a"'}
      </button>
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
export const activity = {
  "/page.js": {
    code: Activity,
    active: true,
  },
};

export const solution = {
  "/page.js": {
    code: Solution,
    active: true,
  },
};

/* Foo is used to solve the bug: Build optimization failed:
  found page without a React Component as default export in pages/week-1/samples-demo
*/
export default function Foo() {
  return <div>Foo</div>;
}
