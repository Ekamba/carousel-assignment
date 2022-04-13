import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import CarouselItem from "./components/CarouselItem";
import { RiFilePaper2Line, RiReactjsFill } from "react-icons/ri";
import {
  MdOutlineFormatQuote,
  MdOutlineTagFaces,
  MdFitnessCenter,
} from "react-icons/md";
import { CgMenuCake } from "react-icons/cg";

function App({ totalItems }) {
  return (
    <div className="app">
      <Carousel totalItems={totalItems}>
        <CarouselItem>
          <MdOutlineFormatQuote className="quote" />
          <p className="text">
            This piece of software is <span>the shit</span>, <br />I have never
            tried anything like it.
          </p>
          <div className="icons__box">
            <div className="icon">
              <MdOutlineTagFaces className="face" />
            </div>
            <p className="text__one">Mr. face</p>
            <p>Karma Guru @ Face co™</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <MdOutlineFormatQuote className="quote__pink" />
          <p className="text__pink">
            An experience that makes us feel like we're <br /> covered in maple
            syrup - <span>It's a good thing</span>
          </p>
          <div className="icons__box">
            <div className="icon">
              <CgMenuCake className="cake" />
            </div>
            <p className="text__one">The whole team @</p>
            <p>The Pancake Collective™</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <MdOutlineFormatQuote className="quote" />
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
          <MdOutlineFormatQuote className="quote" />
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
          <MdOutlineFormatQuote className="quote" />
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
