import { useGetAllProductsQuery, useGetProductQuery } from "../features/apiSlice"

export const Data = () => {

  const { data: allProducts, error, isError, isLoading } = useGetAllProductsQuery("");
  const { data: searchedProducts } = useGetProductQuery("iphone");

  console.log("All Products");
  console.log(allProducts);
  console.log("Searched Products");
  console.log(searchedProducts);
  
  if(isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>Data</div>
  )
}
