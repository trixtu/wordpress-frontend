
import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import {HeaderFooter} from "../get-menus";
import SeoFragment from "../fragments/seo";
import PostFragment from "../fragments/post";
import ImageFragment from "../fragments/image";

export const GET_PAGE = gql`
	query GET_PAGE($uri: String) {
      ${HeaderFooter}
			
	  page: pageBy(uri: $uri) {
	    id
	    title
	    content
	    slug
	    uri
	    seo {
          ...SeoFragment
        }
	  }
		blogs: 
		posts(first: 10) {
			edges {
				node {
					slug
					title(format: RENDERED)
					author {
						node {
							id
							name
							lastName
							firstName
						}
					}
					date
					excerpt
					id
					featuredImage {
						node {
							sourceUrl
							altText
							mediaType
						}
					}
					commentCount
					commentStatus
				}
			}
		}
	}
	${MenuFragment}
	${SeoFragment}
`;

export const GET_PAGE_BY_ID = gql`
	query GET_PAGE_BY_ID($id: ID!) {
		${HeaderFooter}
	  page(idType: DATABASE_ID, id: $id) {
	    id
	    title
	    content
	    slug
	    uri
	    seo {
          ...SeoFragment
        }
		status
	  }
	}
	${MenuFragment}
	${SeoFragment}
	
`;