import React from "react";
import { Button } from "antd";

const Navbar = () => {
  return (
    <div className="h-[100px] w-[100%]  px-10 flex justify-between items-center">
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
        <Button type="primary" className="bg-green-500 h-[50px] w-[100px]" >Sign in</Button>
      </div>
    </div>
  );
};

export default Navbar;
