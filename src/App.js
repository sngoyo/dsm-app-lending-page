import NavBar from "./navBar";
import './App.css';
import { useSelector } from "react-redux";
import PhotoComponent from "./photoComponent";
import Timer from "./timer";

function App() {
  const data = useSelector((state => state.allPhotos));
  const pic = data[0].src



  return (
      <div className="App">
        <style>{`body { background-size: cover;}`}</style>
        <style>{`body {background-image: url(${pic})}`}</style>
           <NavBar />
           <PhotoComponent />
           <Timer />
      </div>
  );
}
export default App;
