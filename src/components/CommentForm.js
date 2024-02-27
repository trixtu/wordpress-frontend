import { Alert, AlertIcon, Button, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";


export default function CommentForm({postId}) {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [alertColor, setAlertColor] = useState('error');

  const  handleSubmit = async function(event){
    event.preventDefault();
    setSubmitStatus(true);
    setResponseMessage('Your commenting is being submitted...');
    setAlertColor('warning');


    let data = {
      author: event.target.author.value,
      authorEmail: event.target.authorEmail.value,
      content: event.target.content.value.replace(/\n/g, "\\n"),
      postId: event.target.postId.value,
  };

    const jsonData = JSON.stringify(data);

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: jsonData,
    });

    const result = await response.json();

      

        setSubmitStatus(true);
        setResponseMessage(result.message);

        if(response.ok) {
            setAlertColor('success');
        }
        else {
            setAlertColor('error');
        }
  }
  return (
    <>
    <Heading as={'h2'} className="text-2xl pb-4 mb-4 border-b">Lasă un răspuns:</Heading>
    <Text>Adresa ta de email nu va fi publicată. Câmpurile obligatorii sunt marcate cu *</Text>
    <form className="comment-form" onSubmit={handleSubmit}>
        
        <InputGroup marginBottom={6}>
          <InputLeftElement><FaUser color='#fac482' fontSize={20}/></InputLeftElement>
          <Input placeholder='Your Name'  type="text" id="author" name="author" required/>
          <InputRightElement>*</InputRightElement>
        </InputGroup>

        <InputGroup marginBottom={6}>
          
          <InputLeftElement><MdEmail color='#fac482' fontSize={20}/></InputLeftElement>
          <Input placeholder='Your Email' type="email" id="authorEmail" name="authorEmail" required/>
          <InputRightElement>*</InputRightElement>
        </InputGroup>

        <InputGroup marginBottom={6} >
          <InputLeftElement><FaPencil color='#fac482' fontSize={20}/></InputLeftElement>
          <Textarea paddingLeft={10} rows={4} name="content" id="content" isRequired/>
          <InputRightElement>*</InputRightElement>
        </InputGroup>
        <Input type="hidden" name="postId" id="postId" value={postId} />

        <Button type="submit" colorScheme={'yellow'}>Publică comentariul</Button>
    </form>

    {
        submitStatus && 
        <Alert marginY={2} status={`${alertColor}`}>
          <AlertIcon />
            {responseMessage}
        </Alert>
    }
    </>
)
}
