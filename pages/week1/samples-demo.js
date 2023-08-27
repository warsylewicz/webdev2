// The files example used in an earlier demo

// App.js
const AppJs = `import Hello from './Hello.js'
	
export default function App () {
  return <Hello name="Aaron" />
}
`;

// Hello.js
const HelloJs = `export default function Hello ({ name }) {
  return <h1>Hello {name}</h1>
}
`;

// Location of file as key (always starts with /)
export const files = {
  "/App.js": {
    code: AppJs,
  },
  "/Hello.js": {
    code: HelloJs,
  },
};

/* Foo is used to solve the bug: Build optimization failed:
  found page without a React Component as default export in pages/week1/samples-demo
*/
export default function Foo() {
  return <div>Foo</div>;
}
