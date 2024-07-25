import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});


const pathDist = '/tmp'; // Use /tmp for temporary file storage in serverless environments

export async function POST(req) {
    try {
        console.log('Handling form submission');
        const formData = await req.formData();
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const reason = formData.get('reason');
        const message = formData.get('message');

        const address = formData.get('address');

        console.log('Received form data:', { firstName, lastName, email, phone, reason, message, address });



        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.SUBMISSION_EMAIL,
            replyTo: email,
            subject: `New contact form submission from ${firstName} ${lastName || ''}`,
            text: `You have received a new message from your website contact form.\n\n` +
                `Here are the details:\n\n` +
                `Name: ${firstName} ${lastName || ''}\n` +
                `Email: ${email}\n` +
                `${phone ? `Phone: ${phone}\n` : ''}` +
                `Address: ${address}\n\n` +
                `Reason: ${reason}\n\n` +


                `Message:\n${message}`,
        };

        console.log('Mail options:', mailOptions);

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');



        return NextResponse.json({ message: 'Submission successful' });
    } catch (error) {
        console.error('Error processing submission:', error.message); // Log the error to the console
        return NextResponse.json({ error: 'Error sending email: ' + error.message }, { status: 500 });
    }
}
