import React from "react";
import {Navbar} from "../components";
import {About, Footer, Header, Skills, Testimonial, Work} from "../container";

const Main = () => {
    return(
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Work/>
            <Skills/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}
export default Main