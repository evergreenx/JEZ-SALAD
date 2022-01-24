import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
// import 'swiper/css';

const Testimonial = () => {
  const [panels, setPanels] = React.useState([0, 1, 2, 3, 4]);
  return (
    <div className=" bg-testimonial-bg pt-28">
      <div className="mt-28 flex lg:flex-row flex-col lg:mx-16 mx-5">
        <div className="why-choose-us mr-20">
          <h1
            className="text lg:text-5xl text-4xl font-semibold w-96 tracking-tighter
           "
          >
            What Are People Saying
            <span className="text-primary"> About Us</span>
          </h1>

          <p className="text-xl  text-black-text w-96 mt-8">
            We are very happy if you are satisfied with our service and
            products, let's read pure reviews from customers who bought our
            products.
          </p>
        </div>

        <div className="slider flex justify-around">
          
        <Flicking renderOnlyVisible={true}>
      {panels.map(index => <div className="flicking-panel" key={index}>{index + 1}</div>)}
    </Flicking>
    <div className="block is-flex is-justify-content-center">
      <span className="button mr-2 is-info is-outlined" onClick={() => setPanels([panels[0] - 1, ...panels])}>Prepend</span>
      <span className="button mr-2 is-info is-outlined" onClick={() => setPanels([...panels, panels[panels.length - 1] + 1])}>Append</span>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
