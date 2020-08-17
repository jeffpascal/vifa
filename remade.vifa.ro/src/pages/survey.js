import React from "react"
import { useState } from "react"
import * as Survey from "survey-react"
import "survey-react/survey.css"

import ImageSelector from "../components/Survey/ImageSelector"
import InformationCollection from "../components/Survey/InformationCollection"
import * as questions from "../components/Survey/questions"

const SurveyPage = () => {
  const MainSurvey = (props) => {
    let model = new Survey.Model(props.survey)
    return <Survey.Survey model={model} onComplete={onComplete} />
  }

  // function useInput({ type /*...*/ }) {
  //   const [value, setValue] = useState("")
  //   const input = (
  //     <input
  //       value={value}
  //       onChange={(e) => setValue(e.target.value)}
  //       type={type}
  //     />
  //   )
  //   return [value, input]
  // }

  // const [username, userInput] = useInput({ type: "text" })
  // const [password, passwordInput] = useInput({ type: "text" })

  // return (<>
  //         {userInput} -> {username} <br />
  //         {passwordInput} -> {password}
  //       </>)

  function onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data))
  }

  function setSurvey(selectedSurvey) {
    if (selectedSurvey.target.getAttribute("src").includes("vilafranceza")) {
      setChosenSurvey(questions.quizVifa)
    }
    if (selectedSurvey.target.getAttribute("src").includes("apartamente")) {
      setChosenSurvey(questions.quizApartamente)
    }
    if (selectedSurvey.target.getAttribute("src").includes("casapescarului")) {
      setChosenSurvey(questions.quizCasapescarului)
    }
    if (selectedSurvey.target.getAttribute("src").includes("casagabriela")) {
      setChosenSurvey(questions.quizCasagabriela)
    }

    console.log(selectedSurvey.target.getAttribute("src"))
  }

  const [number, setNumber] = useState(() => {
    if (typeof window !== `undefined`) {
      return new URLSearchParams(window.location.search).get("telefon")
    }
  })
  const [chosenSurvey, setChosenSurvey] = useState(null)
  const [wasInformationCollected, setWasInformationCollected] = useState(false)

  return (
    <>
      <InformationCollection phoneNumber={number}></InformationCollection>
      <ImageSelector
        send={(prop) => {
          console.log(prop)
        }}
      />

      <MainSurvey survey={chosenSurvey}></MainSurvey>
    </>
  )
}

export default SurveyPage
