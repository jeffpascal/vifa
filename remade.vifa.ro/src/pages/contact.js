import React, { useState } from "react"
import Layout from "../components/layout"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumer, setPhoneNumer] = useState("")
  const [description, setDescription] = useState("")
  const [confirmation, setConfirmation] = useState("")
  const [error, setError] = useState("No errors")

  function handleNameChange(event) {
    setName(event.target.value)
  }
  function handlePhoneChange(event) {
    setPhoneNumer(event.target.value)
  }
  function handleEmailChange(event) {
    setEmail(event.target.value)
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  function handleCheck(event) {
    console.log(event.target.value)
    console.log(event)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validateEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/

    if (!validateEmail.test(email)) {
      setError("E-mail must contain @")
      return
    }

    const url = `https://iwk820vmz1.execute-api.eu-central-1.amazonaws.com/Prod/contact`
    const data = {
      name: name,
      email: email,
      phone: phoneNumer,
      desc: description,
    }
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.status === 200) {
        setConfirmation("Mesajul a fost trimis cu succes")
        setError("")
        alert("success")
      } else {
        setConfirmation("A fost o problema cu mesajul dumneavoastra. Va rog sa ne contactati direct la mailul unic_juridic@yahoo.com")
        setError("")
      }
    })
  }

  return (
    <Layout>
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label htmlFor="inputmail" for="inputmail">
              Adresa de mail
            </label>
            <input
              type="email"
              className="form-control"
              id="inputmail"
              aria-describedby="emailHelp"
              placeholder="exemplu@gmail.com"
              onChange={handleEmailChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Nu vom partaja mailul dumneavoastra cu nimeni
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="inputphone" for="inputphone">
              Numar de Telefon
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputphone"
              placeholder="003371128829"
              onChange={handlePhoneChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Includeti prefix exemplu: 0040755112151
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="inputname" for="inputname">
              Nume intreg
            </label>
            <input
              type="text"
              className="form-control"
              id="inputname"
              placeholder="Maria Silva Cosmina"
              onChange={handleNameChange}
            />
            <small id="emailHelp" class="form-text text-muted">
              Nume + Prenume complet
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="inputcomment" for="inputcomment">
              Comment:
            </label>
            <textarea
              id="inputcomment"
              className="form-control"
              rows="5"
              onChange={handleDescriptionChange}
            ></textarea>
            <small id="emailHelp" className="form-text">
              <p style={{ color: "red" }}>{error}</p>
              Cu ce va putem ajuta
            </small>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              htmlFor="exampleCheck1"
              className="form-check-label"
              for="exampleCheck1"
              defaultChecked={handleCheck}
              onChange={handleCheck}
            >
              Sunt de acord cu prelucrarea datelor personale
            </label>
            <small id="exampleCheck1" className="form-text text-muted">
              Nu vom partaja detaliile dumneavoastra cu nimeni altcineva.
            </small>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
          <p>{confirmation}</p>
        </form>
      </div>
      <div></div>
    </Layout>
  )
}
export default Contact
