const Page = `function Photo({ imageUrl, name }) {
  return (
    <div className="w-48 h-48 overflow-hidden rounded-full">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
    </div>
  );
}

function ProfileInfo({ name, bio }) {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="mt-2 text-gray-600 text-justify">{bio}</p>
    </div>
  );
}

function Profile({ imageUrl, name, bio }) {
  return (
    <div className="bg-gray-100 p-8">
      <Photo imageUrl={imageUrl} name={name} />
      <ProfileInfo name={name} bio={bio} />
    </div>
  );
}

export default function Page() {
  const dog = {
    name: "Puddles",
    bio:
      "The sweet, eternally pensive pug who has mastered the art of melting hearts with his soulful eyes.",
    image:
      "https://images.pexels.com/photos/374908/pexels-photo-374908.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
  };
  
  return (
    <div className="bg-gray-300 p-10">
      <Profile name={dog.name} bio={dog.bio} imageUrl={dog.image} />
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
