"use client";
import AnimatedText from "@components/AnimatedText";
import LayoutComponent from "@components/LayoutComponent";
import Link from "next/link";
import Image from "next/image";
import article1 from "@public/images/articles/create loading screen in react js.jpg";
import article2 from "@public/images/articles/form validation in reactjs using custom react hook.png";
import article3 from "@public/images/articles/todo list app built using react redux and framer motion.png";
import article4 from "@public/images/articles/todo list app built using react redux and framer motion.png";

import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import TransitionEffect from "@components/transitionEffect";

export const metadata = {
  title: "jhosdev - Articles",
  description: "Articles Page",
};

const FramerImage = motion(Image);

type ArticleProps = {
  img: any;
  title: string;
  time?: string;
  date?: string;
  summary?: string;
  link: string;
};

const MovingImg = ({ img, title, link }: ArticleProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement>(null);

  function handleMouse(event: React.MouseEvent) {
    imgRef.current!.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event: React.MouseEvent) {
    imgRef.current!.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={img}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
        style={{ x: x, y: y }}
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }: ArticleProps) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }: ArticleProps) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid dark:bg-dark dark:border-light border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

/**


          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              img={article1}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
            <FeaturedArticle
              img={article2}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
          </ul>
          <h2 className="font0bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="March 22, 2023"
              img={article3}
              link="/"
            />
            <Article
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="April 23, 2023"
              img={article4}
              link="/"
            />
          </ul>



 */

export default function Page() {
  return (
    <>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center overflow-hidden text-dark dark:text-light">
        <LayoutComponent className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16" />
          <AnimatedText text="Coming Soon." className="mb-16 text-primary dark:text-primaryDark" />
        </LayoutComponent>
      </main>
    </>
  );
}
