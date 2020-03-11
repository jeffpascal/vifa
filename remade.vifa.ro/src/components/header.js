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
    <h3 style={{width:"100%", backgroundColor:"teal", margin:0, textAlign:"center"}}>Siteul www.vifa.ro este in lucru. <em style={{color:"yellow",  textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Pagina de contact este functionala</em>, ne puteti contacta prin pagina de <em>Contact</em> sau prin mail la <em style={{color:"yellow",  textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>unic_juridic@yahoo.com</em></h3>
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
            <a
              className="btn btn-primary nav-link btn-lg"
              href="http://www.vilafranceza.ro"
              style={{
                color: `white`,
                textDecoration: `none`,
                margin: `5px`,
              }}
            >
              {siteTitle}
            </a>
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
