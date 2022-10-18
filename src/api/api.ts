import axios from "axios"

export const WeatherApi = axios.create({
    baseURL: "http://dataservice.accuweather.com/",
    method: "GET",
    params: {
        apikey: "xujOz8B6WixFEGSbKDsF85lZ52LbtJBa",
        metric: true
    }
})
