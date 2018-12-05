import axios from "axios";

const key = "AIzaSyCXyI5scBl0T5G4eHvnUBFtOlIrA9vZE1c";

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        part : "snippet",
        maxResults : 5,
        key
    }
});