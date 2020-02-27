import React, { useState } from "react"
import Layout from "../components/layout"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumer, setPhoneNumer] = useState("")
  const [description, setDescription] = useState("")
  const [confirmation, setConfirmation] = useState("")

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

  function handleSubmit(event) {
    event.preventDefault()
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
        setConfirmation("Success")
        alert("success")
      } else {
        setConfirmation("Fail")
        alert("something went wrong")
      }
    })
  }

  return (
    <Layout>
      <div>
        <form>
          <section className="form-group">
            <input
              type="text"
              id="name-input"
              onChange={handleNameChange}
            ></input>
            <input
              type="text"
              id="name-input2"
              onChange={handlePhoneChange}
            ></input>
            <input
              type="email"
              id="name-input3"
              onChange={handleEmailChange}
            ></input>
            <input
              type="textarea"
              id="name-input3"
              onChange={handleDescriptionChange}
            ></input>
            <button type="submit" onClick={handleSubmit}>
              Click me
            </button>
            <p>{confirmation}</p>
          </section>
        </form>
      </div>
    </Layout>
  )
}
export default Contact
