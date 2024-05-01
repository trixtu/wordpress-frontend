import { GET_PRODUCTS_ENDPOINT } from "@/src/utils/constants/endpoints";
import Products from "@/src/components/products";
import axios from "axios";
import Layout from "@/src/components/layout";
import client from "@/src/apollo/client";
import { handleRedirectsAndReturnData } from "@/src/utils/slug";
import { GET_PAGE } from "@/src/queries/pages/get-page";
import { getProductsData } from "@/src/utils/products";



const Magazin = ({data, products}) => {
  console.log(products)
  return (
    <Layout data={data}>
      <Products products={products} />
    </Layout>
  )
}

export default Magazin;

export async function getStaticProps( ) {

  const { data, errors } = await client.query( {
		query: GET_PAGE,
		variables: {
			uri: '/',
		},
	} );

	const { data: products } = await getProductsData(12);



	const defaultProps = {
		props: {
      data: data || {},
			products:products ?? {},
		},
		/**
		 * Revalidate means that if a new request comes to server, then every 1 sec it will check
		 * if the data is changed, if it is changed then it will update the
		 * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
		 */ 
		revalidate: 1,
	};

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'page' );
	
}
