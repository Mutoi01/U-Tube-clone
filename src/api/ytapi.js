import axios from "axios";

export const KEY = 'AIzaSyDP4KqVxbuKYS-PajsEk1uram7yRGpaGMY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
})
