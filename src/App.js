import React from 'react';
import './App.css';
import Calendar from '@toast-ui/react-calendar'
import 'tui-calendar/dist/tui-calendar.css'

function App() {
  return (
    <div className="App">
      <Calendar
        usageStatistics={false}
        view='month'
        height="99.5vh"
        taskView={false}
        disableDblClick={true}
        disableClick={false}
        isReadOnly={false}
        month={{
          startDayOfWeek: 0
        }}
      />
    </div>
  );
}

export default App;
