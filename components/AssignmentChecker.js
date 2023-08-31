import { useState } from "react";
import styles from "./AssignmentChecker.module.css";

function AssignmentChecker({ week }) {
  const [account, setAccount] = useState("");
  const [accountExists, setAccountExists] = useState(null);
  const [repoExists, setRepoExists] = useState(null);
  const [weekExists, setWeekExists] = useState(null);

  // const repoName = `cprg306-assignments`;
  const repoName = `webdev2-demos`;

  const checkUrl = async () => {
    try {
      const response = await fetch(
        `/api/checkUrl?url=https://github.com/${account}`
      );
      const data = await response.json();
      setAccountExists(data.exists);
    } catch (error) {
      console.error(error);
      setAccountExists(false);
    }

    try {
      const response = await fetch(
        `/api/checkUrl?url=https://github.com/${account}/${repoName}`
      );
      const data = await response.json();
      setRepoExists(data.exists);
    } catch (error) {
      console.error(error);
      setRepoExists(false);
    }

    try {
      const response1 = await fetch(
        `/api/checkUrl?url=https://github.com/${account}/${repoName}/tree/master/app/week${week}`
      );
      const data1 = await response1.json();

      const response2 = await fetch(
        `/api/checkUrl?url=https://github.com/${account}/${repoName}/tree/main/app/week${week}`
      );
      const data2 = await response2.json();

      setWeekExists(data1.exists || data2.exists);
    } catch (error) {
      console.error(error);
      setWeekExists(false);
    }
  };

  return (
    <div>
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
      <button onClick={checkUrl} className={styles.button}>
        Check Assignment
      </button>
      {accountExists === false && <p>Account does not exist!</p>}
      {accountExists === true && repoExists === false && (
        <p>Repository does not exist!</p>
      )}
      {accountExists === true &&
        repoExists === true &&
        weekExists === false && <p>Week {week} does not exist in your repo!</p>}
      {accountExists === true && repoExists === true && weekExists === true && (
        <p>Congratulations! Week {week} exists in your repo!</p>
      )}
    </div>
  );
}

export default AssignmentChecker;
