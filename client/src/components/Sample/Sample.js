import React from "react";
import ImageGallery from 'react-image-gallery';

class Sample extends React.Component {
  // function to get the images from api

  render() {
    // component will mount so that trending happens on page load, 
    // this has to be overwritten when the user searches for something
    // {map through all the reponses map => {=imaga}}
    const images = [
      {
        original: '/images/lightsBG.png',
        thumbnail: '/images/lightsBG.png',
      },
      {
        original: '/images/lightsBG.png',
        thumbnail: '#'
      },
      {
        original: '/images/lightsBG.png',
        thumbnail: '#'
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

export default Sample;