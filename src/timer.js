import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { photoAnimate } from "./redux/actions/photoAction";

const Timer = () => {
    const dispatch = useDispatch();


    useEffect(() =>{
        const intervalId = setInterval(() =>{
            dispatch(photoAnimate());
        }, 3600);
        return(()=>{
            clearInterval(intervalId);
        });

    },);

      return(
        <div>

        </div>
    )

};

export default Timer;