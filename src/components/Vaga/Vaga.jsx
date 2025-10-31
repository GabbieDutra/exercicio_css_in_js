import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export default function Vaga({ titulo, empresa }) {
  return (
    <Card>
      <h3>{titulo}</h3>
      <p>{empresa}</p>
    </Card>
  );
}
