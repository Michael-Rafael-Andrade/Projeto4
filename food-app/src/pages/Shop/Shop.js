import Layout from "../../components/Layouts/Layout";
import Section1 from "../Home/Section1";
import Section7 from "../Home/Section7";
import Section1Shop from "./Section1Shop.js";
import Voltar from "../Menu/Voltar";
import { useEffect } from "react";


function Shop() {

    useEffect(() => {
        window.scrollTo(0, 0); // Faz a página subir ao carregar
    }, []);

    return (

        <Layout>

            {/* Chamando a Section1 para realizar a estrutura básica do layout */}
            <Section1 />


            {/*  Chamando a Section1Shop */}
            <Section1Shop />


            <Voltar />

            {/* Chamando a Section7 para realizar a estrutura básica do layout */}
            <Section7 />


        </Layout>
    );
}

export default Shop;