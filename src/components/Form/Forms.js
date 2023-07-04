import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../Form/Forms.css';

const Forms = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('address', address);
    formData.append('image', image);

    // Make API call to submit form data
    try {
      await axios.post('http://your-backend-api/forms', formData);
      alert('Details submitted successfully!');
      history.push('/');
    } catch (error) {
      console.error(error);
      alert('Failed to submit details. Please try again.');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="container body">
    <div className="container forms">
      <h1>Submit Your Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="address">Address:</label>
        <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />

        <label htmlFor="image">Image:</label>
        <input type="file" id="image" accept="image/*" multiple onChange={handleImageChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Forms;
