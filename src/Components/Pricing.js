import React from "react";
import { FcBarChart } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcFilingCabinet } from "react-icons/fc";

export const Pricing = () => {
  return (
    <section className="PricingSection container text-center">
      <h4>
        <span> Pricing Plan </span>
      </h4>
      <h1>Our best pricing plan for your solution</h1>

      <div className="row  row-cols-1 g-4 ">
        <div className="col-lg-4 Pricing-Component-Inner">
          <div className="card mb-3">
            <h1>
              <span>Personal</span>
            </h1>
            <h3>
              <span>
                <FcBarChart />
              </span>
            </h3>
            <div className="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
              <h2 className="card-title"></h2>
              <h3 className="card-title">
                <span>99</span>/M{" "}
              </h3>
            </div>
          </div>
        </div>

        <div className="col-lg-4 Pricing-Component-Inner">
          <div className="card mb-3">
            <h1>
              <span>Business</span>
            </h1>
            <h3>
              <span>
                <FcBriefcase />
              </span>
            </h3>
            <div className="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
              <h2 className="card-title"></h2>
              <h3 className="card-title">
                <span>199</span>/M{" "}
              </h3>
            </div>
          </div>
        </div>

        <div className="col-lg-4 Pricing-Component-Inner">
          <div className="card mb-3">
            <h1>
              <span>Premium</span>
            </h1>
            <h3>
              <span>
                <FcFilingCabinet />
              </span>
            </h3>
            <div className="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
              <h2 className="card-title"></h2>
              <h3 className="card-title">
                <span>289</span>/M{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
