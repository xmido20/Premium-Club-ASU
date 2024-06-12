import React from "react";
import styled from "styled-components";

const ParentDiv = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black !important;
`
const Loader = ({images}) => {
  return (
    <ParentDiv>
      <img src={images['introNew.gif']} style={{zIndex:"5"}} className="img-fluid" width='200' height='200' />
    </ParentDiv>
  );
}

export default Loader;