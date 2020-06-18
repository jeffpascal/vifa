import React from "react"
import { useEffect, useState } from "react"

const Survey = () => {
  const questions = {
    1: {
      type: "image",
      text: "Alegeti casa la care ati fost",
      answers: {
        1: {
          imageUrl: "http",
        },
        2: {
          imageUrl: "http",
        },
        3: {
          imageUrl: "http",
        },
      },
    },
    2: {
      type: "slider",
      text: "Cat de multumiti sunteti cu casa",
      answers: {
        23: {
          name: "http",
        },
        33: {
          name: "http",
        },
        100: {
          name: "http",
        },
      },
    },
  }
  const [number, setNumber] = useState(null)

  function FormMail() {
    return (
      <div>
        <p>form tel1</p>
        <p>form mail1</p>
      </div>
    )
  }

  function FormPhoneMail() {
    return (
      <div>
        <p>form tel</p>
        <p>form mail</p>
      </div>
    )
  }

  function InputSelector(props) {
    let phoneNumberProvided = number
    console.log(phoneNumberProvided)
    if (phoneNumberProvided === null) {
      return <FormPhoneMail />
    } else return <FormMail />
  }

  useEffect(() => {
    console.log(
      "called useeffect" +
        new URLSearchParams(window.location.search).get("telefon")
    )
    setNumber(new URLSearchParams(window.location.search).get("telefon"))
  }, [])

  function handleCasaP() {}

  return (
    <>
      <InputSelector />
      <p>Choose which house you have been at</p>
      <a href="#" onClick={handleCasaP}>
        CP
      </a>
      <a href="#" onClick={handleCasaP}>
        vf
      </a>
      <a href="#" onClick={handleCasaP}>
        ma
      </a>
      <a href="#" onClick={handleCasaP}>
        cg
      </a>
    </>
  )
}

export default Survey
