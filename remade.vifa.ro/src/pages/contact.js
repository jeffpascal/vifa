import React, { useState } from "react"
import Layout from "../components/layout"
import Reaptcha from "reaptcha"
import MyGoogleMap from "../components/googlemap"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumer, setPhoneNumer] = useState("")
  const [description, setDescription] = useState("")
  const [confirmation, setConfirmation] = useState("")
  const [captcha, setCaptcha] = useState(true)
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
  function onVerify(token) {
    setCaptcha(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const validateEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    console.log(email)
    if (!validateEmail.test(email)) {
      setError("E-mail must contain @ and not be empty")
      return
    }
    if (captcha === true) {
      setError("Verify captcha")
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
        setConfirmation(
          "A fost o problema cu mesajul dumneavoastra. Va rog sa ne contactati direct la mailul unic_juridic@yahoo.com"
        )
        setError("")
      }
    })
  }

  return (
    <Layout>
      <div className="row">
        
        <div className="col-md-7">
          <h1>Contact vila franceza</h1>
          <p>Accesul se face dinspre orasul Bistrita de pe drumul european E58. Din localitatea Prundu Bargaului (vizavi de biserica), la dreapta, se continua pe drumul judetean 173A.</p>
          <p>Accesul dinspre Vatra Dornei se face de pe drumul european E58, la stanga, pe drumul judetean 173D, la intrarea in localitatea Muresenii Bargaului.</p>
          <p>Coordonate GPS: 47°10'29"N si 24°54'44"E</p>
          <MyGoogleMap></MyGoogleMap>
        </div>
        <div className="col-md-5">
          <div class="container">
          <p>Pentru rezervari si informatii suplimentare va asteptam la:</p>
          <p>E-MAIL: unic_juridic@yahoo.com</p>
          <p>Va rugam sa includeti in mesaj perioada si numarul de persoane pentru care doriti sa faceti rezervarea .</p>
          <p>Va multumim!</p>
          <p>Va vom contacta in cel mai scurt timp.</p>
          </div>
          <form id="demo-form">
            <div className="form-group">
              <label htmlFor="inputmail">Adresa de mail</label>
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
              <label htmlFor="inputphone">Numar de Telefon</label>
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
              <label htmlFor="inputname">Nume intreg</label>
              <input
                type="text"
                className="form-control"
                id="inputname"
                placeholder="Maria Silva Cosmina"
                onChange={handleNameChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                Nume + Prenume complet
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="inputcomment">Comment:</label>
              <textarea
                id="inputcomment"
                className="form-control"
                rows="5"
                onChange={handleDescriptionChange}
              ></textarea>
              <small id="emailHelp" className="form-text">
                Cu ce va putem ajuta
              </small>
              <p style={{ color: "red" }}>{error}</p>
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
                defaultChecked={handleCheck}
                onChange={handleCheck}
              >
                Sunt de acord cu prelucrarea datelor personale
              </label>
              <small id="exampleCheck1" className="form-text text-muted">
                Nu vom partaja detaliile dumneavoastra cu nimeni altcineva.
              </small>
            </div>
            <Reaptcha
              sitekey="6LccRd4UAAAAADH-A4ZbJFsDwWo_nVs4WIUwt-ld"
              onVerify={onVerify}
              render="explicit"
              onloadCallback={() => console.log("loaded")}
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
              disabled={captcha}
            >
              Submit
            </button>
            <p>{confirmation}</p>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default Contact
