import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.colors.backgroundMenu};
  padding: 1rem;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  .containerHeader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      margin-left: 10px;
      widht: 166px;
      height: 100px;
    }
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ButtonDarkLight = styled.button`
  width: 38px;
  height: 40px;
  border-radius: 10px;
  border: 0px solid ${({ theme }) => theme.colors.borderButtonHeader};
  background: ${({ theme }) => theme.colors.backgroundMenu};
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const NomeLogo = styled.span`
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fonts.bold};

  background-clip: text;
  -webkit-background-clip: text; /* Para navegadores WebKit */
  color: transparent;
  background-image: ${({ theme }) => theme.colors.gradient};
  font-size: ${({ theme }) => theme.textSizes.g};
`;
