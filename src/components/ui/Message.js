import React from 'react'
import Date from './Date'
import { Avatar } from '@chakra-ui/react'

const Message = ({comments}) => {

  return (
   

            <section>
                <ul>
                    {
                        comments.nodes.map((comment) => (
                            <li key={comment.id} className="pb-4 border-b">
                                <div className="comment-header flex justify-start items-center">
                                    <Avatar margin={2} size='md' src={comment.author.node.avatar.url }  />
                                        {/* <img src={comment.author.node.avatar.url} width={comment.author.node.avatar.width} height={comment.author.node.avatar.height} className="rounded-full max-w-[50px] mr-4" /> */}
                                    
                                    <div>
                                        <div className="font-bold">
                                            {comment.author.node.name}
                                        </div>
                                        <div className="text-sm">
                                            <Date dateString={comment.date} />
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-body pl-[66px]">
                                    <div dangerouslySetInnerHTML={{ __html: comment.content}}></div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                
            </section>
        
  )
}

export default Message