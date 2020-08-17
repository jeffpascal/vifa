import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import "./styles.css"
import Image from "../image"
import { FaBars, FaChevronDown } from "react-icons/fa"

const MobileDropDownComponentLinks = () => {
  const [dropDownClassName, setDropDownClassName] = useState(
    "mobile-dropdown-container"
  )
  const changeDropDownClassName = (e) => {
    if (dropDownClassName.includes("open"))
      setDropDownClassName(dropDownClassName.replace("open", ""))
    else setDropDownClassName(dropDownClassName + " open")
    e.stopPropagation()
  }
  return (
    <li>
      <a
        href="#"
        className="nav-link has-dropdown"
        onClick={changeDropDownClassName}
      >
        Resources <FaChevronDown></FaChevronDown>
      </a>
      <div className={dropDownClassName}>
        <div className="customRow">
          <div className="col-lg-3">
            <a href="#" className="res-link">
              <h4>Squarespace Blog</h4>
            </a>
          </div>
          <div className="col-lg-3">
            <a href="#" className="res-link">
              <h4>Help Guides</h4>
            </a>
          </div>
          <div className="col-lg-3">
            <a href="#" className="res-link">
              <h4>Webinars</h4>
            </a>
          </div>
          <div className="col-lg-3">
            <a href="#" className="res-link">
              <h4>Forum</h4>
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

const MobileDropDownComponentList = () => {
  const [mobileDropDownClassName, setMobileDropDownClassName] = useState(
    "mobile-dropdown-container"
  )
  const changeDropDownClassName = (e) => {
    if (mobileDropDownClassName.includes("open"))
      setMobileDropDownClassName(mobileDropDownClassName.replace("open", ""))
    else setMobileDropDownClassName(mobileDropDownClassName + " open")
    e.stopPropagation()
  }

  return (
    <li>
      {/* When clicking the <a> tag, we want to set the value of the className of the child to include --open--, so that the dropdown opens */}
      <a
        href="#"
        className="nav-link has-dropdown"
        onClick={changeDropDownClassName}
      >
        Products <FaChevronDown></FaChevronDown>
      </a>
      <div className={mobileDropDownClassName}>
        <div className="content-wrapper">
          <div className="customRow no-gutters">
            <div className="col-md-6 col-lg-3">
              <h6>Create a website</h6>
              <ul className="sec-links-container">
                <li>
                  <a href="#" className="sec-link">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Blogging
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Website Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Hire an Expert
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>Create a website</h6>
              <ul className="sec-links-container">
                <li>
                  <a href="#" className="sec-link">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Blogging
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Website Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Hire an Expert
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>Create a website</h6>
              <ul className="sec-links-container">
                <li>
                  <a href="#" className="sec-link">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Blogging
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Website Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Hire an Expert
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>Create a website</h6>
              <ul className="sec-links-container">
                <li>
                  <a href="#" className="sec-link">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Blogging
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Website Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="sec-link">
                    Hire an Expert
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

const SquareMobileMenu = () => {
  const [open, setOpen] = useState(false)
  const toggleClass = (event) => {
    setOpen(!open)
    event.stopPropagation()
  }
  return (
    <div className={`mobile-nav ${open ? "open" : ""}`} onClick={toggleClass}>
      <div className="logo-container">
        <a href="#" className="logo-link">
          <img src="logo-small.svg" alt="" className="logo" />
        </a>
      </div>

      <div className="mobile-menu">
        <button
          type="button"
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={toggleClass}
        >
          <FaBars></FaBars>
        </button>
        <div
          className={`mobile-menu-dropdown  ${open ? "open" : ""}`}
          onClick={toggleClass}
        >
          <div className="mobile-nav-links-wrapper">
            <ul>
              <MobileDropDownComponentList></MobileDropDownComponentList>
              <li>
                <a href="#" className="nav-link">
                  Templates
                </a>
              </li>
              <MobileDropDownComponentLinks></MobileDropDownComponentLinks>
            </ul>
          </div>
          <div className="mobile-buttons-wrapper">
            <ul>
              <li>
                <a href="#" className="nav-link">
                  Log In
                </a>
              </li>
              <li>
                <a href="#" className="nav-link btn-white">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const DesktopDropDownComponentList = () => {
  const [dropDownClassName, setDropDownClassName] = useState(
    "dropdown-container"
  )
  const changeDropDownClassName = (e) => {
    setDropDownClassName(dropDownClassName + " open")
  }

  const changeDropDownClassNameOpen = (e) => {
    setDropDownClassName(dropDownClassName.replace("open", ""))
  }

  return (
    <li>
      <a
        href="#"
        class="nav-link has-dropdown"
        onMouseOver={changeDropDownClassName}
        onMouseLeave={changeDropDownClassNameOpen}
      >
        Products <FaChevronDown></FaChevronDown>
      </a>
      <div class={dropDownClassName}>
        <div class="content-wrapper">
          <div class="customRow no-gutters">
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
  )
}

const DesktopDropDownComponentLinksCards = () => {
  const [dropDownClassName, setDropDownClassName] = useState(
    "dropdown-container"
  )
  const changeDropDownClassName = (e) => {
    setDropDownClassName(dropDownClassName + " open")
  }

  const changeDropDownClassNameOpen = (e) => {
    setDropDownClassName(dropDownClassName.replace("open", ""))
  }
  return (
    <li>
      <a
        href="#"
        className="nav-link has-dropdown"
        onMouseOver={changeDropDownClassName}
        onMouseLeave={changeDropDownClassNameOpen}
      >
        Resources <FaChevronDown></FaChevronDown>
      </a>
      <div className={dropDownClassName}>
        <div className="customRow">
          <div className="col-lg-3">
            <a href="#" className="res-link">
              <h4>Squarespace Blog</h4>
              <p>Stories and solutions for the modern entrepreneur</p>
              <img
                src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10223/assets/images/site-navigation/blog-2-500w.jpg"
                alt=""
                className="res-img"
              />
            </a>
          </div>
          <div className="col-lg-3">
            <a href="#" className="res-link">
              <h4>Squarespace Blog</h4>
              <p>Stories and solutions for the modern entrepreneur</p>
              <img
                src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10223/assets/images/site-navigation/help-2-500w.jpg"
                alt=""
                className="res-img"
              />
            </a>
          </div>
          <div className="col-lg-3">
            <a href="#" className="res-link">
              <h4>Squarespace Blog</h4>
              <p>Stories and solutions for the modern entrepreneur</p>
              <img
                src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10223/assets/images/site-navigation/forum-2-500w.jpg"
                alt=""
                className="res-img"
              />
            </a>
          </div>
          <div className="col-lg-3">
            <a href="#" className="res-link">
              <h4>Squarespace Blog</h4>
              <p>Stories and solutions for the modern entrepreneur</p>
              <img
                src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10223/assets/images/site-navigation/help-2-500w.jpg"
                alt=""
                className="res-img"
              />
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

const SquareDesktopMenu = () => {
  return (
    <div className="desktop-nav">
      <div className="logo-container">
        <a href="#" className="logo-link">
          <img src="logo.svg" alt="" className="logo" />
        </a>
      </div>

      <div className="menu-bar">
        <ul>
          <DesktopDropDownComponentList></DesktopDropDownComponentList>
          <li>
            <a href="#" className="nav-link">
              Templates
            </a>
          </li>
          <DesktopDropDownComponentLinksCards></DesktopDropDownComponentLinksCards>
        </ul>
      </div>

      <div className="buttons-container">
        <ul>
          <li>
            <a href="#" className="nav-link">
              Log In
            </a>
          </li>
          <li>
            <a href="#" className="nav-link btn-white">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const SquareSpaceNav = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const toggleClass = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setOpen(!open)
  }

  useEffect(() => {
    const header = document.querySelector("header")

    window.onscroll = function () {
      if (window.pageYOffset > header.scrollTop) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    }
  })
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div className="nav-container">
        {/* <!-- Navigation Bar for Mobile --> */}
        <SquareMobileMenu></SquareMobileMenu>
        {/* <!-- Navigation Bar for Desktop --> */}
        <SquareDesktopMenu></SquareDesktopMenu>
      </div>
    </header>
  )
}

SquareSpaceNav.propTypes = {
  siteTitle: PropTypes.string,
}

SquareSpaceNav.defaultProps = {
  siteTitle: ``,
}

export default SquareSpaceNav
