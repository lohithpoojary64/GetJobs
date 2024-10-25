import React from "react";
import Image from "next/image";
import img1 from "../../../assests/header-img.jpg";
import img2 from "../../../assests/img2.png";
import Signup from "../../components/signUp/SignUp";
import CompaniesList from "./CompaniesList";



const Header:React.FC = () => {
  return (
    <div className="h-[600px] w-[100%] px-[10px] mt-3 flex flex-col items-center ">
      <h1 className="text-green-500 text-2xl font-extrabold">
        Show Your Skills And Get Hired
      </h1>
      <div className="relative w-[100%] flex justify-between items-center">
        <Image
          src={img1}
          alt="header-image"
          height={1000}
          width={1000}
          className="h-[400px] w-[550px]"
        ></Image>
        <div >
          <Signup />
        </div>

        <Image
          src={img2}
          alt="header-image"
          height={1000}
          width={1000}
          className="h-[350px] w-[600px]"
        ></Image>
      </div>
      <CompaniesList/>
    </div>
  );
};

export default Header;
