import React from "react";
import { ProjectsSectionData } from "./WebSiteData";
export const ProjectComponent = () => {
  let Cols = `col-lg-${Math.floor(Math.random() * 4 + 2)} `;

  return (
    <section className="Project-Component container">
      <h4> <span> Our Projects</span> </h4>
      <h1>We made the latest product for our client</h1>

      <div className="row  row-cols-1   ">
        {ProjectsSectionData.map((ProjectsSectionData, index) => {
          return (
            <div className={Cols} key={index}>
              <div className="card mb-3 g-3">
                <img
                  src={ProjectsSectionData.Image}
                  className="img-fluid rounded-start"
                  alt={ProjectsSectionData.ImageALt}
                />

                <div className="card-body">
                  <h3 className="card-title">
                    {ProjectsSectionData.ProjectTitle}
                  </h3>
                  <p className="card-text">{ProjectsSectionData.Description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
