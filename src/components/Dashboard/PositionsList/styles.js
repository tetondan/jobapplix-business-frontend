import styled from "styled-components";

import { darken, lighten } from "polished";

import { media } from "../../../styles/mediaQueries";

export const PositionsListContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.desktop`
    /* padding: 0 50px; */
    width: calc(100% - 180px);
    margin-top: 50px;
    margin-left: 125px;
    margin-right: 50px;
  `}
`;

export const PositionsListTitle = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.textDark};
  /* text-transform: uppercase; */
  margin-bottom: 20px;
  align-self: flex-start;
  ${media.desktop`
    margin-left: 30px;
  `}
`;

export const PositionsListDescription = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.textDark};
  line-height: 1.6rem;
  max-width: 600px;
  /* text-align: center; */
  margin-bottom: 30px;
  margin-left: 30px;
`;

export const PositionTable = styled.div`
  width: 100%;
  padding: 20px 30px;
`;

export const PositionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.borderQuestion};
  padding: 10px 0;
`;

export const PositionName = styled.h2`
  font-size: 1.4rem;
  margin-right: 10px;
`;

export const UpdateAndActive = styled.div`
  display: flex;
  align-items: center;
`;

export const UpdateLink = styled.h3`
  cursor: pointer;
  font-size: 1.4rem;
  color: ${props => props.theme.textBlue};
  margin-right: 10px;
`;

export const CreateButton = styled.div`
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  align-items: center;
  margin: 30px 30px 0 30px;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 5px 10px -1px rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;

  svg {
    width: 15px;
    height: 15px;
    fill: ${props => props.theme.textBlue};
    margin-right: 7px;
  }

  span {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 700px;
    color: ${props => props.theme.textBlue};
  }

  &:hover {
    svg {
      fill: ${props => darken(0.1, props.theme.textBlue)};
    }
    span {
      color: ${props => darken(0.1, props.theme.textBlue)};
    }
    border: 1px solid ${props => lighten(0.4, props.theme.textBlue)};
  }

  &:hover:active {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
`;
