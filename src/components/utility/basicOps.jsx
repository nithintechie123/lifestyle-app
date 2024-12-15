const basicOps=(productsData,category,pageSize,pageNum)=>{

    let filteredCategorizedGroupByArr=productsData
  //filtered the products data based on the current category
  if(category!="All categories"){
    filteredCategorizedGroupByArr=productsData.filter(product=>product.category===category)
  }

  const totalPages=Math.ceil(filteredCategorizedGroupByArr.length/pageSize);

  const startIndex=(pageNum-1)*pageSize;
  const endIndex=startIndex+pageSize;
  const paginatedProducts=filteredCategorizedGroupByArr.slice(startIndex,endIndex);

  return {paginatedProducts,totalPages}

}

export default  basicOps