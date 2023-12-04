import React, { useEffect, useState } from "react"
import axios from "axios"

import Weather from "./components/Weather"
import { Button, Grid, TextField, Typography } from "@mui/material"

const App = () => {
  const [city, setCity] = useState("Visakhapatnam")
  const [weatherData, setWeatherData] = useState(null)
  console.log("weatherData: ", weatherData);
  const [loading, setLoading] = useState(false)
  const Apikey = "1635890035cbba097fd5c26c8ea672a1"

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${Apikey}`
        )
        setWeatherData(response.data)
      } catch (error) {
        console.error(error)
        // Handle the error state
      }
      setLoading(false)
    }

    fetchWeather()
  }, [city])

  return (
    <>
       <Grid container spacing={2} sx={{marginTop:'1rem'}} alignSelf={'center'}>
        <Grid item xs={12} lg={4} >
          <Typography variant="h3" align="center">
            Weather in your City
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} alignSelf={'center'}>
          <TextField
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} alignSelf={'center'}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => setCity(city)}
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          {loading ? <p>Loading...</p> : weatherData && <Weather data={weatherData} />}
        </Grid>
      </Grid>
    </>
  )
}

export default App
