import { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
    });

     const handleChange = (e) => { 
        const { name, value } = e.target;
        console.log("name value---", name);
        console.log("name field value---", value);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // we prevent the normal functionality of refreshing when form submits and add our logic.=
        alert(
          `Submitted Form Data:\nFirst Name: ${formData.firstName}\nEmail: ${formData.email}`
        );
        // Reset form fields after submitted
        setFormData({
          firstName: "",
          email: "",
        });
      };


    return(
        <>
        {console.log("form data value", formData)}
        <form onSubmit={handleSubmit}> 
        <h1>Form Example</h1>
        <label htmlFor="firstName">First Name:</label> 
        <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange} 
        />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form> 
        </>
    )
}

export default Register;