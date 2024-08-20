import React from "react";
import { Toast } from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";
const ToastMessage = () => {
  // Define some random styles
  const toastStyles = {
    container: {
      position: 'relative',
      // right: '20px',
      // top: '40px',
      color: '#9daf8f', 
      borderRadius: '5px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
    },
    icon: {
      color: '#4b5e3e',
      margin: '0 10px 0 0'
    },
    text: {
      color: 'green', 
    },
  };

  return (
    <Toast className="h-4 w-70 p-4 break-words word-wrap" style={toastStyles.container}>
      <FaTelegramPlane className="h-4 w-4 m-0" style={toastStyles.icon} />
      <div className="pl-2 text-sm font-normal" style={toastStyles.text}>
        Message Sent Successfully 
      </div>
    </Toast>
  );
};

export default ToastMessage;
