
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = [
    {
      title: 'Valmir - Corte Degrade + Barba',
      start: moment().toDate(),
      end: moment().add(90, 'minutes').toDate(),
    },
  ];

  return (
    <div style={{ height: 600, width: 1100, overflow: 'hidden' }}>
      <div style={{ height: '100%', overflowY: 'scroll', scrollbarWidth: 'none' }}>
        <Calendar
          localizer={localizer}
          events={events}
          defaultView="week"
          selectable
          popup
          style={{ height: 600, width: 1100 }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
