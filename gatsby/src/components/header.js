import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle, menuLinks, local, pageTitle }) => {
  const flag = useStaticQuery(graphql`
    query flagquery {
      flags: allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { eq: "flags" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 50, maxHeight: 25, quality: 90) {
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
    <header
      style={{
        background: `#3333cc`,
        marginBottom: `1.45rem`,
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark indigo ">
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
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
              height="30"
              alt="mdb logo"
            ></img>
          </Link>
          <ul
            className="navbar-nav mr-auto mt-lg-0"
            style={{ display: "flex", flex: 1 }}
          >
            <div
              className="romanianMenu"
              style={{ backgroundColor: "black", marginRight: 10 }}
            >
              <img
                src={newFlags["ro"].node.childImageSharp.fluid.src}
                className="img-fluid"
                alt="Logo"
                style={{ paddingRight: 10 }}
              />
              {menuLinks.romanian.map((link, index) => {
                return (
                  <button
                    key={index}
                    className="btn align-middle btn-primary"
                    type="button"
                  >
                    <li className="nav-item" key={link.name}>
                      <Link
                        className="nav-link"
                        style={{ color: `white` }}
                        to={link.link}
                      >
                        {link.name}
                      </Link>
                    </li>
                  </button>
                )
              })}
            </div>
            <div
              className="englishMenu"
              style={{ backgroundColor: "black", marginRight: 10 }}
            >
              <img
                src={newFlags["en"].node.childImageSharp.fluid.src}
                className="img-fluid"
                alt="Logo"
                style={{ paddingRight: 10 }}
              />
              {menuLinks.english.map((link, index) => {
                return (
                  <button
                    key={index}
                    className="btn align-middle btn-primary"
                    type="button"
                  >
                    <li className="nav-item" key={link.name}>
                      <Link
                        className="nav-link"
                        style={{ color: `white` }}
                        to={link.link}
                      >
                        {link.name}
                      </Link>
                    </li>
                  </button>
                )
              })}
            </div>
          </ul>
        </div>
      </nav>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {local === undefined
              ? siteTitle
              : local === "en"
              ? pageTitle.en
              : pageTitle.ro}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
