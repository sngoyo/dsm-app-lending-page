import React from "react";
import { useSelector } from "react-redux";
import "./photoComponent.css";

const PhotoComponent = () => {
    const data = useSelector((state => state.allPhotos));
    const newIndex = useSelector(state => state);
    console.log(newIndex.photoIndexReducer.index);
    const index = newIndex.photoIndexReducer.index
  const pic_1 = data[1].src
  const pic_2 = data[2].src
  const pic_3 = data[3].src
  const pic_4 = data[4].src

    return (
        <div className="photoContainer flex flex-row space-x-7 justify-end mt-80">
          <div className="div bg-black rounded-3xl "
          style={{backgroundImage: `url(${pic_1})`, backgroundSize: "cover"}}>
            <p className="location">{data[1].area}</p>
            <h3 className="photoDetails">{data[1].title}</h3>
          </div>
          <div className="div bg-white rounded-3xl"
             style={{backgroundImage: `url(${pic_2})`, backgroundSize: "cover"}}>
            <p className="location">{data[2].area}</p>
            <h3 className="photoDetails">{data[2].title}</h3>
          </div>
          <div className="div bg-white rounded-3xl"
             style={{backgroundImage: `url(${pic_3})`, backgroundSize: "cover"}}>
            <p className="location">{data[3].area}</p>
            <h3 className="photoDetails text-wrap">{data[3].title}</h3>
          </div>
          <div className="div bg-white rounded-3xl"
            style={{backgroundImage: `url(${pic_4})`, backgroundSize: "cover"}}>
            <p className="location">{data[4].area}</p>
            <h3 className="photoDetails">{data[4].title}</h3>
          </div>
        </div>
    );
};

export default PhotoComponent;