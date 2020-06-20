import React from "react"
import { useEffect, useState } from "react"
import * as Survey from "survey-react"
import "survey-react/survey.css"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const SurveyPage = () => {
  const surveyImages = useStaticQuery(
    graphql`
      query surveyimages {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "survey" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `
  )

  const MainSurvey = (props) => {
    let model = new Survey.Model(props.survey)
    return <Survey.Survey model={model} onComplete={onComplete} />
  }

  const ImageSelector = () => {
    return (
      <div>
        <div className="">
          <div className="col-md-3">
            <a onClick={setSurvey}>
              <img
                src={
                  surveyImages.allFile.edges[0].node.childImageSharp.fluid.src
                }
              ></img>
            </a>
          </div>
          <div className="col-md-3">
            <a onClick={setSurvey}>
              <img
                src={
                  surveyImages.allFile.edges[1].node.childImageSharp.fluid.src
                }
              ></img>
            </a>
          </div>
          <div className="col-md-3">
            <a onClick={setSurvey}>
              <img
                src={
                  surveyImages.allFile.edges[2].node.childImageSharp.fluid.src
                }
              ></img>
            </a>
          </div>
          <div className="col-md-3">
            <a onClick={setSurvey}>
              <img
                src={
                  surveyImages.allFile.edges[3].node.childImageSharp.fluid.src
                }
              ></img>
            </a>
          </div>
        </div>
      </div>
    )
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

  const InformationCollection = (props) => {
    const [collectedEmail, setCollectedEmail] = useState(1)

    function handleEmail(event) {
      console.log(event.target.value)
      setCollectedEmail(event.target.value)
    }
    console.log("what?")
    if (number) {
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

  function onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data))
  }

  function setSurvey(selectedSurvey) {
    if (selectedSurvey.target.getAttribute("src").includes("vilafranceza")) {
      setChosenSurvey(quizVifa)
    }
    if (selectedSurvey.target.getAttribute("src").includes("apartamente")) {
      setChosenSurvey(quizApartamente)
    }
    if (selectedSurvey.target.getAttribute("src").includes("casapescarului")) {
      setChosenSurvey(quizCasapescarului)
    }
    if (selectedSurvey.target.getAttribute("src").includes("casagabriela")) {
      setChosenSurvey(quizCasagabriela)
    }

    console.log(selectedSurvey.target.getAttribute("src"))
  }

  var quizVifa = {
    title: "American History1 quizvvifa",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    showNavigationButtons: true,
    pages: [
      {
        questions: [
          {
            type: "radiogroup",
            name: "civilwar",
            title: "When was the Civil War?",
            choices: [
              "1750-1800",
              "1800-1850",
              "1850-1900",
              "1900-1950",
              "after 1950",
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "libertyordeath",
            title: "Who said 'Give me liberty or give me death?'",
            choicesOrder: "random",
            choices: [
              "John Hancock",
              "James Madison",
              "Patrick Henry",
              "Samuel Adams",
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "magnacarta",
            title: "What is the Magna Carta?",
            choicesOrder: "random",
            choices: [
              "The foundation of the British parliamentary system",
              "The Great Seal of the monarchs of England",
              "The French Declaration of the Rights of Man",
              "The charter signed by the Pilgrims on the Mayflower",
            ],
          },
        ],
      },
    ],
    completedHtml:
      "<p>Your anwers are:</p><p>When was the Civil War?: <b>{civilwar}</b>. The correct is: <b>1850-1900</b></p><p>Who said 'Give me liberty or give me death?': <b>{libertyordeath}</b>. The correct is: <b>Patrick Henry</b></p><p>What is the Magna Carta?: <b>{magnacarta}</b>. The correct is: <b>The foundation of the British parliamentary system</b></p>",
  }

  var quizCasapescarului = {
    title: "American History casapescarului",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    showNavigationButtons: true,
    pages: [
      {
        questions: [
          {
            type: "radiogroup",
            name: "civilwar",
            title: "When was the Civil War?",
            choices: [
              "1750-1800",
              "1800-1850",
              "1850-1900",
              "1900-1950",
              "after 1950",
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "libertyordeath",
            title: "Who said 'Give me liberty or give me death?'",
            choicesOrder: "random",
            choices: [
              "John Hancock",
              "James Madison",
              "Patrick Henry",
              "Samuel Adams",
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "magnacarta",
            title: "What is the Magna Carta?",
            choicesOrder: "random",
            choices: [
              "The foundation of the British parliamentary system",
              "The Great Seal of the monarchs of England",
              "The French Declaration of the Rights of Man",
              "The charter signed by the Pilgrims on the Mayflower",
            ],
          },
        ],
      },
    ],
    completedHtml:
      "<p>Your anwers are:</p><p>When was the Civil War?: <b>{civilwar}</b>. The correct is: <b>1850-1900</b></p><p>Who said 'Give me liberty or give me death?': <b>{libertyordeath}</b>. The correct is: <b>Patrick Henry</b></p><p>What is the Magna Carta?: <b>{magnacarta}</b>. The correct is: <b>The foundation of the British parliamentary system</b></p>",
  }

  var quizCasagabriela = {
    title: "American History casa gabriela",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    showNavigationButtons: true,
    pages: [
      {
        questions: [
          {
            type: "radiogroup",
            name: "civilwar",
            title: "When was the Civil War?",
            choices: [
              "1750-1800",
              "1800-1850",
              "1850-1900",
              "1900-1950",
              "after 1950",
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "libertyordeath",
            title: "Who said 'Give me liberty or give me death?'",
            choicesOrder: "random",
            choices: [
              "John Hancock",
              "James Madison",
              "Patrick Henry",
              "Samuel Adams",
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "magnacarta",
            title: "What is the Magna Carta?",
            choicesOrder: "random",
            choices: [
              "The foundation of the British parliamentary system",
              "The Great Seal of the monarchs of England",
              "The French Declaration of the Rights of Man",
              "The charter signed by the Pilgrims on the Mayflower",
            ],
          },
        ],
      },
    ],
    completedHtml:
      "<p>Your anwers are:</p><p>When was the Civil War?: <b>{civilwar}</b>. The correct is: <b>1850-1900</b></p><p>Who said 'Give me liberty or give me death?': <b>{libertyordeath}</b>. The correct is: <b>Patrick Henry</b></p><p>What is the Magna Carta?: <b>{magnacarta}</b>. The correct is: <b>The foundation of the British parliamentary system</b></p>",
  }

  var quizApartamente = {
    title: "American History apartamente",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    showNavigationButtons: true,
    pages: [
      {
        questions: [
          {
            type: "radiogroup",
            name: "civilwar",
            title: "When was the Civil War?",
            choices: [
              "1750-1800",
              "1800-1850",
              "1850-1900",
              "1900-1950",
              "after 1950",
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "libertyordeath",
            title: "Who said 'Give me liberty or give me death?'",
            choicesOrder: "random",
            choices: [
              "John Hancock",
              "James Madison",
              "Patrick Henry",
              "Samuel Adams",
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "magnacarta",
            title: "What is the Magna Carta?",
            choicesOrder: "random",
            choices: [
              "The foundation of the British parliamentary system",
              "The Great Seal of the monarchs of England",
              "The French Declaration of the Rights of Man",
              "The charter signed by the Pilgrims on the Mayflower",
            ],
          },
        ],
      },
    ],
    completedHtml:
      "<p>Your anwers are:</p><p>When was the Civil War?: <b>{civilwar}</b>. The correct is: <b>1850-1900</b></p><p>Who said 'Give me liberty or give me death?': <b>{libertyordeath}</b>. The correct is: <b>Patrick Henry</b></p><p>What is the Magna Carta?: <b>{magnacarta}</b>. The correct is: <b>The foundation of the British parliamentary system</b></p>",
  }

  const [number, setNumber] = useState(
    new URLSearchParams(window.location.search).get("telefon")
  )
  const [chosenSurvey, setChosenSurvey] = useState(null)
  const [wasInformationCollected, setWasInformationCollected] = useState(false)

  return (
    <>
      <InformationCollection></InformationCollection>
      <MainSurvey survey={chosenSurvey}></MainSurvey>
    </>
  )
}

export default SurveyPage
