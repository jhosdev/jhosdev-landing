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
            position="Software Developer"
            company="Itali Peru"
            companyLink="https://www.facebook.com/institutoitali"
            time="May 2022-Present"
            address="Cuz, PE"
            work="Developed a comprehensive internal database application for a school company using the MERN stack (MongoDB, Express.js, React, Node.js) with a focus on Typescript. The application was created to efficiently manage student data, course schedules, and teacher information, among other essential functions. Developed an ecommerce application using Next.js and Tailwind, providing a user-friendly platform for selling a diverse range of courses and offerings. The application served as a seamless marketplace, allowing customers to explore and access a wide array of company-provided products and services, all within a convenient and intuitive online environment."
            ach={[
              "Collaborated closely with the client to gain a deep understanding of their specific requirements and successfully delivered a functional and user-friendly interface that precisely catered to their needs.",
              "Designed and developed the database architecture, ensuring that it was scalable, secure, and optimized for performance.",
              "Developed the internal application front-end using React with TypeScript, leveraging PrimeReact and TailwindCSS libraries. Implemented essential features such as login and CRUD functionalities, cookie-based authentication, restricted routes with different access levels for admin, employees, and students, and ensured responsive design for seamless user experience",
              "Developed a REST API using Node.js and Express.js with TypeScript to handle HTTP requests and responses on the server-side. Implemented middleware for various functionalities, including user authentication, data filtering, and real-time data updates using JWT (JSON Web Tokens) in combination with MongoDB and Express",
              "Developed the ecommerce application using Next.js and Tailwind, integrating it with the Paypal API for the payments in the app",
              "Conducted testing and debugging to identify and fix any issues and ensured that the application was fully functional and bug-free.",
              "Provided ongoing maintenance and support for the application, ensuring that it remained up-to-date with the latest security patches and bug fixes."
              ]}
          />
          <Details
            position="FullStack Developer"
            company="Waytech Peru"
            companyLink="https://www.linkedin.com/company/way-tech/"
            time="May 2023- Aug 2023"
            address="Lim, PE"
            work="As a member of the development team at OBEN GROUP, I contributed to the creation of an internal inventory application. The project utilized diverse technologies, including React.js with DevExpress for the frontend and .NET Framework for the backend. I took part in development, code quality control and deployment, using AWS EC2 containers for the frontend and backend applications."
            ach={[
              "Upgraded existing systems previously implemented in ASP.NET to enhance functionality and performance. Implementation of a brand-new web platform using the latest technologies and leveraging the robust AWS cloud infrastructure",
              "Played a pivotal role in supporting the core business operations, particularly in the area of production, by effectively managing production processes through the implementation of the reliable floor control system (SCP).",
              "Established efficient connections with satellite systems such as ERP Oracle NetSuite (via APIs), CUBEIQ (via XML), OPTSTUDIO, and XTRIM to facilitate data exchange and integration.",
              "Development of multiple services and microservices utilizing Node.js, Nest.js, and ASP.NET, with DynamoDB and Aurora MySQL serving as the primary databases",
              "Employed the agile SCRUM framework to drive efficient and collaborative development practices"
              ]}
          />
          <Details
            position="Software Developer"
            company="Tenmas / Paqtana"
            companyLink="https://www.linkedin.com/company/paqtana/"
            time="Jun 2023 - Aug 2023"
            address="London, UK"
            work="As a member of the Paqtana app development team, I played a significant role in its creation and ongoing maintenance. My contributions encompassed diverse tasks, including the implementation of new functionalities, unit tests, and end-to-end tests, all while employing CI/CD with pipelines to ensure a seamless development process. In this project, we opted for React.js as our frontend framework, paired with various styling libraries, to create an engaging user interface. For the backend, we leveraged Python with Flask, enabling robust data handling and smooth application functionality. For the end-to-end tests we used Playwright."
            ach={[
              "Fixed various bugs and implemented diverse core business functionalities, enhancing the overall user experience.",
              "Integrated end-to-end tests successfully to the frontend ecosystem, improving the overall functionality and development cycle of the application.",
              "Updated the libraries and packages of both the frontend and backend projects.",
              "Employed the agile SCRUM framework to drive efficient and collaborative development practices."
              ]}
          />
          <Details
            position="Software Developer"
            company="trades.org"
            companyLink="https://www.linkedin.com/company/trades-org/"
            time="July 2023 - Present"
            address="Cuz, PE"
            work="As a dedicated member of the trades.org team, I played a vital role in the backend infrastructure team, contributing my expertise in Nest.js, Typescript, Prisma, GraphQL, Apollo Federation, and AWS to develop diverse APIs and elevate the overall functionality of the business. I also worked on the frontend team, where I used React.js, and DaisyUI to create a user-friendly interface for the application."
            ach={[
              "Collaborated with the backend team to design and enhance new APIs utilizing Nest.js, Typescript, GraphQL, Prisma, and Apollo Federation. These APIs seamlessly integrated with a gateway powered by Apollo and were tested and documented using Postman.",
              "Demonstrated problem-solving skills by identifying and resolving bugs and implementing various functionalities, significantly improving the application's overall performance and development cycle.",
              "Actively participated in code reviews, offering valuable insights and suggestions to elevate the code quality and ensure adherence to best practices.",
              "Embraced the agile SCRUM framework, promoting a collaborative and efficient development process, leading to successful project deliveries and heightened team productivity."
              ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
