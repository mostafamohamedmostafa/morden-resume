import React from "react";
import WhyUs from "../Image/Whychoose.png";
export const WhyUsCompanyComponent = () => {
  return (
    <section className=" WhyUs-Company-Component container-fluid">
      <div className="row  row-cols-1 g-4    container">
        <div className="col-lg-6">
          <div className=" mb-3">
            <img src={WhyUs} alt="..." className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-6 WhyUs-Company-Component-Inner">
          <div className=" mb-3">
            <div className="card-body">
              <h4 className="card-title"><span>  Why choose us  </span> </h4>
              <h1 className="card-title">
                Cyber Security Skills Gap Widens As Demand For Experts Continues
                To Soar.
              </h1>{" "}
              <p className="card-title">
                Lorem ipsum dolor sit amet consectetuer adipiscing elitenean
                commo doligula eget dolorenean massa.In enim justo, rhoncus ut,
                imperdiet avene natis vitae justo nullam dictum felis eu pede
                mollis pretium Inte ger tincid unt cras dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
