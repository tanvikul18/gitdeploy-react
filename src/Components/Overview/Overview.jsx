import React, { useState } from 'react'
import styled from 'styled-components'
import AddTransactionView from './AddTransactionView';
const Container = styled.div `
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 10px;
  width:100%;`;
const ExpenseContainer = styled.div `
  display:flex;
  flex-direction:row;
   gap:12px;
   margin:20px;
   `;
  const BalanceBox = styled.div`
      display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  font-size:18px;
  width:100%;
  font-weight:bold;`;

const AddTransaction = styled.button`
       background:#000;
       color:#fff;
       padding:5px 10px;
       border-radius:4px;
       cursor:pointer;
       font-weight:bold;
       font-size:15px;
       `;
  const ExpenseBox = styled.div`
      display:flex;
  flex-direction:column;
  border-radius:4px;
    border:1px solid #e6e8e9;
    padding:15px 20px;
    font-size:14px;
    width:75px;
    & span{
      font-weight:bold;
      font-size:20px;
      color: ${(props)=> props.isIncome ? 'green' : 'red'}
    }
    `;

  

export default function Overview(props) {
    const[isAddVisisble,setAddVisible] = useState(false);
    const handleAddTransact=(e)=>{
            setAddVisible(!isAddVisisble)
       }
  return (
    <Container>
       <BalanceBox>
        Balance : ${props.income - props.expense}
       
       <AddTransaction onClick={handleAddTransact}>{isAddVisisble ? "CANCEL" : "ADD"}</AddTransaction></BalanceBox>
       {
         isAddVisisble && <AddTransactionView setAddVisible={setAddVisible} AddTransaction={props.AddTransaction}/>
       }
       <ExpenseContainer>
             <ExpenseBox isIncome={false}>
              Expense <span>${props.expense}</span>
             </ExpenseBox>
             <ExpenseBox isIncome={true}>
               Income <span>${props.income}</span>
             </ExpenseBox>
       </ExpenseContainer>
    </Container>
  )
}