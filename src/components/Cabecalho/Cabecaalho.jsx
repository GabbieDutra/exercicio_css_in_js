import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #282c34;
  color: white;
  padding: 1.5rem;
  text-align: center;
`;

export default function Cabecalho() {
  return (
    <HeaderContainer>
      <h1>Portal de Vagas</h1>
    </HeaderContainer>
  );
}
