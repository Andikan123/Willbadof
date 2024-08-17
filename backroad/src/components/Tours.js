import React from "react";
import Title from "./Title";
import { tour } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tour.map((single) => {
          return (
            <article className="tour-card" key={single.id}>
              <div className="tour-img-container">
                <img
                  src={single.image}
                  className="tour-img"
                  alt={single.title}
                />
                <p className="tour-date">{single.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{single.title}</h4>
                </div>
                <p>{single.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {single.location}
                  </p>
                  <p>{single.duration} days</p>
                  <p>from ${single.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
