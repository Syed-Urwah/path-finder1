import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        // Fetch users from the database using Prisma
        const users = await prisma.user.findMany();

        // If you want to return the users as JSON
        return NextResponse.json(users);

        // Alternatively, if you want to render them in a form
        const formHtml = `
            <form action="https://app.usXX.list-manage.com/subscribe/post" method="post">
                <!-- Render form fields based on formData -->
                <input type="text" placeholder="Text Field" />
                <input type="email" placeholder="Email Field" />
                <button type="submit">Submit</button>
            </form>
        `;

        const response = new NextResponse(formHtml, {
            headers: {
                'Content-Type': 'text/html',
                'x-content-edge': 'html'
            }
        });

        return response;

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'An error occurred' });
    } finally {
        await prisma.$disconnect(); // Ensure Prisma is disconnected properly
    }
}
