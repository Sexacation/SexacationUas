import React, { Component } from "react";


import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import LandingPage from "json/landingPage.json";
export default class LandingPage_ extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  } 

  componentDidMount() {
    document.title = "Housecation | Home";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={LandingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={LandingPage.mostPicked} />
        <Categories data={LandingPage.categories} />
        <Testimony data={LandingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
