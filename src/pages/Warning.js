import styled from "styled-components";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/ANHEMBI.jpg"

export default function Warning() {

  return (
    <>
      <ImgStyle src={Logo} />
      <DivStyle>
        <span>
          Este material apresenta um exercício de avaliação da personalidade,
          destacando o modelo dos Cinco Grandes Fatores (Big Five),
          Baseado no trabalho de Oliver P. John e Sanjay Srivastava,
          o objetivo da atividade é realizar uma autoavaliação em um ambiente de ensino e aprendizagem.
          O participante preenche um questionário com 44 itens,
          utilizando uma escala Likert de cinco pontos para expressar sua percepção sobre características pessoais.
          Não há respostas certas ou erradas; a sinceridade é crucial para uma avaliação precisa do comportamento geral.
          O foco é compreender como essa ferramenta pode ser aplicada, destacando suas vantagens e limitações.</span>

      </DivStyle>

      <ButtonStyle>
        <Link to="/questions">
          Concordo e desejo continuar
        </Link>
      </ButtonStyle>
    </>
  )
}

const ImgStyle = styled.img`
margin-left: 50px;
margin-top:30px;
width:217px;
height: 51px;
`

const ButtonStyle = styled.button`
  width: 230px;
  height: 45px;
  font-weight: 400;
  font-family: 'Righteous';
  color: black;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 2px solid blue;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const DivStyle = styled.div`
width: 260px;
flex-direction: column;
align-items: center;
margin-top: 30px;
margin-left: 30px;
span{
font-style: normal;
font-weight: 400;
font-size: 22px;
font-family: 'Righteous';
margin-bottom: 12px;
}
`;