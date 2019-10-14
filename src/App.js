import React, { useState, createRef } from 'react';
import './App.css';
import Calendar from '@toast-ui/react-calendar'
import 'tui-calendar/dist/tui-calendar.css'

function App() {
  const [currView, setCurrView] = useState('month')
  const calendarRef = createRef()

  const handleCurrView = view => {
    setCurrView(view)
  }

  const view = [
    'day',
    'week',
    'month'
  ]

  const calendarOptions = {
    usageStatistics: false,
    taskView: false,
    scheduleView: true,
    view: currView,
    disableDblClick: true,
    disableClick: false,
    useDetailPopup: true,
    useCreationPopup: true
  }

  const handlePrevButton = () => {
    const calendarInstance = calendarRef.current.getInstance()

    calendarInstance.prev()
  }

  const handleNextButton = () => {
    const calendarInstance = calendarRef.current.getInstance()

    calendarInstance.next()
  }

  return (
    <div className="App">
      <div>
        {view.map(item => (
          <button key={item} onClick={() => handleCurrView(item)}>{item}</button>
        ))}
      </div>
      <div>
        <button onClick={handlePrevButton}>Prev</button>
        <button onClick={handleNextButton}>Next</button>
      </div>
      <Calendar
        ref={calendarRef}
        {...calendarOptions}
      />
    </div>
  );
}

export default App;
