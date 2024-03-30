import React from "react";
import HeroImage from "../Image/HeroImage.jpg";
export const HeroSection = () => {
  return (
    <section className="Hero-Section container-fluid w-90">
      <div className="row  row-cols-1 g-0  Hero-Section-Inner  ">
        <div className="col-lg-9">
          <div className="card mb-3">
            <div className="card-body">
              <h1 className="card-title">
                We're a best cyber security problem solution team
              </h1>
              <h4 className="card-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                consectetur adipiscing elit tempor ut labore
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
