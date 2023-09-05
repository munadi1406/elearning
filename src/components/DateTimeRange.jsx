import { useState } from "react";
import PropTypes from "prop-types";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { useNotification } from "../store/strore";

export default function DateTimeRange({ dateFrom, dateTo }) {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [dateRange, setDateRange] = useState("");
  const {setStatus,setStatusType,setMsgNotification} = useNotification();

  const handleFromDateChange = (date) => {
    const newFromDate = moment(date);
    const utcFormat = moment(newFromDate).utc().format()
    if (new Date(newFromDate) >= new Date(toDate)) {
      setStatus(true)
      setStatusType(false);
      setMsgNotification("Pastikan Waktu Mulai Dan Waktu Berakhir Anda Sudah Benar");
      setFromDate(null);
      setDateRange(null);
      return;
    } else {
      setFromDate(newFromDate);
      dateFrom(utcFormat);
      updateDateRange(newFromDate, toDate);
    }
  };

  const handleToDateChange = (date) => {
    const newToDate = moment(date);
    const utcFormat = moment(newToDate).utc().format()
    if (new Date(newToDate) <= new Date(fromDate)) {
      setStatus(true)
      setStatusType(false);
      setMsgNotification("Pastikan Waktu Mulai Dan Waktu Berakhir Anda Sudah Benar");
      setToDate(null);
      setDateRange(null);
      return
    } else {
      dateTo(utcFormat);
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
    <div className="w-full grid grid-cols-1 gap-1">
      <div className="grid grid-cols-6 gap-2 items-center w-full">
        <label htmlFor="from-date" className="text-sm font-semibold text-blue1 col-span-2">
          Start Date:
        </label>
        <Datetime onChange={handleFromDateChange} value={fromDate} closeOnSelect={true} className="border-blue1 border-2 rounded-lg w-full col-span-4 p-1" />
      </div>
      <div className="grid grid-cols-6 gap-2 items-center w-full">
        <label htmlFor="to-date" className="col-span-2 text-sm font-semibold text-blue1">
          End Date:
        </label>
        <Datetime onChange={handleToDateChange} value={toDate} closeOnSelect={true}  className="border-blue1 border-2 rounded-lg w-full col-span-4 p-1"/>
      </div>
      <div className="text-xs font-semibold font-sans text-blue1">Range : {dateRange}</div>
    </div>
    
  );
}
DateTimeRange.propTypes = {
  dateFrom: PropTypes.func.isRequired,
  dateTo: PropTypes.func.isRequired,
};
