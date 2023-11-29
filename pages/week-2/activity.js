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

const NavBarSolution = `export default function NavBar() {  // #1. In order for App.js to import NavBar, we need to export it
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

const Page = `import NavBar from "./nav-bar";

export default function Page() {
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
  "/page.js": {
    code: Page,
    active: true,
  },
  "/nav-bar.js": {
    code: NavBar,
  },
};

export const filesSolution = {
  "/page.js": {
    code: Page,
    active: true,
  },
  "/nav-bar.js": {
    code: NavBarSolution,
  },
};

/* Foo is used to solve the bug: Build optimization failed:
  found page without a React Component as default export in pages/week-1/samples-demo
*/
export default function Foo() {
  return <div>Foo</div>;
}
