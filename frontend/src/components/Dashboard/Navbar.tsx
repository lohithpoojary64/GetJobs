"use client";
import React from "react";
import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Avatar, Dropdown, Drawer } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

const { Search } = Input;

const onSearch = (value: string) => {
  console.log("Search text:", value);
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="fixed flex justify-between items-center h-[60px] w-full bg-white px-[15%]">
      <div className="flex justify-between items-center w-[400px]">
        <h1 className="text-green-300 font-bold text-xl">GetJobs</h1>
        <h1>Jobs</h1>
        <h1>Companies</h1>
        <h1>Services</h1>
      </div>
      <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
        <Search
          placeholder="Search here..."
          enterButton="Search"
          size="large"
          prefix={<SearchOutlined />}
          onSearch={onSearch}
        />
      </div>

      <Button
        type="text"
        icon={<Avatar size="large" icon={<UserOutlined />} />}
        size="large"
        onClick={showDrawer}
      >
        <DownOutlined />
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default Navbar;
