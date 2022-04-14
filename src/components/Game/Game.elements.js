import styled from "styled-components";
import { Container } from "../../globalStyles";

export const GameParent = styled(Container)`
  background: ${({ lightBg }) => (lightBg ? "orangered" : "red")};
  height: 45vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${Container}
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const GameText = styled.div`
  display: flex;
`;

export const GameName = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  color: ${({description}) => (description ? 'gray' : 'white')};
  margin-bottom: 1rem;
`;

export const GameBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem 0
`;
export const GameBox1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: rgb(239, 239, 239);
`;

export const GameBox2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: rgb(239, 239, 239);
`;

export const NumBtn = styled.button`
  margin: .5rem;
  border: none;
  font-size: ${({size})=> (size ? '1.3rem' : '1.2rem')};
  padding: 0.5rem .9rem;
  cursor: pointer;
  background: #eee;
`

export const GameTime = styled.div`
  color: ${({time}) => (time ? 'gray': 'white')};
`