import { FunctionComponent } from "react"
import { SelectMenu } from '@primer/components'
import { useState } from "react"
import styled from "styled-components"

const style = {
  backgroundColor: 'red'
}

const Padding = styled.div`
  padding: 0 15px;
`;

export const SelectDateRange: FunctionComponent = () => {
  const [range, setRange] = useState('Today');
  
  const ranges = [
    'Today',
    'This week',
    'This month',
  ]

 //@ts-ignore
  const handleSelect = (e) => {
    setRange(e);
  }



  return(
    <Padding>
      <SelectMenu css={style}>
      <summary style={{cursor: 'pointer', fontSize: '14px'}} >Date Range: <span style={{fontWeight: 600}}>{range}</span></summary>
      <SelectMenu.Modal>
        <SelectMenu.Header>Adjust time span</SelectMenu.Header>
        <SelectMenu.List>
        {
            ranges.map((dateRange) => <SelectMenu.Item selected={dateRange === range} onClick={() => handleSelect(dateRange)} key={dateRange}>{dateRange}</SelectMenu.Item>)
          }
        </SelectMenu.List>
      </SelectMenu.Modal>
    </SelectMenu>
    </Padding>
  )
}