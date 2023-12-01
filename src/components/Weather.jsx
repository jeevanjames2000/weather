import React from "react"

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Card,
  CardContent,
} from "@mui/material"
function Weather({ data }) {
  return (
    <Grid container spacing={2}>
      {data &&
        data.list.slice(0, 5).map((day, index) => (
          <Grid item key={index} xs={12} md={4}>
            <Card>
              <CardContent>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "orange" }}>
                      <TableCell colSpan={2}>Date</TableCell>
                      <TableCell colSpan={2}>{day.dt_txt}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" colSpan={4}>
                        Temperature
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={2}>Min</TableCell>
                      <TableCell colSpan={2}>Max</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>{day.main.temp_min}°C</TableCell>
                      <TableCell colSpan={2}>{day.main.temp_max}°C</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={2}>Pressure</TableCell>

                      <TableCell colSpan={2}>{day.main.pressure} hPa</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={2}>Humidity</TableCell>

                      <TableCell colSpan={2}>{day.main.humidity}%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}

export default Weather
