
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




const Schedule = () => {

    const [value, onChange] = useState(new Date());

    return (
        <>
             
             <Calendar onChange={onChange} value={value}  locale="en-US" />

        </>
      
    
  )
}

export default Schedule
