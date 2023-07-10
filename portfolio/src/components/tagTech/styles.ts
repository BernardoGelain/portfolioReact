import styled from "styled-components";

export const Tag = styled.button`
  width: 80px;
  height: 35px;
  border: none;
  cursor: default;
  margin-left: 5px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.background};
  background-image: ${({ theme }) => theme.colors.gradient};
`;
