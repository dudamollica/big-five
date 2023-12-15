import styled from "styled-components";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AppContext/auth.js";

export default function Questions() {

  const navigate = useNavigate();
  const { answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10,
    answer11, answer12, answer13, answer14, answer15, answer16, answer17, answer18, answer19, answer20,
    answer21, answer22, answer23, answer24, answer25, answer26, answer27, answer28, answer29, answer30,
    answer31, answer32, answer33, answer34, answer35, answer36, answer37, answer38, answer39, answer40, answer41, answer42, answer43, answer44,
    saveAnswer1, saveAnswer2, saveAnswer3, saveAnswer4, saveAnswer5, saveAnswer6, saveAnswer7, saveAnswer8, saveAnswer9, saveAnswer10, saveAnswer11, saveAnswer12, saveAnswer13, saveAnswer14, saveAnswer15, saveAnswer16, saveAnswer17, saveAnswer18, saveAnswer19,
    saveAnswer20, saveAnswer21, saveAnswer22, saveAnswer23, saveAnswer24, saveAnswer25, saveAnswer26, saveAnswer27, saveAnswer28, saveAnswer29,
    saveAnswer30, saveAnswer31, saveAnswer32, saveAnswer33, saveAnswer34, saveAnswer35, saveAnswer36, saveAnswer37, saveAnswer38, saveAnswer39, saveAnswer40, saveAnswer41, saveAnswer42, saveAnswer43, saveAnswer44, calcularResultado } = useContext(AuthContext);

  return (
    <>
      <DivStyle>
        <span>1) É conversador, comunicativo</span>
        <ButtonStyle background={answer1 === 0 || answer1 !== 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer1(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer1 === 0 || answer1 !== 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer1(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer1 === 0 || answer1 !== 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer1(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer1 === 0 || answer1 !== 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer1(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer1 === 0 || answer1 !== 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer1(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer1 === 0 ? 'none' : 'flex'}>
        <span>2) Tende a ser crítico com os outros</span>
        <ButtonStyle background={answer2 === 0 || answer2 !== 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer2(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer2 === 0 || answer2 !== 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer2(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer2 === 0 || answer2 !== 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer2(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer2 === 0 || answer2 !== 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer2(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer2 === 0 || answer2 !== 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer2(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer2 === 0 ? 'none' : 'flex'}>
        <span>3) É minucioso e detalhista no trabalho</span>
        <ButtonStyle background={answer3 == 0 || answer3 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer3(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer3 == 0 || answer3 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer3(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer3 == 0 || answer3 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer3(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer3 == 0 || answer3 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer3(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer3 == 0 || answer3 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer3(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer3 === 0 ? 'none' : 'flex'}>
        <span>4) É depressivo, triste</span>
        <ButtonStyle background={answer4 == 0 || answer4 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer4(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer4 == 0 || answer4 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer4(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer4 == 0 || answer4 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer4(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer4 == 0 || answer4 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer4(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer4 == 0 || answer4 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer4(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer4 === 0 ? 'none' : 'flex'}>
        <span>5) É original, tem sempre novas ideias</span>
        <ButtonStyle background={answer5 == 0 || answer5 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer5(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer5 == 0 || answer5 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer5(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer5 == 0 || answer5 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer5(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer5 == 0 || answer5 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer5(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer5 == 0 || answer5 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer5(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer5 === 0 ? 'none' : 'flex'}>
        <span>6) É reservado</span>
        <ButtonStyle background={answer6 == 0 || answer6 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer6(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer6 == 0 || answer6 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer6(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer6 == 0 || answer6 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer6(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer6 == 0 || answer6 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer6(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer6 == 0 || answer6 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer6(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer6 === 0 ? 'none' : 'flex'}>
        <span>7) É prestativo e ajuda os outros</span>
        <ButtonStyle background={answer7 == 0 || answer7 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer7(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer7 == 0 || answer7 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer7(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer7 == 0 || answer7 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer7(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer7 == 0 || answer7 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer7(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer7 == 0 || answer7 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer7(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer7 === 0 ? 'none' : 'flex'}>
        <span>8) Pode ser um tanto descuidado</span>
        <ButtonStyle background={answer8 == 0 || answer8 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer8(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer8 == 0 || answer8 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer8(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer8 == 0 || answer8 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer8(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer8 == 0 || answer8 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer8(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer8 == 0 || answer8 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer8(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer8 === 0 ? 'none' : 'flex'}>
        <span>9) É relaxado, controla bem o stress</span>
        <ButtonStyle background={answer9 == 0 || answer9 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer9(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer9 == 0 || answer9 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer9(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer9 == 0 || answer9 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer9(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer9 == 0 || answer9 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer9(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer9 == 0 || answer9 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer9(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer9 === 0 ? 'none' : 'flex'}>
        <span>10) É curioso sobre muitas coisas diferentes</span>
        <ButtonStyle background={answer10 == 0 || answer10 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer10(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer10 == 0 || answer10 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer10(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer10 == 0 || answer10 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer10(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer10 == 0 || answer10 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer10(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer10 == 0 || answer10 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer10(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer10 === 0 ? 'none' : 'flex'}>
        <span>11) É cheio de energia</span>
        <ButtonStyle background={answer11 == 0 || answer11 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer11(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer11 == 0 || answer11 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer11(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer11 == 0 || answer11 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer11(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer11 == 0 || answer11 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer11(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer11 == 0 || answer11 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer11(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer11 === 0 ? 'none' : 'flex'}>
        <span>12) Começa discussões, disputas, com os outros</span>
        <ButtonStyle background={answer12 == 0 || answer12 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer12(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer12 == 0 || answer12 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer12(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer12 == 0 || answer12 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer12(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer12 == 0 || answer12 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer12(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer12 == 0 || answer12 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer12(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer12 === 0 ? 'none' : 'flex'}>
        <span>13) É um trabalhador de confiança</span>
        <ButtonStyle background={answer13 == 0 || answer13 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer13(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer13 == 0 || answer13 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer13(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer13 == 0 || answer13 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer13(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer13 == 0 || answer13 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer13(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer13 == 0 || answer13 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer13(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer13 === 0 ? 'none' : 'flex'}>
        <span>14) Fica tenso com frequência</span>
        <ButtonStyle background={answer14 == 0 || answer14 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer14(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer14 == 0 || answer14 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer14(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer14 == 0 || answer14 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer14(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer14 == 0 || answer14 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer14(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer14 == 0 || answer14 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer14(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer14 === 0 ? 'none' : 'flex'}>
        <span>15) É engenhoso, alguém que gosta de analisar profundamente as coisas</span>
        <ButtonStyle background={answer15 == 0 || answer15 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer15(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer15 == 0 || answer15 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer15(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer15 == 0 || answer15 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer15(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer15 == 0 || answer15 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer15(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer15 == 0 || answer15 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer15(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer15 === 0 ? 'none' : 'flex'}>
        <span>16) Gera muito entusiasmo</span>
        <ButtonStyle background={answer16 == 0 || answer16 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer16(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer16 == 0 || answer16 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer16(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer16 == 0 || answer16 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer16(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer16 == 0 || answer16 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer16(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer16 == 0 || answer16 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer16(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer16 === 0 ? 'none' : 'flex'}>
        <span>17) Tem capacidade de perdoar, perdoa facilmente</span>
        <ButtonStyle background={answer17 == 0 || answer17 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer17(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer17 == 0 || answer17 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer17(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer17 == 0 || answer17 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer17(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer17 == 0 || answer17 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer17(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer17 == 0 || answer17 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer17(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer17 === 0 ? 'none' : 'flex'}>
        <span>18) Tende a ser desorganizado</span>
        <ButtonStyle background={answer18 == 0 || answer18 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer18(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer18 == 0 || answer18 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer18(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer18 == 0 || answer18 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer18(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer18 == 0 || answer18 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer18(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer18 == 0 || answer18 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer18(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer18 === 0 ? 'none' : 'flex'}>
        <span>19) Preocupa-se muito com tudo</span>
        <ButtonStyle background={answer19 == 0 || answer19 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer19(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer19 == 0 || answer19 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer19(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer19 == 0 || answer19 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer19(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer19 == 0 || answer19 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer19(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer19 == 0 || answer19 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer19(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer19 === 0 ? 'none' : 'flex'}>
        <span>20) Tem uma imaginação fértil</span>
        <ButtonStyle background={answer20 == 0 || answer20 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer20(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer20 == 0 || answer20 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer20(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer20 == 0 || answer20 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer20(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer20 == 0 || answer20 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer20(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer20 == 0 || answer20 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer20(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer20 === 0 ? 'none' : 'flex'}>
        <span>21) Tende a ser quieto, calado</span>
        <ButtonStyle background={answer21 == 0 || answer21 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer21(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer21 == 0 || answer21 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer21(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer21 == 0 || answer21 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer21(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer21 == 0 || answer21 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer21(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer21 == 0 || answer21 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer21(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer21 === 0 ? 'none' : 'flex'}>
        <span>22) É geralmente confiável</span>
        <ButtonStyle background={answer22 == 0 || answer22 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer22(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer22 == 0 || answer22 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer22(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer22 == 0 || answer22 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer22(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer22 == 0 || answer22 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer22(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer22 == 0 || answer22 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer22(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer22 === 0 ? 'none' : 'flex'}>
        <span>23) Tende a ser preguiçoso</span>
        <ButtonStyle background={answer23 == 0 || answer23 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer23(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer23 == 0 || answer23 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer23(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer23 == 0 || answer23 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer23(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer23 == 0 || answer23 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer23(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer23 == 0 || answer23 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer23(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer23 === 0 ? 'none' : 'flex'}>
        <span>24) É emocionalmente estável, não se altera facilmente</span>
        <ButtonStyle background={answer24 == 0 || answer24 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer24(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer24 == 0 || answer24 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer24(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer24 == 0 || answer24 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer24(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer24 == 0 || answer24 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer24(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer24 == 0 || answer24 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer24(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer24 === 0 ? 'none' : 'flex'}>
        <span>25) É inventivo, criativo</span>
        <ButtonStyle background={answer25 == 0 || answer25 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer25(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer25 == 0 || answer25 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer25(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer25 == 0 || answer25 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer25(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer25 == 0 || answer25 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer25(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer25 == 0 || answer25 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer25(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer25 === 0 ? 'none' : 'flex'}>
        <span>26) É assertivo, não teme expressar o que sente</span>
        <ButtonStyle background={answer26 == 0 || answer26 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer26(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer26 == 0 || answer26 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer26(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer26 == 0 || answer26 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer26(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer26 == 0 || answer26 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer26(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer26 == 0 || answer26 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer26(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer26 === 0 ? 'none' : 'flex'}>
        <span>27) Às vezes é frio e distante</span>
        <ButtonStyle background={answer27 == 0 || answer27 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer27(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer27 == 0 || answer27 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer27(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer27 == 0 || answer27 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer27(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer27 == 0 || answer27 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer27(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer27 == 0 || answer27 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer27(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer27 === 0 ? 'none' : 'flex'}>
        <span>28) Insiste até concluir a tarefa ou o trabalho</span>
        <ButtonStyle background={answer28 == 0 || answer28 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer28(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer28 == 0 || answer28 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer28(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer28 == 0 || answer28 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer28(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer28 == 0 || answer28 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer28(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer28 == 0 || answer28 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer28(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer28 === 0 ? 'none' : 'flex'}>
        <span>29) É temperamental, muda de humor facilmente</span>
        <ButtonStyle background={answer29 == 0 || answer29 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer29(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer29 == 0 || answer29 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer29(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer29 == 0 || answer29 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer29(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer29 == 0 || answer29 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer29(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer29 == 0 || answer29 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer29(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer29 === 0 ? 'none' : 'flex'}>
        <span>30) Valoriza o artístico, o estético</span>
        <ButtonStyle background={answer30 == 0 || answer30 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer30(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer30 == 0 || answer30 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer30(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer30 == 0 || answer30 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer30(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer30 == 0 || answer30 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer30(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer30 == 0 || answer30 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer30(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer30 === 0 ? 'none' : 'flex'}>
        <span>31) É, às vezes, tímido e inibido</span>
        <ButtonStyle background={answer31 == 0 || answer31 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer31(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer31 == 0 || answer31 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer31(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer31 == 0 || answer31 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer31(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer31 == 0 || answer31 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer31(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer31 == 0 || answer31 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer31(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer31 === 0 ? 'none' : 'flex'}>
        <span>32) É amável, tem consideração pelos outros</span>
        <ButtonStyle background={answer32 == 0 || answer32 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer32(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer32 == 0 || answer32 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer32(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer32 == 0 || answer32 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer32(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer32 == 0 || answer32 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer32(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer32 == 0 || answer32 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer32(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer32 === 0 ? 'none' : 'flex'}>
        <span>33) Faz as coisas com eficiência</span>
        <ButtonStyle background={answer33 == 0 || answer33 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer33(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer33 == 0 || answer33 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer33(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer33 == 0 || answer33 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer33(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer33 == 0 || answer33 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer33(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer33 == 0 || answer33 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer33(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer33 === 0 ? 'none' : 'flex'}>
        <span>34) Mantém-se calmo nas situações de tensão</span>
        <ButtonStyle background={answer34 == 0 || answer34 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer34(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer34 == 0 || answer34 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer34(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer34 == 0 || answer34 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer34(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer34 == 0 || answer34 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer34(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer34 == 0 || answer34 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer34(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer34 === 0 ? 'none' : 'flex'}>
        <span>35) Prefere trabalho rotineiro</span>
        <ButtonStyle background={answer35 == 0 || answer35 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer35(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer35 == 0 || answer35 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer35(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer35 == 0 || answer35 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer35(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer35 == 0 || answer35 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer35(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer35 == 0 || answer35 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer35(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer35 === 0 ? 'none' : 'flex'}>
        <span>36) É sociável, extrovertido</span>
        <ButtonStyle background={answer36 == 0 || answer36 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer36(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer36 == 0 || answer36 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer36(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer36 == 0 || answer36 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer36(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer36 == 0 || answer36 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer36(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer36 == 0 || answer36 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer36(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer36 === 0 ? 'none' : 'flex'}>
        <span>37) É, às vezes, rude (grosseiro) com os outros</span>
        <ButtonStyle background={answer37 == 0 || answer37 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer37(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer37 == 0 || answer37 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer37(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer37 == 0 || answer37 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer37(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer37 == 0 || answer37 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer37(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer37 == 0 || answer37 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer37(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer37 === 0 ? 'none' : 'flex'}>
        <span>38) Faz planos e segue-os à risca</span>
        <ButtonStyle background={answer38 == 0 || answer38 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer38(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer38 == 0 || answer38 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer38(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer38 == 0 || answer38 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer38(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer38 == 0 || answer38 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer38(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer38 == 0 || answer38 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer38(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer38 === 0 ? 'none' : 'flex'}>
        <span>39) Fica nervoso facilmente</span>
        <ButtonStyle background={answer39 == 0 || answer39 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer39(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer39 == 0 || answer39 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer39(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer39 == 0 || answer39 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer39(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer39 == 0 || answer39 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer39(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer39 == 0 || answer39 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer39(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer39 === 0 ? 'none' : 'flex'}>
        <span>40) Gosta de refletir, brincar com as ideias</span>
        <ButtonStyle background={answer40 == 0 || answer40 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer40(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer40 == 0 || answer40 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer40(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer40 == 0 || answer40 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer40(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer40 == 0 || answer40 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer40(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer40 == 0 || answer40 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer40(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer40 === 0 ? 'none' : 'flex'}>
        <span>41) Tem poucos interesses artísticos</span>
        <ButtonStyle background={answer41 == 0 || answer41 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer41(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer41 == 0 || answer41 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer41(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer41 == 0 || answer41 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer41(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer41 == 0 || answer41 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer41(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer41 == 0 || answer41 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer41(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer41 === 0 ? 'none' : 'flex'}>
        <span>42) Gosta de cooperar com os outros</span>
        <ButtonStyle background={answer42 == 0 || answer42 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer42(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer42 == 0 || answer42 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer42(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer42 == 0 || answer42 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer42(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer42 == 0 || answer42 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer42(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer42 == 0 || answer42 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer42(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer42 === 0 ? 'none' : 'flex'}>
        <span>43) É facilmente distraído</span>
        <ButtonStyle background={answer43 == 0 || answer43 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer43(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer43 == 0 || answer43 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer43(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer43 == 0 || answer43 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer43(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer43 == 0 || answer43 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer43(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer43 == 0 || answer43 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer43(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle display={answer43 === 0 ? 'none' : 'flex'}>
        <span>44) É sofisticado em artes, música ou literatura</span>
        <ButtonStyle background={answer44 === 0 || answer44 !== 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer44(1)}>Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer44 === 0 || answer44 !== 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer44(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer44 === 0 || answer44 !== 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer44(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer44 === 0 || answer44 !== 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer44(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer44 === 0 || answer44 !== 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer44(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivFinishButtonStyle display={answer44 === 0 ? 'none' : 'flex'}>
        <FinishButtonStyle onClick={() => {
          calcularResultado()
          navigate("/results")
        }}> Ver resultado</FinishButtonStyle>
      </DivFinishButtonStyle>
    </>
  )
}

const DivStyle = styled.div`
  width: 260px;
  display : ${props => props.display ? props.display : 'flex'};
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  margin-top: 30px;
  span{
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  font-family: 'Righteous';
  margin-bottom: 12px;
  }
`;

const ButtonStyle = styled.button`
  width: 270px;
  height: 45px;
  font-weight: 400;
  font-family: 'Righteous';
  color: black;
  margin-bottom: 10px;
  background-color: ${props => props.background ? props.background : props.background};
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

const DivFinishButtonStyle = styled.div`
width: 100%;
display : ${props => props.display ? props.display : 'flex'};
flex-direction: column;
align-items: center;
margin-top: 30px;
`

const FinishButtonStyle = styled.button`
width: 290px;
height: 45px;
font-weight: 400;
font-family: 'Righteous';
color: black;
margin-bottom: 10px;
background-color: #fde910;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 5px;
border: 2px solid #fbec5d;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`