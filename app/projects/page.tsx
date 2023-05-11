"use client";

import AnimatedText from "@components/AnimatedText";
import LayoutComponent from "@components/LayoutComponent";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@components/Icons";
import postsapp from "@public/images/projects/posts-app.png";
import pokeswapapp from "@public/images/projects/pokeswap-app.png";
import tramigoapp from "@public/images/projects/tramigo-app.png";
import offersapp from "@public/images/projects/offers-app.png";
import cocktailsapp from "@public/images/projects/cocktails-app.png";
import { motion } from "framer-motion";
import TransitionEffect from "@components/transitionEffect";
export const metadata = {
  title: "jhosdev - Projects",
  description: "Projects Page",
};

const FramerImage = motion(Image);

type ProjectProps = {
  type: string;
  title: string;
  summary?: string[];
  img: any;
  link: string;
  github: string;
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: ProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light">
            {title}
          </h2>
        </Link>
        {summary!.map((task) => (
          <p key={task} className="my-2 font-medium text-dark dark:text-light">{task}</p>
        ))}
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10 text-dark dark:text-light"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }: ProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light  rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-80"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold text-dark dark:text-light">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline text-dark dark:text-light"
          >
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            className="w-8 text-dark dark:text-light"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};



export default function Page() {
  return (
    <>
        <TransitionEffect />
        <main>
          <div className="w-full flex flex-col items-center justify-center">
            <LayoutComponent className="pt-16">
              <AnimatedText
                text="Imagination Trumps Knowledge!"
                className="mb-16"
              />
              <div className="grid grid-cols-12 gap-24 gap-y-32">
                <div className="col-span-12 ">
                  <FeaturedProject
                    title="Post CRUD Application"
                    img={postsapp}
                    summary={[
                      "A entry-level app using TypeScript, Vue 3, Vue Router, Vue-i18n and PrimeVue using a fake api (jsonplaceholder). The app is hosted on Firebase, ensuring seamless accessibility and scalability.",
                      "It provides full CRUD implementations and has more features in its way, like: User login & authentication in the User Tab, API Tracking with comprehensive documentation in the Documentation Tab, Comments section for posts data, integration with a real API and Dark Mode & Animations in the Settings Tab.",
                    ]}
                    link="https://posts-app-3ef83.web.app/"
                    github="https://github.com/jhosR/posts-app"
                    type="Featured Project - In Development"
                  />
                </div>
                <div className="col-span-12 ">
                  <FeaturedProject
                    title="PokeSwap - App"
                    img={pokeswapapp}
                    summary={[
                      "This is the initial version of a trading application built using TypeScript, Angular, Angular Router, RxJs, and Angular Material, and it currently utilizes a fake API (jsonwebserver). The app is hosted on Firebase, ensuring seamless accessibility and scalability",
                      "While this is an entry-level version, the app already includes basic trading capabilities and user authentication, with upcoming plans to introduce more advanced functionalities and integration with a real API in the coming weeks. Additionally, the app will feature enhanced user experience through intuitive design, dark mode, and animations. Stay tuned for more updates and features!",
                    ]}
                    link="https://curious-peony-d47fe2.netlify.app/"
                    github="https://github.com/OpenFinance-upc-pre-202301-si729-sw53/PokeSwap-Frontend"
                    type="Featured Project - In Development"
                  />
                </div>
                <div className="col-span-12 ">
                  <FeaturedProject
                    title="Tramigo - App"
                    img={tramigoapp}
                    summary={[
                      "This is the initial version of a users procedure management application built using JavaScript, Vue 3, Vue Router, Axios, Vue-i18n and PrimeVue using a fake api (jsonwebserver). The app is hosted on Netlify, ensuring full accessibility.",
                      "The app currently offers user registration and authentication, and will be further developed to include enhanced design, real API integration, full control and management of user procedures, and potentially establishing connections with other companies.",
                    ]}
                    link="https://tramigo-88245.web.app/"
                    github="https://github.com/FastDocs-upc-pre-202301-si730-sw53/tramigo-frontend"
                    type="Featured Project - In Development"
                  />
                </div>
                <div className="col-span-6">
                  <Project
                    title="Cocktails API Application - Angular + Angular Material"
                    img={cocktailsapp}
                    link="https://github.com/jhosR/cocktails-app"
                    github="https://github.com/jhosR/cocktails-app"
                    type="Featured Project - Code Only"
                  />
                </div>
                <div className="col-span-6">
                  <Project
                    title="Offers CRUD Application - Angular + Angular Material"
                    img={offersapp}
                    link="https://github.com/jhosR/offers-app"
                    github="https://github.com/jhosR/offers-app"
                    type="Featured Project - Code Only"
                  />
                </div>
              </div>
            </LayoutComponent>
          </div>
        </main>
    </>
  );
}
