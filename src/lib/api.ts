import type { SendMailAttrs } from "@/types/SendMail"
const API_URL = `http://localhost:5000/api/contact`
const SIMULATE_LATENCY = true
const LATENCY_DELAY = 2000

export const sendMail = async (attrs:SendMailAttrs) => {
  const res = await window.fetch(API_URL, {
    method:'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(attrs)
  })
  await new Promise(r => setTimeout(r, SIMULATE_LATENCY ? LATENCY_DELAY : 0))
  return res.json()
}