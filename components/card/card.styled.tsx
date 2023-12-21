import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

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
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }
`;

const animation = css`
  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Header = styled.h1`
  padding: 0;
  margin: 0;

  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.5s both;

  ${animation};
`;

export const Subheader = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s both;

  ${animation};
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

export const Lynk = styled.a`
  &:hover {
    text-decoration: underline;
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
