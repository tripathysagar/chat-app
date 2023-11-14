export async function GET(request: Request) {
  return Response.json("yo");
}

export async function POST(request: Request) {
  const { username, password } = await request.json();
  return Response.json({
    username,
  });
}
