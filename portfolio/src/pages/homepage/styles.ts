import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-inline: auto;
`;
export const SpanTitulo = styled.span`
  font-size: ${({ theme }) => theme.textSizes.xm};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  margin-left: 20%;

  font-weight: ${({ theme }) => theme.fonts.bold};
`;
export const ContainerTechs = styled.div`
  margin-top: 100px;
  display: flex;
  margin-inline: auto;
  gap: 80px;
  width: 70%;
  flex-wrap: wrap;
  margin-bottom: 100px;
  @media (max-width: 595px) {
    gap: 20px;
    width: 60%;
    margin-left: 20%;
  }
`;
export const Tech = styled.img`
  max-width: 60px;
  min-width: 50px;
  max-height: 60px;
  min-height: 50px;
`;
