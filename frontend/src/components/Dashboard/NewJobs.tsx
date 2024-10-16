import React from "react";

const data = [
  {
    id: 1,
    role: "Full Stack Developer",
    Company: "Google",
    additionalDetails: [
      {
        timings: [
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
        ],
        job: { role: "Internship", Time: "Starts in 1-3 months" },
      },
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    Company: "Google",
    additionalDetails: [
      {
        timings: [
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
        ],
        job: { role: "Internship", Time: "Starts in 1-3 months" },
      },
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    Company: "Google",
    additionalDetails: [
      {
        timings: [
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
        ],
        job: { role: "Internship", Time: "Starts in 1-3 months" },
      },
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    Company: "Google",
    additionalDetails: [
      {
        timings: [
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
        ],
        job: { role: "Internship", Time: "Starts in 1-3 months" },
      },
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    Company: "Google",
    additionalDetails: [
      {
        timings: [
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
        ],
        job: { role: "Internship", Time: "Starts in 1-3 months" },
      },
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    Company: "Google",
    additionalDetails: [
      {
        timings: [
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
        ],
        job: { role: "Internship", Time: "Starts in 1-3 months" },
      },
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    Company: "Google",
    additionalDetails: [
      {
        timings: [
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
        ],
        job: { role: "Internship", Time: "Starts in 1-3 months" },
      },
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    Company: "Google",
    additionalDetails: [
      {
        timings: [
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
        ],
        job: { role: "Internship", Time: "Starts in 1-3 months" },
      },
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    Company: "Google",
    additionalDetails: [
      {
        timings: [
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
        ],
        job: { role: "Internship", Time: "Starts in 1-3 months" },
      },
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    Company: "Google",
    additionalDetails: [
      {
        timings: [
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
          {
            img: "image",
            time: "No Fixed Duration",
            Location: "Mumbai , India",
          },
        ],
        job: { role: "Internship", Time: "Starts in 1-3 months" },
      },
    ],
  },
];

const NewJobs = () => {
  return (
    <div className="h-full w-full overflow-y-scroll scrollbar-none">
      {data.map((item) => {
        return <div key={item.id} className="h-[150px] w-full border border-solid border-slate-300 rounded-2xl mt-3 shadow-sm shadow-slate-400 ">

        </div>;
      })}
    </div>
  );
};

export default NewJobs;
