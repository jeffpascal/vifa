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
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="/">
        <Image></Image>
      </a>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <Link
              className="btn btn-primary nav-link btn-lg"
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
                marginRight: `10px`,
              }}
            >
              {siteTitle}
            </Link>
          </li>
          <li class="nav-item active">
            <Link
              className="btn btn-primary nav-link btn-lg"
              to="/despre-noi"
              style={{
                color: `white`,
                textDecoration: `none`,
                marginRight: `10px`,
              }}
            >
              Despre Noi
            </Link>
          </li>
          <li class="nav-item active">
            <Link
              className="btn btn-primary nav-link btn-lg"
              to="/imagini"
              style={{
                color: `white`,
                textDecoration: `none`,
                marginRight: `10px`,
              }}
            >
              Imagini
            </Link>
          </li>
          <li class="nav-item active">
            <Link
              className="btn btn-primary nav-link btn-lg"
              to="/contact"
              style={{
                color: `white`,
                textDecoration: `none`,
                marginRight: `10px`,
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
