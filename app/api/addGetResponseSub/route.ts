export async function POST(req: Request) {

  const { email } = await req.json()

  console.log(email)

  if (!email) new Response(JSON.stringify({ error: "Adres email jest wymagany." }));

  return new Response(
    JSON.stringify({ succes: 'Dziękujemy za zapisanie się na newsletter!' }),
  );

}