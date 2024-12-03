import { Button } from "@/Components/ui/button";
import React from "react";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="main-container w-screen h-auto ">
      <div className="container h-auto w-auto grid grid-flow-col mt-20 ">
        <div className="intro pt-3 px-2 md:px-4 lg:px-32 w-auto flexbox text-2xl items-center ">
          <h1 className=" text-4xl px-24 font-serif font-extrabold pb-9">
            {" "}
            My Portifolio{" "}
          </h1>
          <p className="font-serif">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Delectus maiores, cumque ratione omnis aut odit, consequatur
            <br /> veritatis recusandae expedita architecto blanditiis. Ratione{" "}
            <br />
            totam sunt reprehenderit qui nihil pariatur alias! Ullam?
          </p>
        </div>
        <div className="picture py-4 w-auto h-auto md:grid ">
          <Image
            src="/Image/hero-picture.jpg"
            alt="hero-picture"
            width={350}
            height={150}
          />
        </div>
      </div>
      <div className=" mt-10 mb-8 flex gap-16 md:mt-10 md:mb-5 lg:-mt-10 lg:mb-20 lg:ml-2">
        <Button className="px-8 py-8 text-center text-2xl ml-4 md:ml-40  ">
          {" "}
          <a href="./about"> About US</a>
        </Button>
        <Button className="px-8 py-8 text-center text-2xl ">
          {" "}
          <a href="./contact"> Contact Us </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroPage;
