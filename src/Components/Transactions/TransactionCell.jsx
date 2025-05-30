import React, { useState } from 'react'
import styled from 'styled-components';
import { useEffect } from 'react';
const Cell = styled.div`
  display:flex;
  flex-direction:row;
  padding:10px 10px;
  font-size:14px;
  border-radius:2px;
  align-items:center;
  font-weight:normal;
  width:106%;
  border:1px solid #e6e8e9;
  justify-content: sapce-between;
  border-right:4px solid ${(props)=>props.isexpense ? "red": "green"};
  & span{
        padding: 9px;
    width: 16%;
    word-wrap: break-word;
  }
  `
  ;
  const AddTransaction = styled.button`
       background:#000;
       color:#fff;
       padding:5px 10px;
       border-radius:4px;
       cursor:pointer;
       font-weight:bold;
       font-size:15px;
       `;
export default function TransactionCell(props) {
 
 
  return (
     <Cell isexpense ={ props.payload.Rdovalue === "Expense"}>
        
        <span>{ props.payload.Rdovalue}</span>
        <span>{ props.payload.Desc}</span>
        <span>{ props.payload.Category}</span>
        <span>{ props.payload.Date}</span>
        <span>${ props.payload.Amount}</span>
        <AddTransaction onClick={()=>props.onDelete(props.index)}>Delete</AddTransaction>
     </Cell>
  )
}

