import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.8815718492657!2d-97.12251599999999!3d33.935783899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86474b2d95555555%3A0x1585ede781e915e4!2sRobertson&#39;s%20Hams!5e0!3m2!1sen!2sus!4v1715444851043!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Robertson's Hams Location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;