import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./styles.scss"
import Image from "../image"

const TopAnnouncer = (props) => {
  return (
    <h3
      style={{
        width: "100%",
        backgroundColor: "teal",
        margin: 0,
        textAlign: "center",
      }}
    >
      Siteul www.vifa.ro este in lucru.{" "}
      <em
        style={{
          color: "yellow",
          textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
        }}
      >
        Pagina de contact este functionala
      </em>
      , ne puteti contacta prin pagina de <em>Contact</em> sau prin mail la{" "}
      <em
        style={{
          color: "yellow",
          textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
        }}
      >
        unic_juridic@yahoo.com
      </em>
    </h3>
  )
}

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <TopAnnouncer></TopAnnouncer>

      {/* <!-- Navigation Bar for Tabs and Mobiles -->  BEGINNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*/}
      <div class="mobile-nav">
        <div class="logo-container">
          <a href="#" class="logo-link">
            <img src="logo-small.svg" alt="" class="logo" />
          </a>
        </div>

        <div class="mobile-menu">
          <button type="button" class="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
          <div class="mobile-menu-dropdown">
            <div class="mobile-nav-links-wrapper">
              <ul>
                <li>
                  <a href="#" class="nav-link has-dropdown">
                    Products <i class="fas fa-chevron-down"></i>
                  </a>
                  <div class="mobile-dropdown-container">
                    <div class="content-wrapper">
                      <div class="row no-gutters">
                        <div class="col-md-6">
                          <h6>Create a website</h6>
                          <ul class="sec-links-container">
                            <li>
                              <a href="#" class="sec-link">
                                Overview
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Blogging
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Website Analytics
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Hire an Expert
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <h6>Create a website</h6>
                          <ul class="sec-links-container">
                            <li>
                              <a href="#" class="sec-link">
                                Overview
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Blogging
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Website Analytics
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Hire an Expert
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <h6>Create a website</h6>
                          <ul class="sec-links-container">
                            <li>
                              <a href="#" class="sec-link">
                                Overview
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Blogging
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Website Analytics
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Hire an Expert
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lmd-6">
                          <h6>Create a website</h6>
                          <ul class="sec-links-container">
                            <li>
                              <a href="#" class="sec-link">
                                Overview
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Blogging
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Website Analytics
                              </a>
                            </li>
                            <li>
                              <a href="#" class="sec-link">
                                Hire an Expert
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" class="nav-link">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link has-dropdown">
                    Resources <i class="fas fa-chevron-down"></i>
                  </a>
                  <div class="mobile-dropdown-container">
                    <div class="row">
                      <div class="col-lg-3">
                        <a href="#" class="res-link">
                          <h4>Squarespace Blog</h4>
                        </a>
                      </div>
                      <div class="col-lg-3">
                        <a href="#" class="res-link">
                          <h4>Help Guides</h4>
                        </a>
                      </div>
                      <div class="col-lg-3">
                        <a href="#" class="res-link">
                          <h4>Webinars</h4>
                        </a>
                      </div>
                      <div class="col-lg-3">
                        <a href="#" class="res-link">
                          <h4>Forum</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="mobile-buttons-wrapper">
              <ul>
                <li>
                  <a href="#" class="nav-link">
                    Log In
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link btn-white">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Navigation Bar for Desktop --> */}
      <div class="desktop-nav">
        <div class="logo-container">
          <a href="#" class="logo-link">
            <img src="logo.svg" alt="" class="logo" />
          </a>
        </div>

        <div class="menu-bar">
          <ul>
            <li>
              <a href="#" class="nav-link has-dropdown">
                Products <i class="fas fa-chevron-down"></i>
              </a>
              <div class="dropdown-container">
                <div class="content-wrapper">
                  <div class="row no-gutters">
                    <div class="col-lg-3">
                      <h6>Create a website</h6>
                      <ul class="sec-links-container">
                        <li>
                          <a href="#" class="sec-link">
                            Overview
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Blogging
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Website Analytics
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Hire an Expert
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-3">
                      <h6>Create a website</h6>
                      <ul class="sec-links-container">
                        <li>
                          <a href="#" class="sec-link">
                            Overview
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Blogging
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Website Analytics
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Hire an Expert
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-3">
                      <h6>Create a website</h6>
                      <ul class="sec-links-container">
                        <li>
                          <a href="#" class="sec-link">
                            Overview
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Blogging
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Website Analytics
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Hire an Expert
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-3">
                      <h6>Create a website</h6>
                      <ul class="sec-links-container">
                        <li>
                          <a href="#" class="sec-link">
                            Overview
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Blogging
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Website Analytics
                          </a>
                        </li>
                        <li>
                          <a href="#" class="sec-link">
                            Hire an Expert
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" class="nav-link">
                Templates
              </a>
            </li>
            <li>
              <a href="#" class="nav-link has-dropdown">
                Resources <i class="fas fa-chevron-down"></i>
              </a>
              <div class="dropdown-container">
                <div class="row">
                  <div class="col-lg-3">
                    <a href="#" class="res-link">
                      <h4>Squarespace Blog</h4>
                      <p>Stories and solutions for the modern entrepreneur</p>
                      <img
                        src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10223/assets/images/site-navigation/blog-2-500w.jpg"
                        alt=""
                        class="res-img"
                      />
                    </a>
                  </div>
                  <div class="col-lg-3">
                    <a href="#" class="res-link">
                      <h4>Squarespace Blog</h4>
                      <p>Stories and solutions for the modern entrepreneur</p>
                      <img
                        src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10223/assets/images/site-navigation/help-2-500w.jpg"
                        alt=""
                        class="res-img"
                      />
                    </a>
                  </div>
                  <div class="col-lg-3">
                    <a href="#" class="res-link">
                      <h4>Squarespace Blog</h4>
                      <p>Stories and solutions for the modern entrepreneur</p>
                      <img
                        src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10223/assets/images/site-navigation/forum-2-500w.jpg"
                        alt=""
                        class="res-img"
                      />
                    </a>
                  </div>
                  <div class="col-lg-3">
                    <a href="#" class="res-link">
                      <h4>Squarespace Blog</h4>
                      <p>Stories and solutions for the modern entrepreneur</p>
                      <img
                        src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10223/assets/images/site-navigation/help-2-500w.jpg"
                        alt=""
                        class="res-img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="buttons-container">
          <ul>
            <li>
              <a href="#" class="nav-link">
                Log In
              </a>
            </li>
            <li>
              <a href="#" class="nav-link btn-white">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* EEEEEEEEEEEEEEEEEEEEEEEEEENNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD */}

      <nav
        className="navbar navbar-expand-lg navbar-dark"
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
