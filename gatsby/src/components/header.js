import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav className="navbar navbar-expand-lg navbar-dark indigo " >
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
          Vila Franceza
        </Link>
        <ul
          className="navbar-nav mr-auto mt-lg-0"
          style={{ display: "flex", flex: 1 }}
        >
          {menuLinks.map(link => (
            <button className="btn align-middle btn-primary" type="button">
            <li
              className="nav-item"
              key={link.name}
            >
              <Link className="nav-link" style={{ color: `white` }} to={link.link}>
                {link.name}
              </Link>
            </li>
            </button>
          ))}
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
        <h1
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </h1>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
