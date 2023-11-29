const Page = `"use client";

import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("A name was submitted: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" placeholder="Enter your name" value={name} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
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
