import React, { Component } from 'react';
import WeekCalendar from 'react-week-calendar';
import CalendarModal from '../CalendarModal/CalendarModal';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import moment from 'moment';
import 'react-week-calendar/dist/style.css'



class Calendar extends Component {
    render() {
        return (
            <WeekCalendar startTime={moment({h: 9, m: 0})} numberofDays="5" scaleUnit={30} endTime={moment({h: 18, m: 0})} eventComponent={() => <CalendarEvent/>} modalComponent={CalendarModal}/>
        )
    }
}

export default Calendar

