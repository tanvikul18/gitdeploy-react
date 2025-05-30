import React, { useState } from 'react'
import styled from 'styled-components'
const AddTransactionContainer = styled.div`
       display:flex;
  flex-direction:column;
  border:1px solid #e6e8e9;
  gap:10px;
  padding:15px 20px;
  margin:10px 20px;
  width:100%;
  & input{
    outline:none;
    padding:10px 12px;
    border-radius:4px;
    border:1px solid #e6e8e9;
  }
  `;
const RadioButton = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  align-items:center;
  & input{
    cursor:pointer;
     width: unset;
     margin:0 10px;
    }
  `;
       
const AddTransaction = styled.button`
       background:#000;
       color:#fff;
       padding:5px 10px;
       border-radius:4px;
       cursor:pointer;
       font-weight:bold;
       font-size:15px;
       `;
const ErrorMessage = styled.span`
    color:red;
    font-size:11px;
    font-weight:bold;
`;
export default function AddTransactionView(props) {
  const[Amount,setAmount]=useState('');
  const[Date,setDate]=useState('');
  const[Desc,setDesc]=useState('');
  const[Category,setCategory]=useState('');
  const[Rdovalue,setRdovalue]=useState('Expense');
  const[ID,setID]=useState(0)
  const[ErrMsg,setErrMsg]=useState("");
  const[isErrA,showisErrA]=useState(false)
   const[isErrB,showisErrB]=useState(false)
     const[isErrC,showisErrC]=useState(false)
  const[Transactions,setAddTransactions]=useState([])
  let CountIndx=0;
  const handleAmount=(e)=>{
     setAmount(e.target.value)
  }
  const handleDate=(e)=>{
     setDate(e.target.value)
  }
  const handleCategory=(e)=>{
     const re = /^[A-Za-z]+$/;
     const value=e.target.value;
    if (value === "" || re.test(value)) {
     setCategory(value)
           showisErrA(false)
    }
     else{
      showisErrA(true)
        setErrMsg("Please enter Alplhabets only!!")
     }
  }
   const handleDesc=(e)=>{
      const re = /^[A-Za-z]+$/;
     const value=e.target.value;
    if (value === "" || re.test(value)) {
        showisErrB(false)
     setDesc(value)
    }
     else{
       showisErrB(true)
        setErrMsg("Please enter Alplhabets only!!")
     }
  }

  const handleAddTransaction=()=>{  
      
      if(Amount == "" || Date == "" || Category == "" || Desc == ""){
        showisErrC(true)
        setErrMsg("Please fill in all the details and then click on Add")
      }
      else{
      showisErrC(false)
      props.AddTransaction({Amount:Number(Amount),Date,Category:String(Category),Desc:String(Desc),Rdovalue})
    //  setAddTransactions([...Transactions,{Amount,Date,Category,Desc,Rdovalue}])
      setAmount("")
      setCategory("")
      setDate("")
      setDesc("")
      props.setAddVisible();
      }
    
  }
  const handleRdoClicked=(e)=>{
         setRdovalue(e.target.value)
  }
 
  return (
    <AddTransactionContainer>
        <input type="number" placeholder='Enter Amount' value={Amount} onChange={handleAmount}/>
         <input type="date" placeholder='Enter Date' value={Date} onChange={handleDate}/>
          <input type="text" placeholder='Enter Category' value={Category} onChange={handleCategory}/>
          {
            isErrA && <ErrorMessage>{ErrMsg}</ErrorMessage>
          }
          <input type="text" placeholder='Enter Description' value={Desc} onChange={handleDesc}/>
            {
             isErrB && <ErrorMessage>{ErrMsg}</ErrorMessage>
          }
          <RadioButton>
                <input type="radio" id="expense" name="rdotrnsacttype" value="Expense" onChange={handleRdoClicked} checked={Rdovalue === "Expense"}/>
                <label htmlFor='expense'>Expense</label>
                <input type="radio" id="income" name="rdotrnsacttype" value="Income" onChange={handleRdoClicked} checked={Rdovalue === "Income"}/>
                <label htmlFor='income'>Income</label>
          </RadioButton>
          <AddTransaction onClick={handleAddTransaction}>Add Transaction</AddTransaction>
          {
             isErrC && <ErrorMessage>{ErrMsg}</ErrorMessage>
          }
          
         
    </AddTransactionContainer>
  )
}
