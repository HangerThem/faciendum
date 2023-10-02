import { styled } from "styled-components";

export const Search = styled.input`
  border: 1px solid var(--tertiary-color);
  border-radius: 0.25rem;
  padding: 0.625rem 1.25rem;
  width: 100%;
  font-size: 1rem;
  font-family: "K2D", sans-serif;
  outline: none;
  background-color: var(--primary-color);
  color: var(--secondary-color);  
  &::placeholder {
    color: var(--secondary-color);
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
