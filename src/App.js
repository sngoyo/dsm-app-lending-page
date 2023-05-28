import NavBar from "./navBar";
import './App.css';
import { useSelector } from "react-redux";
import PhotoComponent from "./photoComponent";

function App() {
  const data = useSelector((state => state.allPhotos));
  console.log(data)
  const pic = data[0].src

  const appStyle = {
    width: "100%",
    height: "100%",
  };

  return (
      <div className="App">
        <style>{`body { background-size: cover;}`}</style>
        <style>{`body {background-image: url(${pic})}`}</style>
           <NavBar />
           <PhotoComponent />
      </div>
  );
}
export default App;
