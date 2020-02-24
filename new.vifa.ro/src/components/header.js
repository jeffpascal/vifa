import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { NavHashLink as NavLink } from "react-router-hash-link"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/logo.gif"

const Header = ({ siteTitle, menuLinks, local, pageTitle }) => {
  const flag = useStaticQuery(graphql`
    query flagquery {
      flags: allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { eq: "relimages/flags" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 60, maxHeight: 35, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const flagLinks = flag.flags.edges
  const newFlags = {}
  //create a map. newimages["vila"] will have the image i need to print
  for (var j = 0; j < flagLinks.length; j++) {
    newFlags[flagLinks[j].node.name] = flagLinks[j]
  }

  return (
    <>
      <nav className="sticky-top navbar navbar-expand-lg navbar-dark indigo ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            <img src={logo} height="55" alt="VIFA Logo"></img>
          </Link>
          <ul
            className="navbar-nav mr-auto mt-lg-0"
            style={{ display: "flex", flex: 1 }}
          >
            <button className="btn btn-primary" type="button">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: `white` }}
                  to={`/cazare-colibita`}
                >
                  Cazare Colbita
                </Link>
              </li>
            </button>
            <button className="btn btn-primary" type="button">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: `white` }}
                  to={`/contact`}
                >
                  Contact
                </Link>
              </li>
            </button>
          </ul>
        </div>
      </nav>

      <header
        style={{
          background: `#3333cc`,
          marginBottom: `0rem`,
        }}
      ></header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
