// React component that displays a button that can mark a page as "done" when clicked. The button text changes from "Done?" to "Done!" when clicked.
// If the button is clicked again, the page is marked as "Done?" again
// The state of the button is stored in localStorage.
// Pages marked as "done" will have a checkmark next to them in the sidebar.
//

import React, { useState, useEffect } from "react";
import styles from "./MarkDone.module.css";

export default function MarkDone({ page }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let storedIsDone = localStorage.getItem(page);
    if (storedIsDone) {
      setIsDone(storedIsDone === "true");
    }
  }, []);

  const handleClick = () => {
    setIsDone(!isDone);
    localStorage.setItem(page, !isDone);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {isDone ? "Done!" : "Mark page as done"}
    </button>
  );
}
