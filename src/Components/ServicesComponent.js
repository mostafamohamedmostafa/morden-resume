import React from "react";
import { ServiceHeroSectionData } from "./WebSiteData";
export const ServicesComponent = () => {
  let Cols = `col-lg-${Math.floor(Math.random() * 4 + 2)} `;

  return (
    <section className="ServicesComponent container">
      <h4> <span> Our services </span> </h4>
      <h1>Our services What we do for your Cyber security solutions</h1>

      <div className="row  row-cols-1   ">
        {ServiceHeroSectionData.map((ServiceHeroSectionData, index) => {
          return (
            <div className={Cols} key={index}>
              <div className="card mb-3 g-3">
                <img
                  src={ServiceHeroSectionData.Image}
                  className="img-fluid rounded-start"
                  alt={ServiceHeroSectionData.ImageALt}
                />

                <div className="card-body">
                  <h3 className="card-title">
                    {ServiceHeroSectionData.ServiceTitle}
                  </h3>
                  <p className="card-text">
                    {ServiceHeroSectionData.Description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
