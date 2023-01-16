import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : '920204d32ff87fd2e415f86357dbe515',
        language : "ko-KR",
    },

});

export default instance;