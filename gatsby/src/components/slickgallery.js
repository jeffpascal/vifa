import React, { Component } from "react";
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./css/gallery.css"
import Slider from "react-slick"


export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }


  render() {
    const settingLargeGallery = {

      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      arrows: true,
      adaptiveHeight: true,
    }

    const settingPreviewGallery = {
      dots: true,
      infinite: this.props.galleryImages.length > 5,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      swipe: true,
      arrows: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    }
    return (
      <div style={{"backgroundColor":"#333a"}}>
        <div className="galleryDiv">
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            {...settingLargeGallery}
          >
            {this.props.galleryImages.map((image, index) => (
              <div key={index} className="">

                <Img fluid={image.node.childImageSharp.fluid} />
              </div>

            ))}

          </Slider>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            focusOnSelect={true}
            {...settingPreviewGallery}
          >
            {this.props.galleryImages.map((image, index) => (
              <div key={index} className="">

                <Img style={{"margin-right": 7}} fluid={image.node.childImageSharp.fluid} />
              </div>

            ))}

          </Slider>
        </div>

      </div>
    )
  }
}


