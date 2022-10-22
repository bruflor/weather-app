import axios from "axios"

export const WeatherApi = axios.create({
    baseURL: "http://dataservice.accuweather.com/",
    method: "GET",
    params: {
        apikey: "EGz6c2kKB9UObwAvOfLTkUgPLkshVW91",
        metric: true
    }
})
