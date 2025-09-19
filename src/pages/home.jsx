import React, { useEffect } from "react";
import {
  Button,
  HollowButton,
  Skill,
  Projectcard,
  ContactForm,
} from "../components/index";
import { WeatherImage, ColdplateImage, Whatamovie } from "../assets/asset";

function Home() {
  useEffect(() => {
    document.title = "Rajit Abdillah | Portfolio";
  });

  return (
    <>
      <main>
        {/* hero section */}
        <section id="home">
          <div
            className="bg-violet-600 flex items-center justify-center text-white text-center"
            style={{ minHeight: "calc(100vh - 64px)" }}
          >
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
              <h1
                className="text-4xl font-bold sm:text-6xl xl:max-w-3xl dark:text-gray-50"
                id="type-effect"
              >
                Rajit Abdillah | Front-End developer
              </h1>
              <p className="mt-6 mb-8 text-md sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                A Front-End developer focusing on simple and responsive design.
              </p>

              <div className="flex flex-wrap justify-center">
                <Button
                  text="See my projects"
                  onClick={() => {
                    document.getElementById("projects").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="bg-white text-violet-600 hover:bg-gray-100"
                />

                <HollowButton
                  text="About me"
                  onClick={() => {
                    document.getElementById("about").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* about section */}
        <section className="w-full px-6 py-30 bg-white" id="about">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-12">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold">About Me</h2>
              <p>
                Hi, I am a junior developer in Front-End development, focused on
                making simple and interactive websites with HTML, CSS, and
                JavaScript.
              </p>
              <p>
                I enjoy problem solving, although I'm not the best at it yet, it
                is a very fun progress to do, the time comes where it gets
                frustrating, but hey, where's the fun without it?
              </p>
              <p>
                I'm open to job opportunities where I can contribute and grow my
                skills. If you have any job opportunities that you think I would
                be a good fit for, feel free to contact me!
              </p>
              <Button
                text={"Contact me!"}
                className="bg-violet-600 text-white hover:bg-violet-700"
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </div>

            {/* skills section */}
            <div className="md:w-1/2">
              <div className="mt-10 md:mt-0 mb-8">
                <h2 className="text-2xl font-bold mb-4">My Skills</h2>
                <div className="flex flex-wrap gap-3">
                  <Skill name="HTML" />
                  <Skill name="CSS" />
                  <Skill name="JavaScript" />
                  <Skill name="TypeScript" />
                  <Skill name="JSX" />
                  <Skill name="React" />
                  <Skill name="Tailwind" />
                  <Skill name="Bootstrap" />
                  <Skill name="Git" />
                  <Skill name="GitHub" />
                </div>
              </div>

              {/* experience section and projects stats section */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <div className="flex flex-wrap gap-3">
                  <span className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      3 Years of Experience
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-200">
                      I have 3 years of experience in a programming school
                      focusing on Web development.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* example project */}
        <section className="w-full px-6 py-16 bg-gray-100" id="projects">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="max-w-6xl mx-auto space-y-16">
            <Projectcard
              image={ColdplateImage}
              title="ColdPlate"
              description="ColdPlate is a one page restaurant template i made targeting small business owner with no coding experience."
              link={"/coldplate-study"}
            />

            <Projectcard
              image={WeatherImage}
              title="Weather App"
              description="a weather app with background that changes based on the weather."
              link={"/weather-study"}
            />

            <Projectcard
              image={Whatamovie}
              title="WhatAMovie"
              description="A movie searching website using Omdb api"
              link={"/whatamovie-study"}
            />
          </div>
        </section>

        {/* contacts section */}
        <section className="w-full px-6 py-16 bg-gray-100" id="contact">
          <div className="flex flex-col">
            <div className="max-w-6xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
