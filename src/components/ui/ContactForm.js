
import React, { useState } from 'react'

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { sentContactForm } from '@/src/lib/api'


const initValues = { name: '', email: '', message: '' }
const initState = { values: initValues }


export default function ContactForm() {
  const toast = useToast()
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState({})

  const { values, isLoading, error } = state

  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }))

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))

  const onSubmit = async () => {
    if (!values.name || !values.email || !values.message) {
      toast({
        title: 'Completeaza campurile obligatorii (*)',
        status: 'warning',
        duration: 2000,
        position: 'bottom-right',
      })
    }
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }))

    try {
      await sentContactForm(values)
      setTouched({})
      setState(initState)
      toast({
        title: 'Mesajul a fost trimis.',
        status: 'success',
        duration: 2000,
        position: 'bottom-right',
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }))
    }
  }
  return (
    <>
      {error && (
        <Text color={'red.600'} my={4} fontSize={'xl'}>
          {error}
        </Text>
      )}
      <FormControl isRequired isInvalid={touched.name && !values.name} mb={4}>
        <FormLabel>Nume</FormLabel>
        <Input
          bg={'#fff'}
          m={0}
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage fontSize={12} color={'red.600'}>
          Acest câmp este obligatoriu.
        </FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.name && !values.email} mb={4}>
        <FormLabel>E-mail</FormLabel>
        <Input
          type="email"
          name="email"
          bg={'#fff'}
          m={0}
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage fontSize={12} color={'red.600'}>
          Acest câmp este obligatoriu.
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.name && !values.message}
        mb={4}
      >
        <FormLabel>Mesajul tău</FormLabel>
        <Textarea
          type="text"
          bg={'#fff'}
          m={0}
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage fontSize={12} color={'red.600'}>
          Acest câmp este obligatoriu.
        </FormErrorMessage>
      </FormControl>
      <Button 
        colorScheme={'yellow'}
        onClick={onSubmit} 
        isLoading={isLoading ? true : null}
        spinnerPlacement='start'
      >
        Trimite
      </Button>
    </>
  )
}