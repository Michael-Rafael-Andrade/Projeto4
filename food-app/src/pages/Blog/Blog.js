import Layout from "../../components/Layouts/Layout";
import Section1 from "../Home/Section1";
import Section1Blog from "./Section1Blog.js";
import Voltar from "../Menu/Voltar";
import Section7 from "../Home/Section7";


function Blog() {

    return (
        <Layout>

            {/* Chamando a Section1 para realizar a estrutura básica do layout */}
            <Section1 />


            {/*  Chamando a Section1Blog para realizar os cards dos produtos */}
            <Section1Blog />


            <Voltar />

            {/* Chamando a Section7 para realizar a estrutura básica do layout */}
            <Section7 />


        </Layout>
    );
}

export default Blog;