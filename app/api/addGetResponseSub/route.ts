import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const API_KEY = process.env.GETRESPONSE_API_KEY

  const API_URL = 'https://api.getresponse.com/v3/contacts/'

  const data = await req.json()
  //data example { email: 'test@asd.pl', list: '8A' }
  const email = data.email
  const list = data.list

  if (!email) {
    return new Response(JSON.stringify({ error: 'Adres email jest wymagany.' }))
  }

  const req_data = {
    email: email,
    campaign: {
      campaignId: list,
    },
  }
  console.log(req_data)
  const response = await fetch(`${API_URL}`, {
    body: JSON.stringify(req_data),
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': `api-key ${API_KEY}`,
    },
    method: 'POST',
  })

  console.log(response)

  return response
}
