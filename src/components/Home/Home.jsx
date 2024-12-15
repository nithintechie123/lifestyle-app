import React, { act, useEffect, useState } from 'react'

import { ClipLoader } from 'react-spinners';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import ProductsList from '../ProductsList/ProductsList';
import Categories from '../Categories/Categories';
import basicOps from '../utility/basicOps';


import "./style.css"

import { usePagenation } from '../Context/PaginationContext';


function Home() {
  const [searchInputValue,setSearchInputvalue]=useState("")//search input state
  const [productsData, setProductsData]=useState([]);//products data state
  const [categoriesData, setCategoriesData]=useState([]);//categories data state
  const [category,setCategory]=useState("All categories");//setCategory state 
  const {pageNum,setPageNum,pageSize}=usePagenation();

  //fetching products data
  useEffect(()=>{
    const fetchDataApiCall=async ()=>{
      const response=await fetch("https://fakestoreapi.com/products")
      const productsData=await response.json();
      setProductsData(productsData);
    }
    fetchDataApiCall();
  },[])

  //fetching categories data
  useEffect(()=>{
    const fetCategoriesApiCall=async ()=>{
      const response=await fetch("https://fakestoreapi.com/products/categories")
      const categoriesData=await response.json();
      setCategoriesData(categoriesData);
    }
    fetCategoriesApiCall();
  },[])

    //loader component
    const LoaderExample = () => {
      return (
        <div style={{ textAlign: "center", marginTop: "10%" }}>
          <ClipLoader color="#3498db" size={50} />
        </div>
      );
    };

   

    const object=basicOps(productsData,category,pageSize,pageNum)
    const filteredCategorizedGroupByArr=object.paginatedProducts
    const totalPages=object.totalPages


  return (
    <div className="home-contanier">
      <header className='header-container'>
        <input type="text" placeholder='Search Your Products Here' className='search-input'
        onChange={(e)=>setSearchInputvalue(e.target.value)}
        />
        <Categories categoriesData={categoriesData} setCategory={setCategory} />
      </header>
      <div className='products-container'>
      {filteredCategorizedGroupByArr.length===0? <LoaderExample />:<ProductsList productsData={filteredCategorizedGroupByArr} searchInputValue={searchInputValue}/>}
      </div>
      <div className='pagination-container'>
        <button className='arrow-button' onClick={()=>setPageNum(pageNum-1)} disabled={pageNum==1}>
          <MdKeyboardDoubleArrowLeft />
        </button>
        <div className='page-num'>{pageNum}</div>
        <button className='arrow-button' onClick={()=>setPageNum(pageNum+1)} disabled={pageNum==totalPages}>
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Home