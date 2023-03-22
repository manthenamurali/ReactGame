import styled from "styled-components";

const CustomStyledButton = ({ className, children }) => (
  <button className={className}>{children}</button>
);

export const CustButton = styled(CustomStyledButton)`
  border-radius: 2rem;
  background-color: #f0dee4;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 1rem 2rem;
  font-weight: 400;
  border: 1px solid #f0dee4;
  cursor: pointer;
`;
