import React, { useState, createRef } from 'react';
import './App.css';
import Calendar from '@toast-ui/react-calendar'
import 'tui-calendar/dist/tui-calendar.css'

function App() {
  const calendarRef = createRef()

  //Set view of the calendar
  const [currView, setCurrView] = useState('month')

  const handleCurrView = view => {
    setCurrView(view)
  }

  const view = [
    'day',
    'week',
    'month'
  ]

  //Preview and Next function for the calendar
  const handlePrevButton = () => {
    const calendarInstance = calendarRef.current.getInstance()
    calendarInstance.prev()
  }

  const handleNextButton = () => {
    const calendarInstance = calendarRef.current.getInstance()
    calendarInstance.next()
  }

  // Today function
  const handleTodayButton = () => {
    const calendarInstance = calendarRef.current.getInstance()
    calendarInstance.today()
  }
  

  //Sample schedule
  const [schedule, setSchedule] = useState([
    {
      id: '1',
      calendarId: '0',
      title: 'Providers',
      category: 'time',
      start: '2019-10-01T22:30:00+09:00',
      end: '2019-10-02T02:30:00+09:00'
    },
    {
      id: '1',
      calendarId: '1',
      title: 'Location',
      category: 'time',
      start: '2019-10-18T22:30:00+09:00',
      end: '2019-10-19T02:30:00+09:00'
    },
    {
      id: '1',
      calendarId: '2',
      title: 'Rooms',
      category: 'time',
      start: '2019-10-21T22:30:00+09:00',
      end: '2019-10-22T02:30:00+09:00'
    },
  ])

  //New schedule popup
  const handleNewSchedule = () => {
    const calendarInstance = calendarRef.current.getInstance()
    calendarInstance.openCreationPopup(schedule)
  }

  //Create new schedule

  //Calendar schedule categories
  const calendarCat = [
    {
      id: '0',
      name: 'Providers',
      bgColor: '#9e5fff',
      borderColor: '#9e5fff'
    },
    {
      id: '1',
      name: 'Location',
      bgColor: '#00a9ff',
      borderColor: '#00a9ff'
    },
    {
      id: '2',
      name: 'Rooms',
      bgColor: '#03bd9e',
      borderColor: '#03bd9e'
    }
  ]

  //Filter schedule category
  const [filterCat, setFilterCat] = useState([
    {
      name: 'Providers',
      check: true
    },
    {
      name: 'Location',
      check: true
    },
    {
      name: 'Rooms',
      check: true
    },
  ])

  //Set calendar features/options
  const calendarOptions = {
    usageStatistics: false,
    taskView: false,
    scheduleView: true,
    view: currView,
    disableDblClick: true,
    disableClick: false,
    useDetailPopup: true,
    useCreationPopup: true,
    schedules: schedule,
    calendars: calendarCat
  }

  console.log(setSchedule)
  console.log(filterCat)
  console.log(setFilterCat)

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
      <div>
        <button onClick={handleTodayButton}>Today</button>
      </div>
      <div>
        <button onClick={handleNewSchedule}>New Schedule</button>
      </div>
      <div>
        <label><input type="checkbox" />Provider</label>
        <label><input type="checkbox" />Location</label>
        <label><input type="checkbox" />Room</label>
      </div>
      <Calendar
        ref={calendarRef}
        {...calendarOptions}
      />
    </div>
  );
}

export default App;
