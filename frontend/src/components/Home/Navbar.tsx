'use client'
import React, { useState } from "react";
import { Button, Modal } from "antd"; 
import Signup from '../signUp/SignUp'; 

const Navbar: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => {
    setIsModalVisible(true); // Show the modal on button click
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Hide the modal when cancelled
  };

  return (
    <div className="h-[100px] w-[100%] px-10 flex justify-between items-center">
      <h1 className="text-green-500 font-extrabold text-[20px]">GET-JOBS</h1>
      <div className="relative w-[40%]">
        <ul className="list-none flex justify-between items-center">
          <li>Communities</li>
          <li>Jobs</li>
          <li>Companies</li>
          <li>Communities</li>
        </ul>
      </div>
      <div className="">
        <Button
          type="primary"
          className="bg-green-500 h-[50px] w-[100px]"
          onClick={handleClick} 
        >
          Sign in
        </Button>
      </div>

      {/* Ant Design Modal */}
      <Modal
        title="Sign in"
        visible={isModalVisible}
        onCancel={handleCancel} 
        footer={null}
      >
        <Signup />
      </Modal>
    </div>
  );
};

export default Navbar;
