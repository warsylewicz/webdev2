const Page = `
`;

// Location of file as key (always starts with /)
export const example = {
  "/page.js": {
    code: Page,
    active: true,
  },
};

/* Foo is used to solve the bug: Build optimization failed:
  found page without a React Component as default export in pages/week1/samples-demo
*/
export default function Foo() {
  return <div>Foo</div>;
}
