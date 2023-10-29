import styled from "styled-components";

const StyledButton = styled.button`
  background-color: hotpink;
  width: 30px;
  margin: 10px;
  height: 35px;
  width: 35px;
`;

export default function Button({ children, type = "button" }) {
  return (
    <StyledButton type={type} className="button">
      {children}
    </StyledButton>
  );
}
