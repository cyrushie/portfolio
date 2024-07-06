import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/magic-button";

const Footer = () => {
  return (
    <footer
      className="w-full mb-[100px] pb-10 md:mb-5"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Get in Touch with <span className="text-primary">Me</span> Today
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Feel free to reach out if you have any questions or would like to
          connect.
        </p>
        <a href="mailto:c.manguerra14@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Cyrus Manguerra
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a
                href={info.href}
                target={"_blank"}
              >
                <img
                  src={info.img}
                  alt="icons"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
