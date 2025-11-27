import { defineEventHandler, readBody, createError } from 'h3'

interface ContactPayload {
    name: string
    email: string
    subject: string
    message: string
}

const sendMail = async (_payload: ContactPayload) => {
    return Promise.resolve(true)
}

export default defineEventHandler(async (event) => {
    const body = await readBody<ContactPayload>(event)

    if (!body?.name || !body?.email || !body?.subject || !body?.message) {
        throw createError({ statusCode: 400, statusMessage: 'Requête incomplète' })
    }

    await sendMail(body)

    return { success: true, message: 'Message envoyé' }
})