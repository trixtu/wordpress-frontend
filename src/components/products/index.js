import { isEmpty } from "lodash";
import Image from "../image";
import { sanitize } from "@/src/utils/miscellaneous";
import Product from "./product";


const Products = ( {products} ) =>  {
  
  if ( isEmpty ( products ) ) {
    return null;
  }

  return (
    
    <div className="flex flex-wrap mx-2 overflow-hidden">
      {products.length ? products.map( product => {
        
        return( 
          <Product key={product?.id} product={product}/>
        )
      } ) : null}
        
    </div>
    
  )
}

export default Products;