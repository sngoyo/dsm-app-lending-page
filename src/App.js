import NavBar from "./navBar";
import './App.css';
import {useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contacts";


function App() {
// const image = useSelector(state => state.moveImages);
 const slide = useSelector(state => state.allPhotos);
 console.log(slide[0].image);


  return (
      <div className="App">
           <NavBar />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/contacts" element={<Contact />} />
           </Routes>
           <style>{`body {background-image : url(${slide[2].image})};`}</style>
           <style>{`body {background-size: cover};`}</style>
      </div>
  );
}
export default App;
