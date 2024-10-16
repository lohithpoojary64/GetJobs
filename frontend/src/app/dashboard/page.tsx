import Navbar from "@/components/Dashboard/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen h-screen ">
      <Navbar />
      <div className="flex justify-center items-center h-full w-full mt-6">
        <div className="h-full w-[70%]  overflow-y-scroll px-[10%] ">
            <div>
                <div></div>
                <div></div>
            </div>
            <div></div>
        </div>
      </div>
    </main>
  );
};

export default page;
