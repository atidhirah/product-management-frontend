import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: var(--clr-text);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const InputField = styled.input`
  font-size: 1rem;
  padding: 6px;
  margin-bottom: 4px;
  outline: none;
  border: 1px solid transparent;
  box-shadow: ${(props) =>
    props.error
      ? "0 0 0 1px var(--clr-text-error)"
      : "0 0 0 1px rgba(0, 0, 0, 0.3)"};

  &:focus {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3), 0 2px 0 0 var(--clr-button);
  }
`;

export const ErrorText = styled.p`
  color: var(--clr-text-error);
  height: 0.9rem;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 8px;
`;
