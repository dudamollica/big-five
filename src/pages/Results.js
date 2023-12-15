import styled from "styled-components";
import React, { useContext} from "react";
import { AuthContext } from "../AppContext/auth.js";

export default function Results() {

    const { extroversao, amabilidade, conscienciosidade, neuroticismo, aberturaParaExpericencias } = useContext(AuthContext);

    return (
        <>
            <p> extroversao {extroversao} 
            amabilidade {amabilidade}
            conscienciosidade {conscienciosidade}
            neuroticismo {neuroticismo}
            aberturaParaExpericencias {aberturaParaExpericencias}
            </p>

        </>
    )
}