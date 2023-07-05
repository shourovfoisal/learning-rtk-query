import { useGetAllProductsQuery } from "../features/apiSlice"

export const Data = () => {

  const { data } = useGetAllProductsQuery({});

  return (
    <div>Data</div>
  )
}
