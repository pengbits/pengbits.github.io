"use client"

import { FormEvent, FC, useState } from 'react';
import { Stack, Field, Input, Textarea, Button} from '@chakra-ui/react'
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
    const data      = Object.fromEntries(formData.entries()) as Record<
      keyof SendMailAttrs,
      FormDataEntryValue
    > as SendMailAttrs
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
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }


  return (
  <form onSubmit={handleSubmit}>
    {loading && <p>loading...</p>}
    <Field.Root as="p">
      <Field.Label htmlFor="name">Name</Field.Label>
      <Input size="md" name="name" type="text" placeholder="Enter your name"></Input>
    </Field.Root>
    <Field.Root as="p">
      <Field.Label htmlFor="name">Email</Field.Label>
      <Input size="md"  name="email" type="email" placeholder="Enter your email"></Input>
    </Field.Root>
    <Field.Root as="div">
      <Field.Label htmlFor="message">Message</Field.Label>
      <Textarea name="message" placeholder="Enter a message"></Textarea>
    </Field.Root>
    <Button as="input" type="submit" value="Send"></Button>
  </form>)
}