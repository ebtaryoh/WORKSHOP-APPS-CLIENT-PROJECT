import React from "react";
import { Image } from "react-bootstrap";
import Gritty1 from "../../src/images/Gritty1.png";
import Gritty2 from "../../src/images/Gritty2.png";
import peter1 from "../../src/images/peter1.png";
import peter2 from "../../src/images/peter2.png";
import sarah1 from "../../src/images/Sarah1.png";
import sarah2 from "../../src/images/Sarah2.png";
import stephen1 from "../../src/images/Stephen1.png";
import stephen2 from "../../src/images/Stephen2.png";

const Teams = () => {
  return (
    <div>
      <h1 className="my-5 fs-1 fw-bold">MEET OUR TEAM</h1>
      <div className="d-flex team-img-res gap-4 mb-5">
        <div className="image-container">
          <Image className="top-image  " src={Gritty1} />
          <Image src={Gritty2} />
          <div className="image-container  team-text-res ">
            <div className="bg-secondary-subtle  my- rounded-3 py-3 top-image w-100 ">
              <h4>Gritty Grammer</h4>
              <p className="title-color">Investor </p>
            </div>
            <div className="dark-bgcolor my-3 rounded-3 py-3">
              <h4 className="text-white">Gritty Grammer</h4>
              <p className="title-color2">Investor </p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <Image className="top-image " src={peter1} />
          <Image src={peter2} />
          <div className="image-container team-text-res">
            <div className="bg-secondary-subtle my- rounded-3 py-3 top-image w-100 ">
              <h4>Peter Griffin</h4>
              <p className="title-color">Photographer </p>
            </div>
            <div className="dark-bgcolor my-3 rounded-3 py-3">
              <h4 className="text-white">Peter Griffin</h4>
              <p className="title-color2">Photographer </p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <Image className="top-image " src={sarah1} />
          <Image src={sarah2} />
          <div className="image-container team-text-res">
            <div className="bg-secondary-subtle my- rounded-3 py-3 top-image w-100 ">
              <h4>Sarah Shobowale</h4>
              <p className="title-color">Product Manager </p>
            </div>
            <div className="dark-bgcolor my-3 rounded-3 py-3">
              <h4 className="text-white">Sarah Shobowale</h4>
              <p className="title-color2">Product Manager </p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <Image className="top-image" src={stephen1} />
          <Image src={stephen2} />
          <div className="image-container team-text-res">
            <div className="bg-secondary-subtle my- rounded-3 py-3 top-image w-100 ">
              <h4>Stephen Essein</h4>
              <p className="title-color">Developer </p>
            </div>
            <div className="dark-bgcolor my-3 rounded-3 py-3">
              <h4 className="text-white">Stephen Essein</h4>
              <p className="title-color2">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
