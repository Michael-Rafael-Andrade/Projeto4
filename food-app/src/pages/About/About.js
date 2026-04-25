import React from "react";
import Layout from "../../components/Layouts/Layout.js";
import Section1 from "../Home/Section1";
// import Section2 from "../Home/Section2";
// import Section3 from "../Home/Section3";
// import Section4 from "../Home/Section4";
// import Section5 from "../Home/Section5";
// import Section6 from "../Home/Section6";
import Section7 from "../Home/Section7";
import Historia from "./Historia.js";
// import Header from "../../components/Layouts/Header.js";
// import { Link } from "react-router-dom";



function About() {

    return (
        <Layout>
            {/* Home Section Banner */}
            <Section1 />


            {/* História da Hamburgueria */}
            <Historia />



            {/* Home Section Contact */}
            <Section7 />

        </Layout>
    );
}

export default About;