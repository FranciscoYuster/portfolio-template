"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type FormState = {
  success: boolean
  message: string
}

export async function sendEmail(formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validación básica
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "Por favor, completa todos los campos.",
    }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Contacto Portfolio <${process.env.FROM_EMAIL}>`,
      to: [process.env.TO_EMAIL || process.env.FROM_EMAIL || ""],
      subject: `Mensaje de contacto: ${subject}`,
      reply_to: email,
      text: `
        Nombre: ${name}
        Email: ${email}
        Asunto: ${subject}
        
        Mensaje:
        ${message}
      `,
    })

    if (error) {
      console.error("Error al enviar email:", error)
      return {
        success: false,
        message: "Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.",
      }
    }

    return {
      success: true,
      message: "¡Mensaje enviado con éxito! Te responderé lo antes posible.",
    }
  } catch (error) {
    console.error("Error al enviar email:", error)
    return {
      success: false,
      message: "Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.",
    }
  }
}
