import axios from "axios"

export const WeatherApi = axios.create({
    baseURL: "http://dataservice.accuweather.com/",
    method: "GET",
    params: {
        apikey: "3vvGcaXcODnAOMnwR3Nr5XqAHZm1RQYR",
        metric: true,
        details: true
    }
})
