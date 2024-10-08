import { useState } from 'react';
import profileImage from '../assets/profile.png'; // Correctly imported profile image

function Settings() {
  const [profilePicture, setProfilePicture] = useState(profileImage); // Set default profile picture to imported image

  // Handle profile picture upload
  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  return (
    <div className="px-6">
      <div className="relative mb-2 flex flex-col overflow-hidden">
        <div className="flex flex-col items-center mb-5 ">
        </div>

        {/* Profile Picture Upload */}
        <div className="mb-6">
          <div className="flex justify-center items-center">
            {/* Clickable Profile Picture */}
            <label htmlFor="profile-upload" className="cursor-pointer">
              <img
                src={profilePicture} // Correctly referencing the state that holds the image
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePictureUpload}
              />
            </label>
          </div>
        </div>

{/* Phone Number Input Field with Location Extension */}
<div className="mb-6">
          <label className="block text-gray-700 text-subtitle font-bold mb-1" htmlFor="phone">
            Phone Number
          </label>
          <div className="flex">
            <select
              id="country-code"
              className="w-2/7 px-3 py-3 rounded-l-[15px] focus:outline-none focus:ring focus:ring-indigo-200 bg-gray-100 border-r">
              <option value="+61">🇦🇺 +61</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+91">🇮🇳 +91</option>
            </select>
            <input
              id="phone"
              type="text"
              className="w-3/4 px-3 py-3 rounded-r-[15px] focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter phone number"
            />
          </div>
        </div>
        {/* Name Input Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-subtitle font-bold mb-1" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            className="w-full px-3 py-3 rounded-[15px] focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter name"
          />
        </div>

        {/* Last Name Input Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-subtitle font-bold mb-1" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            className="w-full px-3 py-3 rounded-[15px] focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter last name"
          />
        </div>

        

        {/* Date of Birth Input Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-subtitle font-bold mb-1" htmlFor="dob">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            className="w-full px-3 py-3 rounded-[15px] focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;