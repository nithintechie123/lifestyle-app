const basicOps=(productsData,category,pageSize,pageNum,sortProductsArr)=>{

  let filterdSortedProductsArr=productsData;
  //arranging the product in asce and desc
  if(sortProductsArr!=0){
    if (sortProductsArr==1){
      filterdSortedProductsArr=filterdSortedProductsArr.sort(incComparator)
    }else{
      filterdSortedProductsArr=filterdSortedProductsArr.sort(decComparator)
    }
  }

    let filteredCategorizedGroupByArr=filterdSortedProductsArr
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

//helper function to compare product price in ascending order
function incComparator(product1,product2){
  if(product1.price > product2.price){
    return 1
  }else{
    return -1
  }
}

//helper function to compare product price in descending order
function decComparator(product1,product2){
  if(product1.price < product2.price){
    return 1
  }else{
    return -1
  }
}


export default  basicOps