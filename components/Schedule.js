export default function Schedule() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const weeks = [
    { week: 1, date: "2023-09-04", title: "Introduction", task: "assignment" },
    { week: 2, date: "2023-09-11", title: "JS 1", task: "assignment" },
    { week: 3, date: "2023-09-18", title: "JS 2", task: "assignment" },
    { week: 4, date: "2023-09-25", title: "JSX", task: "assignment" },
    { week: 5, date: "2023-10-02", title: "Tailwind", task: "assignment" },
    { week: 6, date: "2023-10-09", title: "Interactivity", task: "assignment" },
    { week: 7, date: "2023-10-16", title: "State", task: "assignment" },
    { week: 8, date: "2023-10-23", title: "Data Fetching", task: "assignment" },
    { week: 9, date: "2023-10-30", title: "API", task: "assignment" },
    { week: 10, date: "2023-11-06", title: "Exam", task: "exam" },
    { week: 11, date: "2023-11-13", title: "Auth", task: "project" },
    { week: 12, date: "2023-11-20", title: "Routing", task: "project" },
    { week: 13, date: "2023-11-27", title: "Rendering", task: "project" },
    { week: 14, date: "2023-12-04", title: "Deployment", task: "project" },
    { week: 15, date: "2023-12-11", title: "Showcase", task: "project" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Week</th>
          <th>Date</th>
          <th>Title</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {weeks.map((week) => (
          <tr key={week.week}>
            <td>{week.week}</td>
            <td>{week.date}</td>
            <td>{week.title}</td>
            <td>{week.task}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
