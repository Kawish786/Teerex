import React, { useEffect, useState } from 'react'
 import Product from '../component/Product';
 import Filter from '../component/Filter';
import './Home.css'



function Home() {

  const [searchQuery, setSearchQuery] = useState("");
  const [data,setData]=useState([]);
  
  const handleSearch=(event)=>{
    setSearchQuery(event.target.value)
  }
  const cardDetails=async()=>{
    const result=await fetch(' https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json ')
    const x=await result.json()
    setData(x)
   
    console.log(x)
}
useEffect(
    ()=>{
      cardDetails()
        
    },[]
);
const handleClick=()=>{
  
  const filtered=data.filter((item)=>item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  setData(filtered) 
}
  
  return (
    <>
        <div className='nav'>
            <div><span id='span'>TeeRex</span></div>
            <div>
                <span id='span1'>Products <i className="bi bi-bag-heart"></i></span>
                <span id='span1'></span>
                             
            </div>
        </div>
        <div className='search'>
                <span id='span1'>Filter</span>
                <span><input onChange={handleSearch} value={searchQuery} type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/></span>
                <button onClick={handleClick} type="search" className="btn btn-outline-dark">Search</button>
        </div>
        <div className='base'>
       <div className='base1'><Filter/></div>
      <div className='base2'><Product data={data} /></div>
    </div>

    </>
        
 
  )
}

export default Home