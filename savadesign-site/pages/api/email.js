const sgMail = require("@sendgrid/mail");
export default function handler(req, res) {
  const { usersEmail } = JSON.parse(req.body);
  sgMail.setApiKey(process.env.SENDGRID_KEY);
  const msg = {
    to: "dwavebrand@gmail.com", // Change to your recipient
    from: {
      email: "dukidjordjic@gmail.com",
      name: "Savadesign",
    }, // Change to your verified sender
    subject: "Email from Savadesign.net",
    templateId: "d-be9af87220b1471e8882cfdca42f4ea6",
    dynamic_template_data: {
      name: usersEmail.name,
      email: usersEmail.email,
      phoneNumber: usersEmail.phoneNumber,
      message: usersEmail.message,
    },
  };
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ msg: "Email sent", error: false });
    })
    .catch((error) => {
      res.status(200).json({ msg: error, error: true });
    });
}
