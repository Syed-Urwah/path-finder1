import { NextRequest, NextResponse } from "next/server";

import { customAlphabet } from 'nanoid';
import { NextApiResponse } from "next";


export async function GET(req: NextRequest, res: NextApiResponse) {


    try {

        const formHtml = `
        <form>
            <!-- Render form fields based on formData -->
            <input type="text" placeholder="Text Field" />
            <input type="email" placeholder="Email Field" />
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



