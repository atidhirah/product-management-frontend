import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--clr-card);
  padding: 1.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  background-color: var(--clr-button);
  color: var(--clr-button-text);
  display: flex;
  padding: 8px 12px;
  border: none;
  border-radius: 2px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const TextBreakline = styled.div`
  background-color: var(--clr-card);
  width: 100%;
  height: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem;

  span {
    background-color: var(--clr-background);
    color: var(--clr-heading);
    padding: 0 12px;
  }
`;
