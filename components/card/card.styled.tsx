import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  padding: 1rem;
  width: ${props => props.theme.breakpoints.s};
  color: #c7b299;
  text-align: center;
  box-shadow: ${props => { return `0 0 2px 2px #c4c0c0` }};
  animation: entrance 0.5s ease 0s 1 normal forwards;

  @media screen and (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
  }

  @keyframes entrance {
    0% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: translateY(-250px);
    }
  
    38% {
      animation-timing-function: ease-out;
      opacity: 1;
      transform: translateY(0);
    }
  
    55% {
      animation-timing-function: ease-in;
      transform: translateY(-65px);
    }
  
    72% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }
  
    81% {
      animation-timing-function: ease-in;
      transform: translateY(-28px);
    }
  
    90% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }
  
    95% {
      animation-timing-function: ease-in;
      transform: translateY(-8px);
    }
  
    100% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }
  }
`;

export const Header = styled.h1`
  padding: 0;
  margin: 0;
`;

export const Subheader = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`;

export const Separator = styled.div`
  height: 4rem;
  width: 0;
  margin: 1.5rem auto;
  border: 1px solid #c4c0c0;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Web1 = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  width: 80px;
  height: 100px;
`;

export const Lynk = styled(Link)`
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Web2 = styled(Image)`
  position: absolute;
  right: 4px;
  top: -2px;
  width: 80px;
  height: 85px;
  transform: rotate(270deg);
`;

export const Footer = styled.div`
  
`;
