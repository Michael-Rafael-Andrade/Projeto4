import Layout from "../../components/Layouts/Layout";
import Section1 from "../Home/Section1";
import Section7 from "../Home/Section7";
import Voltar from "../Menu/Voltar";


function Shop() {

    return (

        <Layout>

            {/* Chamando a Section1 para realizar a estrutura básica do layout */}
            <Section1 />


            {/*  Chamando a Section3 para realizar os cards dos produtos */}

            <Voltar />

            {/* Chamando a Section7 para realizar a estrutura básica do layout */}
            <Section7 />


        </Layout>
    );
}

export default Shop;