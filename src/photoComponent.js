import React from "react";
import { useSelector } from "react-redux";
import "./photoComponent.css";

const PhotoComponent = () => {
const data = useSelector((state => state.allPhotos));
  console.log(data)
  const pic = data[1].src
  const pic_2 = data[2].src
  const pic_3 = data[3].src
  const pic_4 = data[4].src

    return (
        <div className="photoContainer flex flex-row space-x-7 justify-end mt-80">
          <div className="div bg-black rounded-3xl "
          style={{backgroundImage: `url(${pic})`, backgroundSize: "cover"}}>
          </div>
          <div className="div bg-white rounded-3xl"
             style={{backgroundImage: `url(${pic_2})`, backgroundSize: "cover"}}>
          </div>
          <div className="div bg-white rounded-3xl"
             style={{backgroundImage: `url(${pic_3})`, backgroundSize: "cover"}}>
          </div>
          <div className="div bg-white rounded-3xl"
            style={{backgroundImage: `url(${pic_4})`, backgroundSize: "cover"}}>
          </div>
        </div>
    );
};

export default PhotoComponent;