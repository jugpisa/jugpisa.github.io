import {useEffect} from 'react';
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import { mapEvents } from "../services/getEvents.service";

const Events = ({events}) => {
    const today = new Date().toISOString().split('T')[0]

    const mappedEvents = mapEvents(events);

    useEffect(() => {
        console.debug(mappedEvents);
    }, [])

    const buttonText = {
        today:    'Oggi',
        month:    'Mese',
        week:     'Settimana',
        day:      'Giorno',
        list:     'Lista'
    };

    const titleFormat = {year: 'numeric', month: "short", day: "2-digit"};

    return (
        <FullCalendar 
            locale='it'
            initialDate={today}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth" 
            events={mappedEvents}
            buttonText={buttonText}
            titleFormat={titleFormat}
        />
    );
}

export default Events;