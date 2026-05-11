import nodemailer from "nodemailer";

export async function POST(req) {
  try {

    const formData = await req.formData();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const experience = formData.get("experience");
    const message = formData.get("message");

    const resume = formData.get("resume");

    // PASSPORT FILE
    const passport = formData.get("passport");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let attachments = [];

    // RESUME ATTACHMENT
    if (resume && typeof resume === "object") {

      const bytes = await resume.arrayBuffer();

      const buffer = Buffer.from(bytes);

      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    // PASSPORT ATTACHMENT
    if (passport && typeof passport === "object") {

      const bytes = await passport.arrayBuffer();

      const buffer = Buffer.from(bytes);

      attachments.push({
        filename: passport.name,
        content: buffer,
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject: `New Job Application - ${position}`,

      html: `
        <h2>New Applicant</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Position Applied:</strong> ${position}</p>

        <p><strong>Experience:</strong> ${experience}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>

        <p><strong>Resume:</strong> Attached</p>

        <p><strong>Passport Copy:</strong> Attached</p>
      `,

      attachments,
    });

    return Response.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.log("APPLY ERROR:", error);

    return Response.json(
      {
        error: error.message || "Failed to submit application.",
      },
      {
        status: 500,
      }
    );
  }
}