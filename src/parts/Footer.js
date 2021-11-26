import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto " style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">We provide what you need for 
Holiday with your soulmate.</p>
          </div>
          <div className="col-auto mr-4">
            <h6 className="mt-2  mb-4">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto mr-4">
            <h6 className="mt-2  mb-4">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/career">
                  Our Careers
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3 ">
            <h6 className="mt-2 mb-4">Getting Touch</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@housecation.id">
                  support@sexacation.id
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+322122081996">
                 0818898761431
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span> Sexacation Since 2021</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">Copyright 2021 • All rights reserved • Sexacation</div>
        </div>
      </div>
    </footer>
  );
}
