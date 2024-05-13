import axios from "axios";
import { useState } from "react"

export const useEvent = () => {
    const [events, setEvents] = useState<TUseEvent[]>([]);
    const fetchEvents = async() => {
        try{
            const response = await axios.get("https://adminpanel-3mjeldvoua-uc.a.run.app/admin/Event")
            setEvents(response.data.events);
        }
        catch(error){
            console.log(error)
        }
    }
    return {events, fetchEvents}
}