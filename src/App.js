import React, { useEffect, useState } from "react"
import axios from "axios"

import Weather from "./components/Weather"
import { Button, Grid, TextField, Typography } from "@mui/material"

const App = () => {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const Apikey = "1635890035cbba097fd5c26c8ea672a1"

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${Apikey}`
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
      <Grid container xs={12}>
        <Grid item container xs={12} sx={{ margin: "1rem" }}>
          <Grid item container xs={4} justifyContent={"center"}>
            <Typography variant="h3">Weather in your City</Typography>
          </Grid>
          <Grid item container xs={4} justifyContent={"center"}>
            <Grid item>
              <TextField
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                sx={{ marginRight: "1rem" }}
              />
            </Grid>
            <Grid item alignSelf={"center"}>
              <Button
                variant="contained"
                size="large"
                onClick={() => setCity(city)}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            weatherData && <Weather data={weatherData} />
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default App
