import styled from "styled-components";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/ANHEMBI.jpg"

export default function Warning() {

  return (
    <>
      <img src={Logo} />
      <Link to="/questions">
        <p>....Agora que vocês já sabem o que é o Estresse e suas manifestações,
          nós estagiários de Psicologia da Universidade Anhembi Morumbi, 
          apresentamos aqui um teste com apenas 14 questões objetivas. 
          O presente estudo visa investigar o nível de estresse individual.
          Você não será identificado.
          Obs.: Ao clicar, vai para uma página contendo as instruções.
          Concorda em realizar?</p>
        Concordo e desejo continuar
      </Link>

    </>
  )
}
