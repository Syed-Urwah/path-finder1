import { NextRequest, NextResponse } from "next/server";

import { customAlphabet } from 'nanoid';
import { NextApiResponse } from "next";


export async function GET(req: NextRequest, res: NextApiResponse) {


    try {

        const formHtml = `
        <form action="https://app.usXX.list-manage.com/subscribe/post" method="post">
            <!-- Render form fields based on formData -->
            <input type="text" placeholder="Text Field" />
            <input type="email" placeholder="Email Field" />
            <button type="submit">Submit</button>
        </form>
    `;
        const script = `
        (function() {
            document.write('${formHtml}');
        })();
    `;

    const response = new NextResponse(formHtml, {
        headers: {
            'Content-Type': 'text/html',
            'x-content-edge': 'html'
        }
    });

    return response;


    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }


}



