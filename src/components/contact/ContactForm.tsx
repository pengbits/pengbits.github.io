"use client"

import { FormEvent, FC, useState } from 'react';
import { Stack, Field, Input, Textarea, Button} from '@chakra-ui/react'

type SendMailAttrs = {
  name: string,
  email: string,
  message: string
}

const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const form = e.currentTarget
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries()) as Record<
    keyof SendMailAttrs,
    FormDataEntryValue
  >
  console.log(JSON.stringify(data))

}

export const ContactForm:FC = () => {
  return (
  <form onSubmit={handleSubmit}>
    <Field.Root as="p">
      <Field.Label htmlFor="name">Name</Field.Label>
      <Input size="md" name="name" type="text" placeholder="Enter your name"></Input>
    </Field.Root>
    <Field.Root as="p">
      <Field.Label htmlFor="name">Email</Field.Label>
      <Input size="md"  name="email" type="email" placeholder="Enter your email"></Input>
    </Field.Root>
    <Field.Root as="p">
      <Field.Label htmlFor="message">Message</Field.Label>
      <Textarea name="message" placeholder="Enter a message" />
    </Field.Root>
    <Button as="input" type="submit" value="Send"></Button>
  </form>)
}