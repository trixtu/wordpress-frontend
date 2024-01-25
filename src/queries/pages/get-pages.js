
import { PAGES_COUNT } from "@/src/utils/slug";
import { gql } from "@apollo/client";

/**
 * Get Pages
 * 
 */

export const GET_PAGES_URI = gql`
query GET_PAGES_URI {
  pages:pages( first:${PAGES_COUNT}){
    nodes {
      id
      uri
    }
  }
}
`