import axios from "axios"

export const WeatherApi = axios.create({
    baseURL: "http://dataservice.accuweather.com/",
    method: "GET",
    params: {
        apikey: "qzecCM3srZb9djpibG98IQ8KMNXD0ZAO",
        metric: true
    }
})
