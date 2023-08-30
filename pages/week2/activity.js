// App.js
const NavBar = `function NavBar() {
  let currentPage = "Home";

  return (
    <nav className="navbar">
      <ul>
        <li>currentPage</li>
        <li>About</li>
      <ul>
    </nav>
  );
}
`;

const NavBarSolution = `export function NavBar() {  // #1. In order for App.js to import NavBar, we need to export it
  let currentPage = "Home";

  return (
    <nav className="navbar">
      <ul>
        <li>{currentPage}</li>  { /* #2. To use a variable in JSX, we need to wrap it in curly braces */ }
        <li>About</li>
      </ul>   { /* #3. Missing closing tag. All HTML tags must be closed. */ }
    </nav>
  );
}
`;

const App = `import { NavBar } from "./NavBar";

export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <NavBar />
    </div>
  );
}
`;

// Location of file as key (always starts with /)
export const files = {
  "/NavBar.js": {
    code: NavBar,
  },
  "/App.js": {
    code: App,
  },
};

export const filesSolution = {
  "/NavBar.js": {
    code: NavBarSolution,
  },
  "/App.js": {
    code: App,
  },
};

/* Foo is used to solve the bug: Build optimization failed:
  found page without a React Component as default export in pages/week1/samples-demo
*/
export default function Foo() {
  return <div>Foo</div>;
}
