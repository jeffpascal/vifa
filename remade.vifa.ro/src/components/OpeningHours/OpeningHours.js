import React, { useState } from "react"
import "./OpeningHours.css"
import MyGoogleMap from "../../components/GoogleMap"

const OpeningHours = () => {
  const [currentDay, setCurrentDay] = useState(new Date().getDay())

  const daysOfWeek = {
    1: "Monday ",
    2: "Tuesday ",
    3: "Wednesday ",
    4: "Thursday ",
    5: "Friday ",
    6: "Saturday ",
    7: "Sunday ",
  }

  const numberDaysOfWeek = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div class="container demo-bg">
      <div class="row">
        <div class="col-sm-8">
          <MyGoogleMap></MyGoogleMap>
        </div>
        <div class="col-sm-4">
          <div class="business-hours">
            <h2 class="title">Opening Hours</h2>
            <ul class="list-unstyled opening-hours">
              {numberDaysOfWeek.map((day, index) => {
                if (currentDay === day) {
                  return (
                    <li className="active">
                      {daysOfWeek[day]}
                      <span class="pull-right">3:00-24:00</span>
                    </li>
                  )
                }
                return (
                  <li>
                    {daysOfWeek[day]} <span class="pull-right">3:00-24:00</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpeningHours
