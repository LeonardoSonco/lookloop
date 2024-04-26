import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./index.css";

const localizer = momentLocalizer(moment);

console.log(moment().add(90, "minutes").toDate());

const MyCalendar = () => {
  const events = [
    {
      title: "Valmir Jr - Corte Degrade + Barba",
      start: moment("Apr 25 2024 13:30:00").toDate(),
      end: moment("Apr 25 2024 13:30:00").add(60, "minutes").toDate(),
    },
    {
      title: "Carlos - Corte Degrade",
      start: moment("Apr 25 2024 15:00:00").toDate(),
      end: moment("Apr 25 2024 15:00:00").add(30, "minutes").toDate(),
    },
    {
      title: "Edu - Corte Degrade + Barba",
      start: moment("Apr 25 2024 16:00:00").toDate(),
      end: moment("Apr 25 2024 16:00:00").add(30, "minutes").toDate(),
    },
    {
      title: "Lala - Corte Degrade + Barba",
      start: moment("Apr 25 2024 17:00:00").toDate(),
      end: moment("Apr 25 2024 17:00:00").add(30, "minutes").toDate(),
    },

    {
      title: "Leonardo - Corte Degrade + Barba",
      start: moment("Apr 24 2024 09:30:00").toDate(),
      end: moment("Apr 24 2024 09:30:00").add(45, "minutes").toDate(),
    },
    {
      title: "Rodrigo - Corte Degrade + Barba",
      start: moment("Apr 26 2024 11:00:00").toDate(),
      end: moment("Apr 26 2024 11:00:00").add(30, "minutes").toDate(),
    },
  ];

  return (
    <div style={{ height: 600, width: "90vw", overflow: 'hidden', maxWidth: 1100 }}>
    <Calendar
      localizer={localizer}
      step={15}
      min={new Date(2024, 10, 0, 8, 0, 0)}
      max={new Date(2024, 10, 0, 22, 0, 0)}
      events={events}
      defaultView="week"
    />
    </div>
  );
};

export default MyCalendar;

/* 

<div style={{ height: 600, width: 1100, overflow: 'hidden' }}>
      <div style={{ height: '100%', overflowY: 'scroll', scrollbarWidth: 'none' }}>
       
      </div>
    </div>*/
