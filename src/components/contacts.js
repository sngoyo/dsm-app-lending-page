import React from "react";
import "./contact.css";
import {useSelector} from "react-redux";
import { useState } from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//toast.configure;

const Contact = () => {
  const slide = useSelector(state => state.allPhotos);
  const [formData, setFormData] = useState({
     name: "",
     email: "",
     phoneNumber: "",
     selectedEnquiry: "",
     message: ""
  })

  const handleChange = (e) => {
     e.preventDefault();
     const {name, value} = e.target;
     setFormData((prevFormData) => ({...prevFormData, [name]: value }));

  }

  const handleSubmit = (e) => {
    e.preventDefault();
 /*   alert(`Name: ${formData.name}, Email: ${formData.email},
     Phone Number: ${formData.phoneNumber}, Selected Enquiry: ${formData.selectedEnquiry},
      Message: ${formData.message}`);
*/
    //To prevent notification(toast) from showing up without user entering data
    if(formData.name !== "" && formData.phoneNumber !== "" && formData.email !== ""
     && formData.name !== "" && formData.message !== ""){
      toast.success('Submited successfully', {autoClose:4000});
     }

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        selectedEnquiry: "SelectedEnquiry",
        message: ""
      });


  }



    return (
        <div className="container m-auto h-1/2 bg-white mt-5 rounded-2xl ">
          <p className="heading bold">Get In Touch With Us</p>
          <form className="formContainer" onSubmit={handleSubmit}>
            <input
              className="nameField"
              name="name"
              type="text"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
             />
              <input
              className="emailField"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleChange}
              required
             />
               <input
             className="phoneField"
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              placeholder="Phone Number"
              onChange={handleChange}
              required
             />
              <select className="enquiryList"  name="selectedEnquiry"  onChange={handleChange}
               value={formData.selectedEnquiry} required>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Request for A Quote">Request for A Quote</option>
                <option value="Special Interest / Custom Trip">Special Interest / Custom Trip</option>
                <option value="Get Tour Itineraries">Get Tour Itineraries</option>
              </select>
              <textarea
                  className="textarea"
                  placeholder="Additional Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
              />
              <input className="submitButton" type="submit" value="Submit Form"/>
              <ToastContainer />
          </form>

        </div>
    );
}

export default Contact;