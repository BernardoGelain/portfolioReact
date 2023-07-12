import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  margin-bottom: 20px;
  margin-inline: auto;
  cursor: pointer;
  @media (max-width: 550px) {
    width: 300px;
    height: 500px;
  }
`;

export const ImgCard = styled.img`
  width: 100%;
  height: 60%;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.textSizes.xm};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  margin-left: 25px;
  font-weight: ${({ theme }) => theme.fonts.medium};
  letter-spacing: 3px;
  margin-bottom: 20px;
  padding-top: 5px;
`;

export const ContainerButtons = styled.div`
 display: flex: 
 flex-direction: row;
 margin-left:15px ;
`;

export const ProjectDescription = styled.span`
  width: 90%;
  margin-inline: auto;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.textSizes.s};
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.textSizes.xs};
  }
`;
