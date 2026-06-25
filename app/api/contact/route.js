import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = body;

    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASS);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json(
      { success: true },
      { status: 200 }
    );

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        error: error.message || "Email failed",
      },
      {
        status: 500,
      }
    );
  }
}