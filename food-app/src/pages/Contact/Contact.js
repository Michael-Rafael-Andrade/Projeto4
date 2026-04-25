import Section1 from "../Home/Section1.js";
import Section7 from "../Home/Section7.js";
import Voltar from "../Menu/Voltar.js";
import Layout from "../../components/Layouts/Layout.js";
import Formulario from "./Formulario.js";


function Contact() {

    return (

        <Layout>

            {/* Chamando a Section1 para realizar a estrutura básica do layout */}
            <Section1 />


            {/* Chamando o formulário */}
            <Formulario />

            {/*  Chamando a Section3 para realizar os cards dos produtos */}

            <Voltar />

            {/* Chamando a Section7 para realizar a estrutura básica do layout */}
            <Section7 />


        </Layout>
    );
}

export default Contact;