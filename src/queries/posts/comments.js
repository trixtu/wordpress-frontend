import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment(
    $author: String = "", 
    $authorEmail: String = "", 
    $clientMutationId: String = "", 
    $commentOn: Int = 10, 
    $content: String = "") {
    createComment(
      input: {
        author: $author, 
        authorEmail: $authorEmail, 
        clientMutationId: $clientMutationId, 
        commentOn: $commentOn, 
        content: $content
      }
    )
  }
`