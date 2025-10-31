import styled from "styled-components";

const HeroSection = styled.section`
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
`;

export default function Hero() {
  return (
    <HeroSection>
      <Title>Encontre o emprego ideal</Title>
      <p>Busque entre centenas de oportunidades</p>
    </HeroSection>
  );
}
