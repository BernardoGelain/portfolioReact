import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 90%;
  margin-left: 5%;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    flex-direction: column-reverse;
  }
`;

export const SpanContainer = styled.div`
  display: flex;

  flex-direction: column;
  width: 40%;
  gap: 20px;
  span {
    color: ${({ theme }) => theme.colors.text};
  }
  .description {
    font-weight: ${({ theme }) => theme.fonts.medium};
  }
  @media (max-width: 850px) {
    width: 50%;
  }
  @media (max-width: 750px) {
    width: 90%;
  }
`;
export const Coder = styled.img`
  width: 400px;

  min-height: 400px;
  @media (max-width: 750px) {
    min-height: 300px;
    margin-top: 30px;
  }
`;
export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 650px) {
    margin-top: 70px;
  }
`;

export const Nome = styled.span`
  font-size: ${({ theme }) => theme.textSizes.xg};
  font-weight: ${({ theme }) => theme.fonts.bold};

  background-clip: text;
  -webkit-background-clip: text; /* Para navegadores WebKit */
  color: transparent !important;
  background-image: ${({ theme }) => theme.colors.gradient};
`;
export const ContactButton = styled.button`
  font-size: ${({ theme }) => theme.textSizes.xm};
  font-weight: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.text};
  background-image: ${({ theme }) => theme.colors.gradient};
  border: none;
  width: 180px;
  height: 40px;
  cursor: pointer;
`;
