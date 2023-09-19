// run this script with `node _check-assignment-submissions.js`
const readline = require("readline");

// Repo name is the same for all students
const repoName = `cprg306-assignments`;

// https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

// Usage inside aync function do not need closure demo only
(async () => {
  try {
    const usernamesCSV = await prompt(
      "Enter comma separated GitHub usernames: "
    );
    // Can use name for next question if needed
    const week = await prompt(`Enter assignment week number: `);

    // Split usernames into array
    const usernames = usernamesCSV.split(",");
    for (const username of usernames) {
      const res = await checkSubmission(username, week);
      console.log(`${username}: \t ${res ? "✅" : "❌"}`);
    }

    rl.close();
  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

// When done reading prompt, exit program
rl.on("close", () => process.exit(0));

async function checkSubmission(account, week) {
  const accountExists = await checkUrl(`https://github.com/${account}`);

  if (week === "1") {
    return accountExists;
  }

  if (!accountExists) {
    return false;
  }

  const weekExistsInMaster = await checkUrl(
    `https://github.com/${account}/${repoName}/tree/master/app/week${week}/page.js`
  );
  const weekExistsInMain = await checkUrl(
    `https://github.com/${account}/${repoName}/tree/main/app/week${week}/page.js`
  );
  return weekExistsInMain || weekExistsInMaster;
}

const checkUrl = async (url) => {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};
