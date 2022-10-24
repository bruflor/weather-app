import axios from "axios"

export const WeatherApi = axios.create({
    baseURL: "http://dataservice.accuweather.com/",
    method: "GET",
    params: {
        apikey: "5YQw4IUwA4QFtFDzRlOYBolZpsmEEnSP",
        metric: true,
        details: true
    }
})
