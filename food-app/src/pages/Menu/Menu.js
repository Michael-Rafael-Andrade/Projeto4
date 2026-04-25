import React from "react";
import Layout from "../../components/Layouts/Layout.js";
import Section1 from "../Home/Section1.js";
import Section7 from "../Home/Section7.js";
import Section3 from "../Home/Section3.js";
import Voltar from "./Voltar.js";

function Menu(){

    return(

        <Layout>

            {/* Chamando a Section1 para realizar a estrutura básica do layout */}
            <Section1/>

            
            {/*  Chamando a Section3 para realizar os cards dos produtos */}
            <Section3/>

            <Voltar/>

            {/* Chamando a Section7 para realizar a estrutura básica do layout */}
            <Section7/>


        </Layout>
    );
}

export default Menu;