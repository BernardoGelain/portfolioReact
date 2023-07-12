import styled from "styled-components";

export const FooterContainer = styled.div`
  min-height: 200px;
  background: ${({ theme }) => theme.colors.backgroundMenu};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 30px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
  .email {
    margin-left: -10px;
  }
`;
export const TextFooterSocial = styled.span`
  font-size: ${({ theme }) => theme.textSizes.s};
  font-weight: ${({ theme }) => theme.fonts.medium};
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.textSizes.xs};
  }
`;
export const LastPhrase = styled.span`
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-style: italic;
  background-clip: text;
  -webkit-background-clip: text; /* Para navegadores WebKit */
  color: transparent;
  background-image: ${({ theme }) => theme.colors.gradient};
  font-size: ${({ theme }) => theme.textSizes.g};
  margin-right: 30px;
  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.textSizes.xs};
  }
  @media (max-width: 420px) {
    font-size: ${({ theme }) => theme.textSizes.xs};
    margin-right: 0px;
    margin-top: 35px;
  }
`;
export const SocialImg = styled.img`
  width: 30px;
`;
