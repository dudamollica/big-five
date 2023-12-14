import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AppContext/auth.js";

export default function Questions() {

  const navigate = useNavigate()
  const { answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10,
    answer11, answer12, answer13, answer14, answer15, answer16, answer17, answer18, answer19, answer20,
    answer21, answer22, answer23, answer24, answer25, answer26, answer27, answer28, answer29, answer30,
    answer31, answer32, answer33, answer34, answer35, answer36, answer37, answer38, answer39, answer40, answer41, answer42, answer43, answer44,
    saveAnswer1, saveAnswer2, saveAnswer3, saveAnswer4, saveAnswer5, saveAnswer6, saveAnswer7, saveAnswer8, saveAnswer9, saveAnswer10, saveAnswer11, saveAnswer12, saveAnswer13, saveAnswer14, saveAnswer15, saveAnswer16, saveAnswer17, saveAnswer18, saveAnswer19,
    saveAnswer20, saveAnswer21, saveAnswer22, saveAnswer23, saveAnswer24, saveAnswer25, saveAnswer26, saveAnswer27, saveAnswer28, saveAnswer29,
    saveAnswer30, saveAnswer31, saveAnswer32, saveAnswer33, saveAnswer34, saveAnswer35, saveAnswer36, saveAnswer37, saveAnswer38, saveAnswer39, saveAnswer40, saveAnswer41, saveAnswer42, saveAnswer43, saveAnswer44, } = useContext(AuthContext);

  return (
    <>
      <DivStyle>
        <span>1) É conversador, comunicativo</span>
        <ButtonStyle background={answer1 == 0 || answer1 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer1(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer1 == 0 || answer1 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer1(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer1 == 0 || answer1 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer1(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer1 == 0 || answer1 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer1(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer1 == 0 || answer1 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer1(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>2) Tende a ser crítico com os outros</span>
        <ButtonStyle background={answer2 == 0 || answer2 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer2(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer2 == 0 || answer2 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer2(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer2 == 0 || answer2 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer2(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer2 == 0 || answer2 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer2(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer2 == 0 || answer2 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer2(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>3) É minucioso e detalhista no trabalho</span>
        <ButtonStyle background={answer3 == 0 || answer3 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer3(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer3 == 0 || answer3 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer3(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer3 == 0 || answer3 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer3(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer3 == 0 || answer3 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer3(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer3 == 0 || answer3 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer3(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>4) É depressivo, triste</span>
        <ButtonStyle background={answer4 == 0 || answer4 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer4(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer4 == 0 || answer4 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer4(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer4 == 0 || answer4 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer4(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer4 == 0 || answer4 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer4(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer4 == 0 || answer4 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer4(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>5) É original, tem sempre novas ideias</span>
        <ButtonStyle background={answer5 == 0 || answer5 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer5(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer5 == 0 || answer5 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer5(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer5 == 0 || answer5 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer5(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer5 == 0 || answer5 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer5(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer5 == 0 || answer5 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer5(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>6) É reservado</span>
        <ButtonStyle background={answer6 == 0 || answer6 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer6(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer6 == 0 || answer6 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer6(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer6 == 0 || answer6 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer6(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer6 == 0 || answer6 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer6(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer6 == 0 || answer6 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer6(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>7) É prestativo e ajuda os outros</span>
        <ButtonStyle background={answer7 == 0 || answer7 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer7(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer7 == 0 || answer7 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer7(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer7 == 0 || answer7 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer7(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer7 == 0 || answer7 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer7(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer7 == 0 || answer7 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer7(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>8) Pode ser um tanto descuidado</span>
        <ButtonStyle background={answer8 == 0 || answer8 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer8(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer8 == 0 || answer8 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer8(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer8 == 0 || answer8 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer8(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer8 == 0 || answer8 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer8(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer8 == 0 || answer8 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer8(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>9) É relaxado, controla bem o stress</span>
        <ButtonStyle background={answer9 == 0 || answer9 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer9(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer9 == 0 || answer9 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer9(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer9 == 0 || answer9 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer9(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer9 == 0 || answer9 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer9(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer9 == 0 || answer9 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer9(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>10) É curioso sobre muitas coisas diferentes</span>
        <ButtonStyle background={answer10 == 0 || answer10 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer10(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer10 == 0 || answer10 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer10(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer10 == 0 || answer10 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer10(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer10 == 0 || answer10 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer10(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer10 == 0 || answer10 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer10(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>11) É cheio de energia</span>
        <ButtonStyle background={answer11 == 0 || answer11 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer11(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer11 == 0 || answer11 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer11(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer11 == 0 || answer11 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer11(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer11 == 0 || answer11 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer11(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer11 == 0 || answer11 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer11(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>12) Começa discussões, disputas, com os outros</span>
        <ButtonStyle background={answer12 == 0 || answer12 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer12(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer12 == 0 || answer12 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer12(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer12 == 0 || answer12 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer12(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer12 == 0 || answer12 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer12(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer12 == 0 || answer12 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer12(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>13) É um trabalhador de confiança</span>
        <ButtonStyle background={answer13 == 0 || answer13 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer13(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer13 == 0 || answer13 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer13(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer13 == 0 || answer13 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer13(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer13 == 0 || answer13 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer13(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer13 == 0 || answer13 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer13(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>14) Fica tenso com frequência</span>
        <ButtonStyle background={answer14 == 0 || answer14 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer14(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer14 == 0 || answer14 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer14(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer14 == 0 || answer14 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer14(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer14 == 0 || answer14 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer14(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer14 == 0 || answer14 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer14(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>15) É engenhoso, alguém que gosta de analisar profundamente as coisas</span>
        <ButtonStyle background={answer15 == 0 || answer15 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer15(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer15 == 0 || answer15 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer15(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer15 == 0 || answer15 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer15(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer15 == 0 || answer15 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer15(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer15 == 0 || answer15 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer15(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>16) Gera muito entusiasmo</span>
        <ButtonStyle background={answer16 == 0 || answer16 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer16(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer16 == 0 || answer16 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer16(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer16 == 0 || answer16 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer16(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer16 == 0 || answer16 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer16(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer16 == 0 || answer16 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer16(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>17) Tem capacidade de perdoar, perdoa facilmente</span>
        <ButtonStyle background={answer17 == 0 || answer17 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer17(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer17 == 0 || answer17 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer17(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer17 == 0 || answer17 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer17(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer17 == 0 || answer17 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer17(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer17 == 0 || answer17 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer17(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>18) Tende a ser desorganizado</span>
        <ButtonStyle background={answer18 == 0 || answer18 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer18(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer18 == 0 || answer18 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer18(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer18 == 0 || answer18 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer18(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer18 == 0 || answer18 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer18(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer18 == 0 || answer18 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer18(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>19) Preocupa-se muito com tudo</span>
        <ButtonStyle background={answer19 == 0 || answer19 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer19(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer19 == 0 || answer19 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer19(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer19 == 0 || answer19 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer19(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer19 == 0 || answer19 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer19(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer19 == 0 || answer19 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer19(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>20) Tem uma imaginação fértil</span>
        <ButtonStyle background={answer20 == 0 || answer20 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer20(1)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer20 == 0 || answer20 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer20(2)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer20 == 0 || answer20 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer20(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer20 == 0 || answer20 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer20(4)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer20 == 0 || answer20 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer20(5)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

      <DivStyle>
        <span>21) Tende a ser quieto, calado</span>
        <ButtonStyle background={answer21 == 0 || answer21 != 5 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer21(5)} >Discordo totalmente</ButtonStyle>
        <ButtonStyle background={answer21 == 0 || answer21 != 4 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer21(4)}>Discordo</ButtonStyle>
        <ButtonStyle background={answer21 == 0 || answer21 != 3 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer21(3)}>Não concordo, nem discordo</ButtonStyle>
        <ButtonStyle background={answer21 == 0 || answer21 != 2 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer21(2)}>Concordo</ButtonStyle>
        <ButtonStyle background={answer21 == 0 || answer21 != 1 ? "rgb(120, 182, 245)" : "rgb(170, 212, 253);"} onClick={() => saveAnswer21(1)}>Concordo totalmente</ButtonStyle>
      </DivStyle>

    </>
  )
}

const DivStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 290px;
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