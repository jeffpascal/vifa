import React from 'react'
import PropTypes from "prop-types"


const Beds24Iframe = ({ iframeWidth, iframeHeight, iframeSrc, iframeLinkHref, linkTitle }) => {


    return (
        <div className="iframe-container">
          <iframe
          title="book now"
            width={iframeWidth}
            height={iframeHeight}
            src={iframeSrc}
            style={{ "maxWidth": "100%", "border": "none", "overflow": "auto" }}>
            <p>
              <a href={iframeLinkHref} title={linkTitle}>Book Now</a>
            </p>
          </iframe>
        </div>
    )
}

  Beds24Iframe.propTypes = {
    iframeWidth: PropTypes.string,
    linkTitle: PropTypes.string,
  }
  
  Beds24Iframe.defaultProps = {
    iframeWidth: `100%`,
    linkTitle: `Book Now`,
  }

export default Beds24Iframe
