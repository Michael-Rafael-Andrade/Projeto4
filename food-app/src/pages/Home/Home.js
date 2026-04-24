import React from "react";
import Layout from "../../components/Layouts/Layout.js";
import Section1 from "./Section1.js";
import Section2 from "./Section2.js";
import Section3 from "./Section3.js";
import "../../styles/HomeStyle.css";

function Home(){

    return(

        <Layout>
            {/* Home Section Banner */}
            <Section1/>

            {/* Home Section About */}
            <Section2/>

            {/* Home Section Menu */}
            <Section3/>

            {/* Home Section Promotion */}
            
            {/* Home Section Shop */}
            
            {/* Home Section Blog */}
            
            {/* Home Section Contact */}

        </Layout>
    );
}

export default Home;
