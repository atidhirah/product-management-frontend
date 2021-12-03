import styled from "styled-components";
import { CardContainer } from "../../GlobalElements";

export const FormContainer = styled(CardContainer)`
  width: 90%;
  max-width: 380px;
  position: relative;
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const SubmitWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SwitchAuth = styled.p`
  font-size: 0.7rem;

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 760px) {
    font-size: 0.8rem;
  }
`;
