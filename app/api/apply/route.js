import nodemailer from "nodemailer";

export const runtime = "nodejs";

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

    // FILE VALIDATION
    if (resume && typeof resume === "object") {

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(resume.type)) {

        return Response.json(
          {
            error: "Only PDF and DOC/DOCX files are allowed.",
          },
          {
            status: 400,
          }
        );
      }

      // MAX 5MB
      if (resume.size > 5 * 1024 * 1024) {

        return Response.json(
          {
            error: "Resume file is too large. Maximum is 5MB.",
          },
          {
            status: 400,
          }
        );
      }

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
        process.env.EMAIL_USER,
        "yoursecondemail@gmail.com",
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

    console.log("APPLY ERROR:", error);

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