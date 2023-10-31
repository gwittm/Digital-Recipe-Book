import styled from "styled-components";

const StyledButton = styled.button`
  background-color: hotpink;
  width: 30px;
  margin: 10px;
  height: 35px;
  width: 35px;
  font-weight: 900;
  font-size: 10px;
  border-radius: 10px;
`;

export default function Button({ children, type = "button" }) {
  return <StyledButton type={type}>{children}</StyledButton>;
}
