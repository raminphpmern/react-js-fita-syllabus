import { useState } from "react";
const SampleForm = () => {
    const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            age: ""
        })
    const handleChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // we prevent the normal functionality of refreshing when form submits and add our logic.=
        alert(
          `Submitted Form Data:\nFirst Name: ${formData.firstName}\nLast Name: ${formData.lastName}Email: ${formData.email}\nAge: ${formData.age}`
        );
        // Reset form fields after submitted
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          age: ""
        });
      };
    

    return (
        <>
            <div>
                <form>
                    {console.log(formData)}
                    <h1>User Details</h1>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" value={formData.firstName} 
                    onChange={handleChange} /><br /><br />
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} /><br /><br />
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} /><br /><br />
                    <label htmlFor="age">Age:</label>
                    <input type="text" name="age" id="age" value={formData.age} onChange={handleChange} /><br /><br />
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>


            </div>
        </>
    )
} 

export default SampleForm;
