import React from "react";
import Fade from "react-reveal/Fade";

import TestimonyAccent from "assets/Image/testimonial-landingpage-frame.png";

import Star from "elements/Star";
import Button from "elements/Button";

export default function Testimony({ data }) {
  return (
    <Fade buttom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
              <img src={data.imageUrl} alt="Testimonial" className="position-absolute" style={{ zIndex: 2 }} />
              <img src={TestimonyAccent} alt="Testimonial" className="position-absolute" style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }} />
            </div>
          </div>
          <div className="col-6">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4} />
            <h5 className="h2 font-weight-light line-height-2 my-3">{data.content}</h5>
            <span className="gray-500" style={{ color: "#b0b0b0" }}>
              {data.familyName}, {data.familyOccupation}
            </span>

            <div>
              <Button className="btn px-5" style={{ marginTop: 40, fontSize: "18px" }} hasShadow isPrimary type="link" href={`/testimonial/${data._id}`}>
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
