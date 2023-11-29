import { useState } from "react";
import styles from "./AssignmentChecker.module.css";

function AssignmentChecker({ week }) {
  const [account, setAccount] = useState("");
  const [status, setStatus] = useState({ loading: false, error: null });

  const repoName = `cprg306-assignments`;
  // const repoName = `webdev2-community-events`;

  const checkUrl = async (url) => {
    try {
      const response = await fetch(`/api/checkUrl?url=${url}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, error: error.message });
      return false;
    }
  };

  const checkAccount = async () => {
    setStatus({ loading: true, error: null });
    const accountExists = await checkUrl(`https://github.com/${account}`);

    const repoExists =
      accountExists &&
      (await checkUrl(`https://github.com/${account}/${repoName}`));

    const repoNotEmpty =
      repoExists &&
      (await checkUrl(
        `https://api.github.com/repos/${account}/${repoName}/contributors`
      ));

    let weekExists =
      repoExists &&
      (await checkUrl(
        `https://github.com/${account}/${repoName}/tree/master/app/week-${week}/page.js`
      ));

    weekExists =
      repoExists &&
      (weekExists ||
        (await checkUrl(
          `https://github.com/${account}/${repoName}/tree/main/app/week-${week}/page.js`
        )));

    weekExists =
      repoExists &&
      (weekExists ||
        (await checkUrl(
          `https://github.com/${account}/${repoName}/tree/master/src/app/week-${week}/page.js`
        )));

    weekExists =
      repoExists &&
      (weekExists ||
        (await checkUrl(
          `https://github.com/${account}/${repoName}/tree/main/src/app/week-${week}/page.js`
        )));

    setStatus({
      loading: false,
      error: null,
      accountExists,
      repoNotEmpty,
      repoExists,
      weekExists,
    });
  };

  return (
    <div className="border p-4 m-4 rounded-md">
      <p>
        Check your GitHub account to see if your assignment has been correctly
        pushed.
      </p>
      <input
        type="text"
        value={account}
        placeholder="GitHub username"
        onChange={(event) => setAccount(event.target.value)}
      />
      <button
        onClick={checkAccount}
        className={styles.button}
        disabled={status.loading}
      >
        Check Assignment
      </button>
      {status.loading && <p>Please wait...</p>}
      {status.error && <p>Error: {status.error}</p>}
      {status.accountExists === false && <p>Account does not exist!</p>}
      {status.accountExists === true && status.repoExists === false && (
        <p>Repository does not exist!</p>
      )}
      {status.accountExists === true &&
        status.repoExists === true &&
        status.repoNotEmpty === false && <p>Repository is empty!</p>}

      {status.accountExists === true &&
        status.repoExists === true &&
        status.repoNotEmpty === true &&
        status.weekExists === false && (
          <p>Week {week} does not exist in your repo!</p>
        )}

      {status.accountExists === true &&
        status.repoExists === true &&
        status.repoNotEmpty === true &&
        status.weekExists === true && (
          <p>Congratulations! Week {week} exists in your repo!</p>
        )}
    </div>
  );
}

export default AssignmentChecker;
