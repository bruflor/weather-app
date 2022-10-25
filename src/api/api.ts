import axios from "axios"

export const WeatherApi = axios.create({
    baseURL: "http://dataservice.accuweather.com/",
    method: "GET",
    params: {
        apikey: "t4umszCGcLbwsCq5c6sENb87h3nqv5rk",
        metric: true,
        details: true
    }
})
