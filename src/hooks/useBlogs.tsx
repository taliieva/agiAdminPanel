import axios from "axios";
import { useState } from "react"

export const useBlogs = () => {
    const [blogs, setBlogs] = useState<TUseBlog[]>([]);
    const fetchBlogs = async() => {
        try{
            const response = await axios.get("https://adminpanel-3mjeldvoua-uc.a.run.app/admin/Blog")
            setBlogs(response.data.blogs);
        }
        catch(error){
            console.log(error)
        }
    }
    return {blogs, fetchBlogs}
}