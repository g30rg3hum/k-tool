import { Enquiry } from "@/components/emails/enquiry";
import { resend } from "@/lib/consts/resend/resend";

interface PostPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export async function POST(request: Request) {
  let payload: PostPayload;
  try {
    payload = await request.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return new Response("Invalid JSON in request body", { status: 400 });
  }

  const { name, email, subject, message } = payload;

  // validate fields
  if (!name || !email || !subject || !message) {
    return new Response("Missing required fields", { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM ?? "",
      to: process.env.RESEND_EMAIL_TO ?? "",
      subject: subject,
      react: Enquiry({
        name,
        email,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
