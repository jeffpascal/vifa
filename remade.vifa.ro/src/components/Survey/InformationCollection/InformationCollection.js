import React, { useEffect } from "react"
import { useState } from "react"
import "./InformationCollection.css"

const InformationCollection = (props) => {
  const [email, setEmail] = useState()
  const [collectedEmail, setCollectedEmail] = useState(1)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCollectedEmail(email)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [email])

  useEffect(() => {
    //fetch()
    console.log(collectedEmail)
  }, [collectedEmail])

  function handleEmail() {
    console.log(collectedEmail)
  }
  console.log("what?")
  if (props.phoneNumber) {
    return (
      //number is in link
      <form className="container jumbotron">
        <div className="form-group">
          <label htmlFor="inputmail">Adresa de mail {collectedEmail}</label>
          <input
            type="email"
            className="form-control"
            id="inputmail"
            aria-describedby="emailHelp"
            placeholder="exemplu@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
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
