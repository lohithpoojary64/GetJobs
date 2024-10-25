'use client';
import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined, MailOutlined } from '@ant-design/icons';

const Signup: React.FC = () => {

  const handleGoogleLogin = () => {
    // Google login logic goes here
    console.log("Google Login Clicked");
  };

  const handleEmailLogin = () => {
    // Email login logic goes here
    console.log("Email Login Clicked");
  };

  return (
    <div className="h-full w-full py-6 px-3 bg-slate-300 ">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        {/* Google Button */}
        <Button
          type="primary"
          icon={<GoogleOutlined />}
          onClick={handleGoogleLogin}
          style={{
            backgroundColor: "#4285F4",
            borderColor: "#4285F4",
            width: "250px",
            height: "50px",
          }}
        >
          Continue with Google
        </Button>

        {/* Email Button */}
        <Button
          type="default"
          icon={<MailOutlined />}
          onClick={handleEmailLogin}
          style={{ width: "250px", height: "50px" }}
        >
          Continue with Email
        </Button>
      </div>
    </div>
  );
};

export default Signup;
