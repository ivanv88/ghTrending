import { FunctionComponent } from "react";
import styled from "styled-components";
import { Navigation } from "../../trending/components/navigation";

const Wrapper = styled.div`
@media (min-width: 768px) {
  display: flex!important;
  align-items: center!important;
  justify-content: space-between!important;
  background-color: #161b22;
  border: 1px solid #30363d;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin: -1px -1px 0;
  padding: 18px;
}
`;


export const BoxHeader: FunctionComponent = () => {
  return (
  <Wrapper>
    <Navigation></Navigation>
  </Wrapper>
  )
}