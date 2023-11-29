const Page = `
import DatePicker from './date-picker';

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl">Hotel Booking</h1>
      <DatePicker />
    </main>
  )
}
`;

const DatePicker = `"use client";

import { useState } from 'react';
import DateInput from './date-input';

export default function DatePicker() {
  const [dates, setDates] = useState({ startDate: "", endDate: "" });

  const handleStartDateChange = (newStartDate) => {
    setDates(prevDates => ({ ...prevDates, startDate: newStartDate }));
    // TODO: Ensure that the end date is not before the start date
  };

  const handleEndDateChange = (newEndDate) => {
    // TODO: Update the state with the new end date
    // TODO: Ensure that the start date is not after the end date
  };

  return (
    <div>
      <DateInput label="Start Date:" value={dates.startDate} onChange={handleStartDateChange} />
      <DateInput label="End Date:" value={dates.endDate} onChange={handleEndDateChange} />
    </div>
  );
}
`;

const DateInput = `
export default function DateInput({ label, value, onChange }) {
  const handleDateChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <label>
      {label}
      <input
        type="date"
        value={value}
        onChange={handleDateChange}
      />
    </label>
  );
}
`;

const DatePickerSolution = `"use client";

import { useState } from 'react';
import DateInput from './date-input';

export default function DatePicker() {
  const [dates, setDates] = useState({ startDate: "", endDate: "" });

  const handleStartDateChange = (newStartDate) => {
    setDates(prevDates => {
      // If the new start date is after the current end date, 
      // update the end date to the new start date
      if (newStartDate > prevDates.endDate) {
        return { startDate: newStartDate, endDate: newStartDate };
      } else {
        return { ...prevDates, startDate: newStartDate };
      }
    });
  };

  const handleEndDateChange = (newEndDate) => {
    setDates(prevDates => {
      // If the new end date is before the current start date, 
      // update the start date to the new end date
      if (newEndDate < prevDates.startDate) {
        return { startDate: newEndDate, endDate: newEndDate };
      } else {
        return { ...prevDates, endDate: newEndDate };
      }
    });
  };

  return (
    <div>
      <DateInput label="Start Date:" value={dates.startDate} onChange={handleStartDateChange} />
      <DateInput label="End Date:" value={dates.endDate} onChange={handleEndDateChange} />
    </div>
  );
}
`;

// Location of file as key (always starts with /)
export const activity = {
  "/page.js": {
    code: Page,
    active: true,
  },
  "/date-picker.js": {
    code: DatePicker,
    active: false,
  },
  "/date-input.js": {
    code: DateInput,
    active: false,
  },
};

export const solution = {
  "/page.js": {
    code: Page,
    active: true,
  },
  "/date-picker.js": {
    code: DatePickerSolution,
    active: false,
  },
  "/date-input.js": {
    code: DateInput,
    active: false,
  },
};

/* Foo is used to solve the bug: Build optimization failed:
  found page without a React Component as default export in pages/week-1/samples-demo
*/
export default function Foo() {
  return <div>Foo</div>;
}
