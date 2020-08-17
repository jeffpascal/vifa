import React, { useState } from "react"
import "./OpeningHours.css"

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
    <div className="container demo-bg">
      <div className="row">
        <div className="col-sm-12">
          <div className="business-hours">
            <h2 className="title">Opening Hours</h2>
            <ul className="list-unstyled opening-hours">
              {numberDaysOfWeek.map((day, index) => {
                if (currentDay === day) {
                  return (
                    <li key={index} className="active">
                      {daysOfWeek[day]}
                      <span className="pull-right">3:00-24:00</span>
                    </li>
                  )
                }
                return (
                  <li key={index}>
                    {daysOfWeek[day]}{" "}
                    <span className="pull-right">3:00-24:00</span>
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
