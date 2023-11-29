const Activity = `function Photo({ imageUrl, name }) {
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
    name: "Daisy",
    bio:
      "The Labrador Retriever whose infectious joy is rivaled only by the sunniest of summer days; she brightens every room she enters with her boundless energy and ever-wagging tail.",
    imageUrl:
      "https://images.pexels.com/photos/7752793/pexels-photo-7752793.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1",
  };
  
  return (
    <div className="bg-gray-300 p-10">
      <Profile dog={dog} />
    </div>
  );
}
`;

const Solution = `function Photo({ imageUrl, name }) {
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
    name: "Daisy",
    bio:
      "The Labrador Retriever whose infectious joy is rivaled only by the sunniest of summer days; she brightens every room she enters with her boundless energy and ever-wagging tail.",
    imageUrl:
      "https://images.pexels.com/photos/7752793/pexels-photo-7752793.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1",
  };
  
  return (
    <div className="bg-gray-300 p-10">
      <Profile name={dog.name} bio={dog.bio} imageUrl={dog.imageUrl} />
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
