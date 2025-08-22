import { profile } from "../profileData";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const personId = parseInt(id);
  const person = profile.find((p) => p.id === personId);
  return Response.json(person);
}
