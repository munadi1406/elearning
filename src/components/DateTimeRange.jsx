import { useState } from "react";
import PropTypes from "prop-types";

export default function DateTimeRange({ dateFrom, dateTo }) {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [dateRange, setDateRange] = useState("");
  const handleFromDateChange = (event) => {
    const newFromDate = event.target.value;
    if (new Date(newFromDate) >= new Date(toDate)) {
      alert("From date must be before To date");
      setFromDate("");
      setDateRange("");
    } else {
      setFromDate(newFromDate);
      dateFrom(newFromDate);
      updateDateRange(newFromDate, toDate);
    }
  };

  const handleToDateChange = (event) => {
    const newToDate = event.target.value;
    if (new Date(newToDate) <= new Date(fromDate)) {
      alert("To date must be after From date");
      setToDate("");
      setDateRange("");
    } else {
      dateTo(newToDate);
      setToDate(newToDate);
      updateDateRange(fromDate, newToDate);
    }
  };

  const updateDateRange = (start, end) => {
    const rangeStart = new Date(start);
    const rangeEnd = new Date(end);
    const diffInMilliseconds = rangeEnd - rangeStart;
    const days = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (diffInMilliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minutes = Math.floor(
      (diffInMilliseconds % (60 * 60 * 1000)) / (60 * 1000)
    );
    let formattedRange = "";
    if (days > 0) {
      formattedRange += `${days} hari`;
    }
    if (hours > 0) {
      formattedRange += ` ${hours} jam`;
    }
    if (minutes > 0) {
      formattedRange += ` ${minutes} menit`;
    }
    setDateRange(`${formattedRange}`);
  };
  return (
    <>
      <div className="flex justify-start gap-2 items-center">
        <label htmlFor="from-date" className="text-sm font-semibold text-blue1">
          From:
        </label>
        <input
          type="datetime-local"
          id="from-date"
          value={fromDate}
          onChange={handleFromDateChange}
          required
        />
      </div>
      <div className="flex justify-start gap-2 items-center">
        <label htmlFor="to-date" className="text-sm font-semibold text-blue1">
          To:
        </label>
        <input
          type="datetime-local"
          id="to-date"
          value={toDate}
          onChange={handleToDateChange}
          required
        />
      </div>
      <div className="text-xs font-semibold font-sans text-blue1">Range : {dateRange}</div>
    </>
  );
}
DateTimeRange.propTypes = {
  dateFrom: PropTypes.func.isRequired,
  dateTo: PropTypes.func.isRequired,
};
