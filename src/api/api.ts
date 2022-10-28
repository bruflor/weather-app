import axios from "axios"

export const WeatherApi = axios.create({
    baseURL: "https://dataservice.accuweather.com/",
    method: "GET",
    params: {
        apikey: "1y4LGcZPayGamY8mN04J5w7DDhzE6nCu",
        metric: true,
        details: true
    }
})
