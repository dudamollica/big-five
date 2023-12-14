import styled from "styled-components";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/ANHEMBI.jpg"

export default function Warning() {

  return (
    <>
      <img src={Logo} />
      <Link to="/questions">
        Concordo e desejo continuar
      </Link>

    </>
  )
}
