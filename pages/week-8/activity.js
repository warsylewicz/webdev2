const Page = `"use client";

import { useState } from "react";

export default function EmailCheckComponent() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const validateEmail = async () => {
    const response = await fetch(\`https://www.disify.com/api/email/\${email}\`);
    const data = await response.json();
    
    setResult(JSON.stringify(data));
  };


  return (
    <div>
      <input
        className="text-black border-2" 
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={validateEmail} className="bg-blue-200">Check</button>
      <p>{result}</p>
    </div>
  );
}
`;

const Solution = `"use client";

import { useState } from "react";

export default function EmailCheckComponent() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const validateEmail = async () => {
    try {
      const response = await fetch(\`https://www.disify.com/api/email/\${email}\`);
      const data = await response.json();
      if (data.format) {
        if (data.disposable) {
          setResult("The email address is valid and disposable.");
        } else {
          setResult("The email address is valid and not disposable.");
        }
      } else {
        setResult("The email address is invalid.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        className="text-black border-2" 
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={validateEmail} className="bg-blue-200">Check</button>
      <p>{result}</p>
    </div>
  );
}
`;

// Location of file as key (always starts with /)
export const activity = {
  "/page.js": {
    code: Page,
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
