import { Button, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";


export default function CommentForm({postId}) {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [alertColor, setAlertColor] = useState('');

  const  handleSubmit = async function(event){
    event.preventDefault();
    setSubmitStatus(true);
    setResponseMessage('Your commenting is being submitted...');
    setAlertColor('bg-yellow-500');


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

        console.log(result);

        setSubmitStatus(true);
        setResponseMessage(result.message);

        if(response.ok) {
            setAlertColor('bg-green-500');
        }
        else {
            setAlertColor('bg-red-500');
        }
  }
  return (
    <>
    <Heading as={'h2'} className="text-2xl pb-4 mb-4 border-b">Lasă un răspuns:</Heading>
    <Text>Adresa ta de email nu va fi publicată. Câmpurile obligatorii sunt marcate cu *</Text>
    <form className="comment-form" onSubmit={handleSubmit}>
        
        <InputGroup marginBottom={6}>
          <InputLeftElement><FaUser color='#fac482' fontSize={20}/></InputLeftElement>
          <Input placeholder='Your Name'  type="text" id="author" name="author" />
        </InputGroup>

        <InputGroup marginBottom={6}>
          <InputLeftElement><MdEmail color='#fac482' fontSize={20}/></InputLeftElement>
          <Input placeholder='Your Email' type="email" id="authorEmail" name="authorEmail" />
        </InputGroup>

        <InputGroup marginBottom={6}>
          <InputLeftElement><FaPencil color='#fac482' fontSize={20}/></InputLeftElement>
          <Textarea paddingLeft={10} rows={4} name="content" id="content"/>
        </InputGroup>
        <Input type="hidden" name="postId" id="postId" value={postId} />

        <Button type="submit" colorScheme={'yellow'}>Submit</Button>
    </form>

    {
        submitStatus && 
        <div className={`${alertColor} py-2 px-4 mt-4 text-slate-100 rounded-md`}>
            {responseMessage}
        </div>
    }
    </>
)
}
