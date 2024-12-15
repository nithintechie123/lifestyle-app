import React from 'react'

import "./style.css"
import { usePagenation } from '../Context/PaginationContext';

function Categories(props) {
    const {categoriesData,setCategory}=props
    const {setPageNum}=usePagenation();
        return (
            <div className='categories-container'>
            <button type="button" className='category-button' onClick={()=>{setCategory ("All categories"),setPageNum(1)}}>All Categories
            </button>
            <ul className='category-wrapper'>
                {categoriesData.map(eachCategory=>{
                return <li key={eachCategory}>
                    <button onClick={()=>{setCategory(eachCategory),setPageNum(1)}} className='category-button'>{eachCategory}</button></li>
                })}
            </ul>
        </div>
        )
}

export default Categories