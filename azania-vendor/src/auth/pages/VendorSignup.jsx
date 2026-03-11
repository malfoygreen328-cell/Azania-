import { useState } from "react";
import axios from "axios";

function VendorSignup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    businessName: "",
    businessType: "",
    registrationNumber: "",
    taxNumber: "",
    address: ""
  });

  const [documents, setDocuments] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setDocuments(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    for (let i = 0; i < documents.length; i++) {
      data.append("documents", documents[i]);
    }

    try {
      await axios.post("http://localhost:5000/api/vendors/register", data);

      alert("Application submitted for review");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Become an Azania Vendor</h2>

      <form onSubmit={handleSubmit}>

        <h3>Account Information</h3>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />

        <h3>Business Information</h3>

        <input
          name="businessName"
          placeholder="Business Name"
          onChange={handleChange}
          required
        />

        <input
          name="businessType"
          placeholder="Business Type"
          onChange={handleChange}
        />

        <input
          name="registrationNumber"
          placeholder="Registration Number"
          onChange={handleChange}
        />

        <input
          name="taxNumber"
          placeholder="Tax Number"
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Business Address"
          onChange={handleChange}
        />

        <h3>Upload Documents</h3>

        <input
          type="file"
          multiple
          onChange={handleFileChange}
        />

        <button type="submit">
          Submit Application
        </button>

      </form>
    </div>
  );
}

export default VendorSignup;