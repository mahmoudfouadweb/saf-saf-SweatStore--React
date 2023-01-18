import fanIcon from "../../assets/icons/music-headfone.svg";
import artistIcon from "../../assets/icons/music.svg";import React from 'react'

const FirstProgress = () => {
  const headingOne = "Create an account";
  const textOne =
    "Select an option to start buying, selling and collecting NFTs on Finay.";
  return (
    <>
    <h2 className="heading-3 right__header">{headingOne}</h2>
      <p className="right__text">{textOne} </p>
      <h3 className="right__sub-title">Tell us a bit about you</h3>
      <div className="wrapper">
        <figure className="right__card--plan  active">
          <img src={fanIcon} alt="fan" />
          <div className="right__card--plan-title">I am a fan</div>
          <div className="right__card--plan-text">
            I want to listen and support my favorite artists.
          </div>
        </figure>

        <figure className="right__card--plan ">
          <img src={artistIcon} alt="artist" />
          <div className="right__card--plan-title">I am an Artist</div>
          <div className="right__card--plan-text">
            I want to create and release Songs with fans.
          </div>
        </figure>
      </div>
    </>
  )
}

export default FirstProgress