import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import CarouselItem from "./components/CarouselItem";
import { RiFilePaper2Line, RiReactjsFill } from "react-icons/ri";
import { MdFitnessCenter } from "react-icons/md";

function App() {
  return (
    <div className="app">
      <Carousel>
        <CarouselItem>
          <img src="/images/green_quote.png" alt="quote/png" />
          <p className="text">
            This piece of software is <span>the shit</span>, <br />I have never
            tried anything like it.
          </p>
          <div className="icons__box">
            <div className="icon">
              <img src="/images/mr_face.png" alt="face/png" className="face" />
            </div>
            <p className="text__one">Mr. face</p>
            <p>Karma Guru @ Face co™</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src="/images/quote.png" alt="quote/png" />
          <p className="text__pink">
            An experience that makes us feel like we're <br /> covered in maple
            syrup - <span>It's a good thing</span>
          </p>
          <div className="icons__box">
            <div className="icon">
              <img src="/images/cake.png" alt="cake/png" className="cake" />
            </div>
            <p className="text__one">The whole team @</p>
            <p>The Pancake Collective™</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src="/images/green_quote.png" alt="quote/png" />
          <p className="text">
            This piece of software is <span>the shit</span>, <br />I have never
            tried anything like it.
          </p>
          <div className="icons__box">
            <div className="icon">
              <RiFilePaper2Line className="cake" />
            </div>
            <p className="text__one">Mr. face</p>
            <p>Karma Guru @ Face co™</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src="/images/green_quote.png" alt="quote/png" />
          <p className="text">
            Hooks are a new addition in React 16.8.
            <span>They let you use state and other React features</span>, <br />
            I have never without writing a class.
          </p>
          <div className="icons__box">
            <div className="icon">
              <RiReactjsFill className="cake" />
            </div>
            <p className="text__one">React Hooks</p>
            <p>Hooks at a Glance</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src="/images/green_quote.png" alt="quote/png" />
          <p className="text">
            This piece of software is <span>the shit</span>, <br />I have never
            tried anything like it.
          </p>
          <div className="icons__box">
            <div className="icon">
              <MdFitnessCenter className="cake" />
            </div>
            <p className="text__one">Mr. face</p>
            <p>Karma Guru @ Face co™</p>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
