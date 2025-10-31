import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 250px;
`;

const Button = styled.button`
  background-color: #2575fc;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #1e5fd6;
  }
`;

export default function Formulario() {
  return (
    <Form>
      <Input type="text" placeholder="Digite o cargo" />
      <Button>Buscar</Button>
    </Form>
  );
}
