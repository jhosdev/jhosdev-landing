'use client'

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
  ach: string[];
};

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  ach,
}: DetailsProps) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref}/>
      <motion.div initial={{y:0}} whileInView={{y:50}} transition={{duration:0.5,type:"spring"}}>
        <h3 className="capitalize font-bold text-2xl mb-2">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full mt-2">{work}</p>
        <h4 className="font-semibold text-primary dark:text-primaryDark mt-2">Achievements</h4>
        <ul className="font-medium w-full mt-1">
          {ach.map(task => <li key={task}>&#8226; {task}</li>)}
        </ul>
        
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 text-dark dark:text-light">
          <Details
            position="FullStack Developer"
            company="Itali Peru"
            companyLink="https://www.facebook.com/institutoitali"
            time="2022-Present"
            address="Cuz, PE"
            work="Developed a database application for a small school company using the MERN stack (MongoDB, Express.js, React, Node.js) and TypeScript. The application was designed to manage student data, course schedules, and teacher information, among other things."
            ach={[
              "Worked closely with the client to understand their requirements and developed a functional and intuitive user interface that met their needs.",
              "Designed and developed the database architecture, ensuring that it was scalable, secure, and optimized for performance.",
              "Wrote server-side code in Node.js and Express.js to handle HTTP requests and responses and built the front-end using React and TailwindCSS.",
              "Implemented various features such as user authentication, data filtering, and real-time data updates using JWT with MongoDB and Express.",
              "Conducted testing and debugging to identify and fix any issues and ensured that the application was fully functional and bug-free.",
              "Provided ongoing maintenance and support for the application, ensuring that it remained up-to-date with the latest security patches and bug fixes."
              ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
