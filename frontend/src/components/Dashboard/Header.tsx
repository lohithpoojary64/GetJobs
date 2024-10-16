import React from "react";
import AllFilters from "./AllFilters";
import NewJobs from "./NewJobs";
import JobFilter from "@/components/Dashboard/JobFilter";

const Header = () => {
  return (
    <div className="relative flex justify-center items-center h-full w-full mt-6">
      <div className="h-full w-[70%]  overflow-y-scroll scrollbar-none  ">
        <div className="flex gap-5 w-full h-full">
          <AllFilters />
          <NewJobs />
          <JobFilter />
        </div>

        

      </div>
    </div>
  );
};

export default Header;
