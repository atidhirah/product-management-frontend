import styled from "styled-components";
import { SwitchAuth as Switch } from "../LoginForm/LoginFormElements";

export const FormNumIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -24px;
  left: 0;
  right: 0;
`;

export const Circle = styled.div`
  background-color: ${(props) =>
    props.active ? "var(--clr-button)" : "#234359"};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 5px;
`;

export const SwitchAuth = styled(Switch)`
  text-align: center;
  position: absolute;
  bottom: -2rem;
  left: 0;
  right: 0;
`;
