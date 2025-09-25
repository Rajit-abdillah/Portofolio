import { useEffect } from "react";
import { Button, HollowButton, Skill } from "./index";
import Shooter from "../assets/shoother-main.png";

function Shooterstudy() {
  useEffect(() => {
    document.title = "Shooter case study";
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <div
        className="bg-violet-600 flex items-center justify-center text-white text-center"
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
        <div className="container flex flex-col items-center px-4 py-20 mx-auto text-center md:py-28 md:px-10 lg:px-32">
          <h1 className="text-4xl font-bold">Shooter Game</h1>
          <h2 className="mt-6 mb-8 text-2xl sm:mb-10 xl:max-w-3xl">
            A web based shooter game
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              text="Live link"
              onClick={() =>
                window.open(
                  "https://rajitshooter.netlify.app/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-white text-violet-600 hover:bg-gray-100"
            />
            <HollowButton
              text="Learn more"
              onClick={() => {
                document.getElementById("about-shooter").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about-shooter" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-left">
          <img
            src={Shooter}
            alt="shooter game"
            className="w-full rounded-md mb-6"
          />

          <p className="text-lg">
            This is a web based shooter game, along the development, i learnt many things, such as state passing,
            a taste of game development, and much more.

            Right now, the game is still in development but mostly playable on PC, not supported on mobile devices yet,
            but i will see what i can do in the future.
          </p>
        </div>
      </section>

      {/* Tools & Links */}
      <section className="max-w-3xl mx-auto px-4 flex flex-col">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Tools used</h2>
          <div className="flex flex-wrap gap-3">
            <Skill name="React" />
            <Skill name="TSX" />
            <Skill name="Tailwind CSS" />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">See live or return</h2>
        <div className="flex flex-wrap gap-4 mb-10">
          <Button
            text="See live"
            onClick={() =>
              window.open(
                "https://rajitshooter.netlify.app/",
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

export default Shooterstudy;
