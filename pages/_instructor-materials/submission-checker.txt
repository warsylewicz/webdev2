// run this script with `node submission-checker.txt`
const readline = require("readline");

// Repo name is the same for all students
const repoName = `cprg306-assignments`;

// https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

// Usage inside async function do not need closure demo only
(async () => {
  try {
    const usernamesCSV = await prompt(
      "Enter comma separated GitHub usernames: "
    );
    // Can use name for next question if needed
    const week = await prompt(`Enter assignment week number: `);

    // Split usernames into array
    const pipedNames = usernamesCSV.split(",");
    console.log("Number of students: " + pipedNames.length);

    let count = 1;
    let incorrect = 0;

    for (const pipeName of pipedNames) {
      let [name, username] = pipeName.split("|");
      if (!username) {
        username = "";
      }
      name = name.trim();
      username = username.trim();

      const res = await checkSubmission(username, week);
      // console.log(`${count}: ${name} (${username}): \t ${res.status ? "✅" : "❌"} (${res.message})`);
      
      if (res.status === false) {
        console.log(`${count}: ${name} (${username}): \t "❌" (${res.message})`);
        incorrect++;
      }
      

      count++;
    }

    console.log(`\n\nIncorrect submissions: ${incorrect}`);
    rl.close();

  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

// When done reading prompt, exit program
rl.on("close", () => process.exit(0));

async function checkSubmission(account, week) {
  if (account === "") {
    return { status: false, message: "no account" };
  }

  // correct locations
  const weekExistsInMaster = await checkUrl(
    `https://github.com/${account}/${repoName}/blob/master/app/week-${week}/page.js`
  );
  if (weekExistsInMaster) {
    return { status: true, message: "master" };
  } 

  const weekExistsInMain = await checkUrl(
    `https://github.com/${account}/${repoName}/blob/main/app/week-${week}/page.js`
  );
  if (weekExistsInMain) {
    return { status: true, message: "main" };
  }


  // src folders
  const weekExistsInMasterSrc = await checkUrl(
    `https://github.com/${account}/${repoName}/blob/master/src/app/week-${week}/page.js`
  );
  if (weekExistsInMasterSrc) {
    return { status: true, message: "master-src" };
  } 

  const weekExistsInMainSrc = await checkUrl(
    `https://github.com/${account}/${repoName}/blob/main/src/app/week-${week}/page.js`
  );
  if (weekExistsInMainSrc) {
    return { status: true, message: "main-src" };
  }

  // src and typescript
  const weekExistsInMainSrcTs = await checkUrl(
    `https://github.com/${account}/${repoName}/blob/main/src/app/week-${week}/page.tsx`
  );
  if (weekExistsInMainSrcTs) {
    return { status: true, message: "main-src-ts" };
  }

  // extra folder
  const weekExistsInMainExtraFolder = await checkUrl(
    `https://github.com/${account}/${repoName}/blob/main/cprg306-assignments/app/week-${week}/page.js`
  );
  if (weekExistsInMainExtraFolder) {
    return { status: true, message: "main-extra-folder" };
  }

  const accountExists = await checkUrl(`https://github.com/${account}`);
  if (!accountExists) {
    return { status: false, message: "no account" };
  }

  return { status: false, message: "no week" };
}

const checkUrl = async (url) => {
  try {
    // console.log(`Checking ${url}`);
    const response = await fetch(url);
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};
