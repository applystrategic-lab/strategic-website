import nodemailer from "nodemailer";

export async function POST(req) {
  try {

    const formData = await req.formData();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const country = formData.get("country");
    const position = formData.get("position");
    const experience = formData.get("experience");

    const resume = formData.get("resume");

    let attachments = [];

    if (resume && typeof resume === "object") {

      const bytes = await resume.arrayBuffer();

      const buffer = Buffer.from(bytes);

      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: [
    "applystrategic@gmail.com",
    "japanjobsstrategic@gmail.com",
  ],

      subject: `New Job Application - ${fullName}`,

      html: `
        <div style="font-family: Arial; padding:20px;">
          <h2>New Applicant</h2>

          <p><strong>Full Name:</strong> ${fullName}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Preferred Country:</strong> ${country}</p>

          <p><strong>Position Applied:</strong> ${position}</p>

          <p><strong>Experience:</strong></p>

          <p>${experience}</p>
        </div>
      `,

      attachments,
    });
     return Response.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        error: "Failed to send application",
      },
      {
        status: 500,
      }
    );
  }
}