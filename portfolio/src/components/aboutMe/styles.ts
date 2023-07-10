import styled from "styled-components";

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
  justify-content: center;
  margin-left: 20%;

  @media (max-width: 650px) {
    margin-left: 5%;
  }
`;
export const AboutMeTitle = styled.span`
  font-size: ${({ theme }) => theme.textSizes.xm};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  margin-left: 25px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 20px;
`;
export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 80%;
  @media (max-width: 650px) {
    width: 90%;
  }
`;
export const Bar = styled.div`
  height: 120px;
  margin-top: 3px;
  width: 15px;
  background-image: ${({ theme }) => theme.colors.gradient};
  border-radius: 999px;
  @media (max-width: 650px) {
    height: 160px;
  }
  @media (max-width: 390px) {
    height: 250px;
  }
`;
export const AboutMeDescription = styled.span`
  font-size: ${({ theme }) => theme.textSizes.s};
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.textSizes.xs};
  }
`;
