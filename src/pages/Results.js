import styled from "styled-components";
import React, { useContext } from "react";
import { AuthContext } from "../AppContext/auth.js";
import Logo from "../assets/ANHEMBI.jpg"

export default function Results() {

    const { extroversao, amabilidade, conscienciosidade, neuroticismo, aberturaParaExpericencias } = useContext(AuthContext);

    return (
        <>
            <ImgStyle src={Logo} />
            <DivStyle>
                <span>
                    A sua média dos 5 fatores de 1 á 5 foi: </span>
            </DivStyle>

            <DivStyle >
                <span>EXTROVERSÃO: </span>
                <ButtonStyle> {extroversao.toFixed(2)} </ButtonStyle>
            </DivStyle>

            <DivStyle >
                <span>AMABILIDADE: </span>
                <ButtonStyle> {amabilidade.toFixed(2)} </ButtonStyle>
            </DivStyle>

            <DivStyle >
                <span>CONSCIENCIOSIDADE: </span>
                <ButtonStyle> {conscienciosidade.toFixed(2)} </ButtonStyle>
            </DivStyle>


            <DivStyle >
                <span>ESTABILIDADE EMOCIONAL (NEUROTICISMO): </span>
                <ButtonStyle> {neuroticismo.toFixed(2)} </ButtonStyle>
            </DivStyle>

            <DivStyle >
                <span>ABERTURA A NOVAS EXPERIÊNCIAS: </span>
                <ButtonStyle> {aberturaParaExpericencias.toFixed(2)} </ButtonStyle>
            </DivStyle>

        </>
    )
}

const ImgStyle = styled.img`
margin-left: 50px;
margin-top:30px;
width:217px;
height: 51px;
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
margin-bottom: 17px;
}
`;

const ButtonStyle = styled.button`
  width: 270px;
  height: 45px;
  font-weight: 400;
  font-family: 'Righteous';
  color: black;
  margin-bottom: 10px;
  background-color: rgb(120, 182, 245);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 2px solid rgb(120, 182, 245);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`