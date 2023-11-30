import React from "react";
import {useEffect, useState, useRef} from "react";
import { useSelector } from "react-redux";
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import "./photoComponent.css";
import classes  from "./photoComponent.css";
import Slide from "./slides.js";


const PhotoComponent = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [slides, setSlides] = useState([]);
    let image = useSelector((state) => state.allPhotos);

    let slidesArr = [];
    for(let value in image){
      slidesArr.push(image[value]);
    };


    //New codes Here: codes for ordering slides
    useEffect(() => {
      let new_slides = [];
      let new_x = 0;
      let new_y = 0;
       //order the cars
        slidesArr.map((slide, index) => {
              new_x = 255 * index;
              new_y = 0;
           new_slides.push(
               <Slide
                  key= {index}
                  image={slide.image}
                  area={slide.area}
                  title={slide.title}
                  x={new_x}
                  y={new_y}
                  index={slide.id}
                  currentSlideIndex={currentSlideIndex}
                />
        );
      })
        setSlides(new_slides);


    },[])

    //New codes ends here
   useEffect(() =>{
        const intervalId = setInterval(nextSlide, 3000);
       return () => clearInterval(intervalId);

    },[]);


    //function for sliding to previous slide
    const previousSlide = () => {
       setCurrentSlideIndex((currentSlide) =>
       currentSlide === 0 ? slidesArr.length - 1 : currentSlide - 1);
    }

     //function for sliding to next slide
    const nextSlide = () =>{
      setCurrentSlideIndex((currentSlide) => currentSlide === slidesArr.length - 1 ? 0 : currentSlide + 1);
    };

    return (
      <div>
        <div className="sideHeading">
          <p className="locationHome">{slidesArr[2].area} </p>
          <p className="photoDetailsHome">{slidesArr[2].title}</p>
          <p className="otherDetailsHome">Dynamic, coastal, cultural fusion, vibrant markets,
          historical charm, friendly locals. Dar es Salaam—experience the heartbeat of Tanzania!</p>
        </div>

      <div className="sliderbigContainer" >

          { slides }

          <div className="flex flex-flow absolute left-1/2 bottom-5">
             <button onClick={previousSlide} className="p-3 mx-10 ml-15 rounded-full shadow bg-white/80">
             <span><SlArrowLeft /></span>
            </button>
          <div  className="bg-white grounded-full">
         </div>
           <button onClick={nextSlide} className="p-3 ml-5 rounded-full shadow bg-white">
            <span><SlArrowRight /></span>
           </button>
         </div>
     </div>
     </div>
    );
};



export default PhotoComponent;