import React, { useState } from "react";
import "./about.css";
import img1 from "../../assets/abut.png";
import img2 from "../../assets/icone.png";
import img3 from "../../assets/images/unsplash/misson.avif";
function About() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const handleSeeMoreClick = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    setButtonVisible(false);
  };
  console.log("showParagraph:", showParagraph); // Add this line for debugging
  return (
    <>
      <div className="aboutmaincontainer">
        <div className="page-heading about-heading header-text">
          <div className="container ">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h4>about</h4>
                  <h2>our company</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
