import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        margin: `0 auto`,
      }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="/">
        <Image></Image>
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link
              className="btn btn-primary nav-link btn-lg"
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
                margin: `5px`,
              }}
            >
              {siteTitle}
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="btn btn-primary nav-link btn-lg"
              to="/despre-noi"
              style={{
                color: `white`,
                textDecoration: `none`,
                margin: `5px`,
              }}
            >
              Despre Noi
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="btn btn-primary nav-link btn-lg"
              to="/imagini"
              style={{
                color: `white`,
                textDecoration: `none`,
                margin: `5px`,
              }}
            >
              Imagini
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="btn btn-primary nav-link btn-lg"
              to="/contact"
              style={{
                color: `white`,
                textDecoration: `none`,
                margin: `5px`,
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
