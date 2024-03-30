import React from "react";
import WhyUs from "../Image/Whychoose.png";
export const TopReviewsComponent = () => {
  return (
    <section className=" Top-Reviews-Component container-fluid">
      <h4><span>  Top Reviews </span> </h4>
      <h1>Take a look our top Customer feedback</h1>
      <div className="row  row-cols-1 g-4 ">
        <div className="col-lg-6 Top-Reviews-Component-Inner">
          <div className="card mb-3">
            <h1>
              <span>❝</span>
            </h1>
            <h3>
              <span>☆☆☆☆☆</span>
            </h3>
            <div className="card-body">
              <h2 className="card-title">
                Lorem ipsum dolor sit amet consectetuer adipiscing elitenean
                commo doligula eget dolorenean massa.In enim justo, rhoncus ut,
                imperdiet avene natis vitae justo nullam dictum felis eu pede
                mollis pretium Inte ger tincid unt cras dapibus.
              </h2>
              <h5 className="card-title">Client Name</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-6 Top-Reviews-Component-Inner">
          <div className="card mb-3">
            <h1>
              <span>❝</span>
            </h1>
            <h3>
              <span>☆☆☆☆☆</span>
            </h3>
            <div className="card-body">
              <h2 className="card-title">
                Lorem ipsum dolor sit amet consectetuer adipiscing elitenean
                commo doligula eget dolorenean massa.In enim justo, rhoncus ut,
                imperdiet avene natis vitae justo nullam dictum felis eu pede
                mollis pretium Inte ger tincid unt cras dapibus.
              </h2>
              <h5 className="card-title">Client Name</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
