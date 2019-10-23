import React, { useState, useEffect, createRef } from 'react';
import './App.css';
import Calendar from '@toast-ui/react-calendar'
import 'tui-calendar/dist/tui-calendar.css'
import 'tui-date-picker/dist/tui-date-picker.css'
import 'tui-time-picker/dist/tui-time-picker.css'

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
  const [schedule, setSchedule] = useState([])

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

  //New schedule popup
  const handleNewSchedule = () => {
    const calendarInstance = calendarRef.current.getInstance()
    calendarInstance.openCreationPopup(schedule)
  }

  //Create new schedule
  const handleCreateSchedule = event => {
    let copySchedule = schedule

    const newSchedule = {
      id: '1',
      calendarId: event.calendarId,
      title: event.title,
      category: 'time',
      start: event.start,
      end: event.end
    }

    copySchedule.push(newSchedule)

    setSchedule([...copySchedule])
  }

  //Delete schedule
  const handleDeleteSchedule = event => {

    console.log(event)
  }

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

  // useEffect(() => {
  //   let currFilterCat = []    
  //   let copyCalendarCat = calendarCat

  //   copyCalendarCat.forEach(item => {
  //     currFilterCat.push({
  //       name: item.name,
  //       check: false
  //     })
  //   })

  //   setFilterCat(currFilterCat)
  // }, [])

  const handleFilterCat = catIndex => {
    let copyFilterCat = filterCat

    copyFilterCat[catIndex].check = !copyFilterCat[catIndex].check
    setFilterCat([...copyFilterCat])
  }

  useEffect(() => {
    const calendarInstance = calendarRef.current.getInstance()

    filterCat.forEach((filter, index) => {
      if (filter.check === true) {
        calendarInstance.toggleSchedules(index.toString(), false, true)
      } else {
        calendarInstance.toggleSchedules(index.toString(), true, true)
      }
    })
  })

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
    calendars: calendarCat,
    onBeforeCreateSchedule: handleCreateSchedule,
    onBeforeDeleteSchedule: handleDeleteSchedule
  }

  useEffect(() => {
    
  }, [schedule])

  console.log(schedule)  

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
        {filterCat.map((item,index) => (
          <label key={index}><input type="checkbox" checked={item.check} onChange={() => handleFilterCat(index)}/>{item.name}</label>
        ))}
      </div>
      <Calendar
        ref={calendarRef}
        {...calendarOptions}
      />
    </div>
  );
}

export default App;
