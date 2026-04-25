import { Link } from "react-router-dom";
import React from "react";

function Voltar() {

    return (
        <Link to="/" className="btn_Voltar order_now btn_red">
            Menu principal
        </Link>
    );
}

export default Voltar;