import axios from "axios"

export const WeatherApi = axios.create({
    // baseURL: "http://dataservice.accuweather.com/currentconditions/v1/274087?apikey=qzecCM3srZb9djpibG98IQ8KMNXD0ZAO&language=en-use&details=false",
    //Lisbon search + apikey => 274087?apikey=qzecCM3srZb9djpibG98IQ8KMNXD0ZAO&language=en-use&details=false
    baseURL: "http://dataservice.accuweather.com/",
    method: "GET",
    params: {
        apikey: "qzecCM3srZb9djpibG98IQ8KMNXD0ZAO",
    }
})
