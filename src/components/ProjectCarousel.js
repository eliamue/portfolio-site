import React, { useState, useEffect } from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import vibn from '../assets/vibn.png';
// import safesrc from '../assets/safesrc.png';
// import torr from '../assets/torr.png';
// import triforce from '../assets/triforce.png';
import '../styles/carousel.css';

const ProjectCarousel = (props) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div className="carousel-content">{children}</div>
        </div>
      </div>
    </div>
    // <div className="carousel-wrapper">
    //   <Carousel>
    //     <div className="carousel-inner">
    //       <div className="item active">
    //         <img
    //           src="../vibn.png"
    //           className="vibn-logo"
    //           style={{ height: '200px', width: '200px' }}
    //           alt="Vibn"
    //         />
    //         <div className="carousel-caption">
    //           <h3>Vibn</h3>
    //           <p>Find your musical match</p>
    //         </div>
    //       </div>

    //       <div className="item">
    //         <img
    //           src="../safesrc.png"
    //           className="safesrc-logo"
    //           style={{ height: '200px', width: '200px' }}
    //           alt="safeSRC"
    //         />
    //         <div className="carousel-caption">
    //           <h3>safeSRC</h3>
    //           <p>Alternative to callign the police</p>
    //         </div>
    //       </div>

    //       <div className="item">
    //         <img
    //           src="../triforce.png"
    //           className="triforce-logo"
    //           alt="Triforce Trivia"
    //           style={{ height: '200px', width: '200px' }}
    //         />
    //         <div className="carousel-caption">
    //           <h3>Triforce Trivia</h3>
    //           <p>Scooby Doo-themed dynamic trivia game </p>
    //         </div>
    //       </div>

    //       <div className="item">
    //         <img
    //           src="../torr.png"
    //           className="torr-logo"
    //           style={{ height: '200px', width: '200px' }}
    //           alt="Tales of Torr"
    //         />
    //         <div className="carousel-caption">
    //           <h3>
    //             The Tales of Torr: The Quest to Defeat the Everlasting Dragon
    //           </h3>
    //           <p>Classic RPG game</p>
    //         </div>
    //       </div>
    //     </div>
    //   </Carousel>
    // </div>
  );
};
export default ProjectCarousel;
