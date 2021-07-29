import { FunctionComponent } from "react";
import styled from "styled-components";
import { Navigation } from "../../trending/components/navigation";
import { SelectMenuLanguages } from "../../trending/components/selectMenuLanguages";
import { SelectProgrammingLanguages } from "../../trending/components/selectProgrammingLanguage";
import { useLocation } from 'react-router-dom'
import { SelectDateRange } from "../../trending/components/selectDateRange";

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

const Flex = styled.div`
  display: flex;
  align-items: center;
`;


export const BoxHeader: FunctionComponent = () => {
  const location = useLocation();
  
  return (
  <Wrapper>
    <Navigation></Navigation>
    <Flex>
      { location.pathname !== '/developers' && <SelectMenuLanguages />}
      <SelectProgrammingLanguages />
      <SelectDateRange />
    </Flex>
  </Wrapper>
  )
}