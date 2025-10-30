"use client"

import { FormEvent, FC, useState } from 'react';
import { Box, Text, Field, Input, Textarea, Button, Flex, Spinner} from '@chakra-ui/react'
import type { SendMailAttrs } from '@/types/SendMail';
import { sendMail } from '@/lib/api';

export const ContactForm:FC = () => {
  const [loading, setLoading] = useState<boolean | null>(false)
  const [error,   setError]   = useState<boolean | null>(null)
  const [success, setSuccess] = useState<boolean | null>(null)

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form      = e.currentTarget
    const formData  = new FormData(form)
    const data      = Object.fromEntries(formData.entries()) as unknown as SendMailAttrs
    submit(data)
  }

  const submit = async (data:SendMailAttrs) => {
    try {
      setError(null)
      setLoading(true)
      
      const res = await sendMail(data)
      if(res.ok) {  
        setSuccess(true)
      } else {
        setSuccess(false)
        setError(res.error)
      }
    } catch (e:any) {
      console.log(e)
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }


  return loading ? (<Flex flexDir="column" justifyContent="center" height="100%">
    <Box textAlign="center" animation="pulse 2s infinite">
      <Spinner size="xl" />
      <Text fontSize="sm">Sending Message...</Text>
    </Box>
  </Flex>
  ) : (
  <Box asChild>
    <form onSubmit={handleSubmit}>
      {error    && <Text as="p" mb="4" fontWeight="bold" borderWidth="2px" borderColor="red.500" p="2.5" color="red.500">{error}</Text>}
      {success  && <Text as="p" mb="4" fontWeight="bold" borderWidth="2px" borderColor="green.600" p="2.5" color="green.600">Your Message has been sent.</Text>}
      <Field.Root as="p" mb="4">
        <Field.Label htmlFor="name">Name</Field.Label>
        <Input required size="md" name="name" type="text" placeholder="Enter your name"></Input>
      </Field.Root>
      <Field.Root as="p" mb="4">
        <Field.Label htmlFor="name">Email</Field.Label>
        <Input required size="md"  name="email" type="email" placeholder="Enter your email"></Input>
      </Field.Root>
      <Field.Root as="div" mb="4">
        <Field.Label htmlFor="message">Message</Field.Label>
        <Textarea required name="message" placeholder="Enter a message"></Textarea>
      </Field.Root>
      <Button as="input" type="submit" width="100%" value="Send"></Button>
    </form>
  </Box>
  )
}