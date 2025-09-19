import { useEffect } from "react";
import { Button, HollowButton, Skill } from "./index";
import Whatamovieimg from "../assets/whatamovie.png";

function WhatamovieStudy() {
  useEffect(() => {
    document.title = "Whatamovie case study";
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <div
        className="bg-violet-600 flex items-center justify-center text-white text-center"
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
        <div className="container flex flex-col items-center px-4 py-20 mx-auto text-center md:py-28 md:px-10 lg:px-32">
          <h1 className="text-4xl font-bold">Whatamovie</h1>
          <h2 className="mt-6 mb-8 text-2xl sm:mb-10 xl:max-w-3xl">
            A movie search website.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              text="Live link"
              onClick={() =>
                window.open(
                  "https://rajit-abdillah.github.io/WhatAMovie/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-white text-violet-600 hover:bg-gray-100"
            />
            <HollowButton
              text="Learn more"
              onClick={() => {
                document.getElementById("about-whatamovie").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about-whatamovie" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-left">
          <img
            src={Whatamovieimg}
            alt="Whatamovie"
            className="w-full rounded-md mb-6"
          />

          <p className="text-lg">
            I made this website to show more of my understanding with API, in this project, 
            i used double Omdb API to show a list of movies and its details, 
            you can also view more about the movie in Imdb official website i provied along with the details.
          </p>
        </div>
      </section>

      {/* Tools & Links */}
      <section className="max-w-3xl mx-auto px-4 flex flex-col">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Tools used</h2>
          <div className="flex flex-wrap gap-3">
            <Skill name="HTML" />
            <Skill name="CSS" />
            <Skill name="Javascript" />
            <Skill name="Omdb API" />
            <Skill name="AOS library" />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">See live or return</h2>
        <div className="flex flex-wrap gap-4 mb-10">
          <Button
            text="See live"
            onClick={() =>
              window.open(
                "https://rajit-abdillah.github.io/WhatAMovie/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="bg-violet-500 text-white hover:bg-violet-600"
          />
          <HollowButton
            text="Return home"
            onClick={() => (window.location.href = "/")}
          />
        </div>
      </section>
    </div>
  );
}

export default WhatamovieStudy;
