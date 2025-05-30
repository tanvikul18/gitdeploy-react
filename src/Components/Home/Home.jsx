import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Overview from '../Overview/Overview'
import Transactions from '../Transactions/Transactions'

const Container = styled.div `
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 30px 0 10px;
  width:360px;`;

export default function Home() {
    const[transactions,Updatetransactions]=useState([]);
    const[Expense,UpdateExpense]=useState(0);
    const[Income,UpdateIncome]=useState(0);
    const AddTransaction=(payload)=>{
        const trasactionArray = [...transactions,{payload}];
        Updatetransactions(trasactionArray)
    }
    const calculateBalance=(Items)=>{
      let exp = 0;
      let inc = 0;
      Items.map((item)=>{
         item.payload.Rdovalue === "Expense" ? exp += item.payload.Amount : inc += item.payload.Amount
        
      })
         UpdateExpense(exp);
         UpdateIncome(inc);
    }
    useEffect(()=>{
        calculateBalance(transactions)
    },[transactions])
  return (
    <Container>
      
        <Overview AddTransaction={AddTransaction} expense={Expense} income={Income}/>
         <Transactions transactions={transactions} calculateBalance={calculateBalance} Updatetransactions={Updatetransactions}/>
    </Container>
  )
}
