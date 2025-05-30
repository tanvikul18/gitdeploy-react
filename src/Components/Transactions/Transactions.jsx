import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TransactionCell from './TransactionCell';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 0 10px;
  padding: 10px 20px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;

  & input {
    padding: 10px 20px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 100%;
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 2px;
  align-items: center;
  font-weight: normal;
  width: 100%;
  border: 1px solid #e6e8e9;
  justify-content: space-between;
  border-right: 4px solid ${(props) => (props.isexpense ? 'red' : 'green')};
`;

export default function Transactions(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const[SearchedTransactions,setSearchedTransactions] = useState(props.transactions);
   console.log(SearchedTransactions)
  //Search functionality
  
 const handleSearch=(value)=>{
   const filteredItems = props.transactions.filter((item) =>
    item.payload.Category.toLowerCase().includes(value.toLowerCase())
  );
    setSearchedTransactions(filteredItems)
 }

  //Delete Transaction Functionality
 const handleDeleteTransaction=(Id)=>{ 
    const RemainItems = props.transactions.filter((item,index)=>{      
       return index !== Id;
    })   
    props.Updatetransactions(RemainItems)
    SearchedTransactions(RemainItems)
    props.calculateBalance(RemainItems);
   
  }
 useEffect(()=>{
   handleSearch(searchTerm)
 },[props.transactions])
  return (
    <Container>
      Transaction
      <input
        placeholder="Search"
        type="text"
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value) 
          handleSearch(e.target.value)
        }
        }
      />
      {SearchedTransactions.length > 0 ? (
        SearchedTransactions.map((item, idx) => (
          <TransactionCell
            key={idx}
            payload={item.payload}
            index={idx}
            onDelete={handleDeleteTransaction}
          />
        ))
      ) : (
        <p>No transactions found.</p>
      )}
    </Container>
  );
}
