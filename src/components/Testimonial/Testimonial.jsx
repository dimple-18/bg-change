import React from "react";

function TestimonialCard({ name, photo, feedback, designation }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center mx-auto">
      <img
        src={photo}
        alt={name}
        className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">{designation}</p>
      <p className="text-gray-600 mt-3 italic">"{feedback}"</p>
    </div>
  );
}

export default TestimonialCard;