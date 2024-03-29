'use client'

import { motion } from "framer-motion";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default function Page() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center text-dark dark:text-light">
        Skills
      </h2>

      <p className="my-4 font-medium text-dark/75 dark:text-white/75">
                My skill set covers a wide range of technologies, including:
              </p>

              <p className="my-4 font-medium text-dark/75 dark:text-white/75">
                <span className="text-primary dark:text-primaryDark font-semibold">
                  Frontend Development:
                </span>{" "}
                React, Nextjs, Angular & Vue frameworks, as well as component and styling libraries such as Tailwind CSS, Chakra UI, DaisyUI, Material UI, Bootstrap and more.
              </p>

              <p className="my-4 font-medium text-dark/75 dark:text-white/75">
                <span className="text-primary dark:text-primaryDark font-semibold">
                  Backend Development:
                </span>{" "}
                Express, Nestjs, Fastify, Spring Boot, ASP.NET, Flask, Django and Fast API frameworks, with RESTful and GraphQL Architecture, using both SQL and NoSQL databases such as MySQL, PostgreSQL, MongoDB, Redis and more.
              </p>

              <p className="my-4 font-medium text-dark/75 dark:text-white/75">
                <span className="text-primary dark:text-primaryDark font-semibold">
                  Cloud Computing:
                </span>{" "}
                AWS and Google Cloud Platform (GCP) to deploy and manage applications.
              </p>

              <p className="my-4 font-medium text-dark/75 dark:text-white/75">
                <span className="text-primary dark:text-primaryDark font-semibold">
                  End to End Testing:
                </span>{" "}
                Playwright, Cypress, Jest, Supertest.
              </p>

              <p className="my-4 font-medium text-dark/75 dark:text-white/75">
                <span className="text-primary dark:text-primaryDark font-semibold">
                  And More!
                </span>{" "}
              </p>

      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-18vw" y="-10vw" />
        <Skill name="Vue.js" x="15vw" y="-12vw" />
        <Skill name="Web Design" x="32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-20vw" y="14vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
        <Skill name="Python" x="-12vw" y="1vw" />
        <Skill name="PHP" x="-30vw" y="-5vw" />
        <Skill name="Angular" x="25vw" y="-15vw" />
        <Skill name="Laravel" x="-10vw" y="-17vw" />
        <Skill name="C#" x="15vw" y="12vw" />
        <Skill name="Typescript" x="16vw" y="5vw" />
        <Skill name="Javascript" x="18vw" y="-1vw" />
        <Skill name="Node.js" x="-20vw" y="5vw" />
        <Skill name="Express.js" x="5vw" y="-14vw" />
        <Skill name="SpringBoot" x="15vw" y="-6vw" />
        <Skill name="ASP.NET" x="30vw" y="10vw" />
      </div>
    </>
  );
}
