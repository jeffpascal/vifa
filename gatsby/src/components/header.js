import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle, menuLinks, local, pageTitle } ) => (
  <header
    style={{
      background: `#3333cc`,
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
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/">
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            height="30"
            alt="mdb logo"
          ></img>
          <pre>{JSON.stringify(local, null, 2)}</pre>
          <pre>{JSON.stringify(pageTitle, null, 2)}</pre>
        </Link>
        <ul
          className="navbar-nav mr-auto mt-lg-0"
          style={{ display: "flex", flex: 1 }}
        >
          {menuLinks.map(link => (
            <button class="btn align-middle btn-primary" type="button">
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
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {local === undefined ?  siteTitle : local==="en" ? pageTitle.en : pageTitle.ro }
        </Link>
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
