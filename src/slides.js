import React , { useEffect } from "react";
import styled from "styled-components";
import "./photoComponent.css";
import classes from "./photoComponent.css";

const SlideImage = styled.div `
 position: absolute;
 width: 14rem;
 height: 22em;
 box-shadow: 10px 10px 5px 8px rgba(0, 0, 0, 0.5);
 transform: translate(230%, 80%);
 z-index: -8;

 @media (max-width: 480px){
    transform: translate(10%, 90%);
    height: 20rem;

 }

`;

const Slide = ({image, area, title, x, y, index, currentSlideIndex}) =>{
  /* useEffect (() => {
      const container = document.querySelector(`${classes.photoContainer}`);
      const slidesN = document.querySelector(`${classes.div}`);

      const cloneSlide = slidesN.cloneNode(true);
      container.appendChild(cloneSlide);

   }, []);*/

    return (
       <div>
          <div
             className="photoContainer" >
               <div className="slides">
               <SlideImage
                  key={index}
                  className={`div bg-black rounded-3xl`}
                  style={{backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  left:`${x}px`,
                  top:`${y}px`,

                 }} >
                <p className="location">{area}</p>
                <h3 className="photoDetails">{title}</h3>
                </SlideImage>
                </div>


          </div>

       </div>
    );

};

export default Slide;