import React from "react"
import {useState} from "react"
import "./InformationCollection.css"

const InformationCollection = (props) => {
  const [collectedEmail, setCollectedEmail] = useState(1)

  function handleEmail(event) {
    console.log(event.target.value)
    setCollectedEmail(event.target.value)
  }
  console.log("what?")
  if (props.phoneNumber) {
    return (
      //number is in link
      <form className="container jumbotron">
        <div className="form-group">
          <label htmlFor="inputmail">Adresa de mail</label>
          <input
            type="email"
            className="form-control"
            id="inputmail"
            aria-describedby="emailHelp"
            placeholder="exemplu@gmail.com"
            onChange={handleEmail}
            aria-label="Enter e-mail address"
          />
          <small id="emailHelp" className="form-text text-muted">
            Nu vom partaja mailul dumneavoastra cu nimeni
          </small>
        </div>
      </form>
    )
  } //not in link
  else return <p>a</p>
}

export default InformationCollection