const Activity = `"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0)
  
  // TODO: Create a new state variable called 'isEnabled' with an initial value of false.
  // This variable will be used to control the enabled/disabled state of the increment button.

  const increment = () => {
    setCount(count + 1);
  }

  const toggleEnabled = () => {
    // TODO: Implement a function that toggles the value of 'isEnabled'.
    // If 'isEnabled' is currently true, it should be set to false, and vice versa.
  }
  
  return (
    <div>
      <button onClick={increment} disabled={!isEnabled} className="bg-blue-400 disabled:bg-yellow-900 rounded m-4 p-4">+1</button>
      <input type="checkbox" onChange={toggleEnabled}/>
      Enable button
      <p>Current count: {count}</p>
    </div>
  )
}
`;

const Solution = `"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  const increment = () => {
    setCount(count + 1);
  }

  const toggleEnabled = () => {
    setIsEnabled(!isEnabled);
  }
  
  return (
    <div>
      <button onClick={increment} disabled={!isEnabled} className="bg-blue-400 hover:bg-blue-600 disabled:bg-yellow-900 rounded m-4 p-4">+1</button>
      <input type="checkbox" onChange={toggleEnabled}/>
      Enable button
      <p>Current count: {count}</p>
    </div>
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
