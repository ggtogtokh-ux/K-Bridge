import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const ADMIN_EMAIL = 'km.bridge.26@gmail.com'

export async function POST(request) {
  try {
    const body = await request.json()
    const { type, ...data } = body

    let subject = ''
    let html = ''

    if (type === 'contact') {
      subject = `Холбоо барих хүсэлт — ${data.name}`
      html = `
        <h2>Шинэ мессеж</h2>
        <p><b>Нэр:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email || '—'}</p>
        <p><b>Утас:</b> ${data.phone || '—'}</p>
        <p><b>Мессеж:</b></p>
        <p>${data.message}</p>
      `
    } else if (type === 'hospital') {
      subject = `Эмнэлэг захиалга — ${data.hospital}`
      html = `
        <h2>Эмнэлэг захиалга</h2>
        <p><b>Эмнэлэг:</b> ${data.hospital}</p>
        <p><b>Тасаг:</b> ${data.department || '—'}</p>
        <p><b>Нэр:</b> ${data.name}</p>
        <p><b>Утас:</b> ${data.phone}</p>
        <p><b>Email:</b> ${data.email || '—'}</p>
        <p><b>Огноо:</b> ${data.date || '—'}</p>
        <p><b>Нэмэлт мэдээлэл:</b> ${data.message || '—'}</p>
      `
    } else if (type === 'hostel') {
      subject = `Hostel захиалга — ${data.name}`
      html = `
        <h2>Hostel захиалга</h2>
        <p><b>Нэр:</b> ${data.name}</p>
        <p><b>Утас:</b> ${data.phone}</p>
        <p><b>Email:</b> ${data.email || '—'}</p>
        <p><b>Ирэх огноо:</b> ${data.checkIn}</p>
        <p><b>Гарах огноо:</b> ${data.checkOut}</p>
        <p><b>Хүний тоо:</b> ${data.guests}</p>
        <p><b>Нэмэлт:</b> ${data.message || '—'}</p>
      `
    }

    const { error } = await resend.emails.send({
      from: 'Gyeongcheong <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      subject,
      html,
    })

    if (error) return NextResponse.json({ error }, { status: 400 })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
