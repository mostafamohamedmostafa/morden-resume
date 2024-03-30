import React from "react";
import Trustyourcybercompany from "../Image/Trustyourcybercompany.png";
export const TrustCompanyComponent = () => {
  return (
    <section className="Trust-Company-Component container">
      <div className="row  row-cols-1 g-2  Trust-Section-Inner  ">
        <div className="col-lg-6">
          <div className=" mb-3">
            <div className="card-body">
              <h4 className="card-title"><span>  About our company </span> </h4>
              <h1 className="card-title">
                This Is 24/7 Cyber Security Operation Center For Your Problem
                Solution.
              </h1>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h4 className="card-title">Identifiying threats</h4>
              <h4 className="card-title">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor ut labore.
              </h4>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h4 className="card-title">Identifiying threats</h4>
              <h4 className="card-title">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor ut labore.
              </h4>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className=" mb-3">
            <img src={Trustyourcybercompany} alt="..." className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};
