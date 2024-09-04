import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import { NextApiResponse } from "next";

const prisma = new PrismaClient();

interface Answer {
    ans: string;
    img?: string | null;
  }
  
  interface Option {
    type: number;
    question: string;
    answers: Answer[];
  }
  
  interface MainData {
    product_name: string;
    description: string;
    image?: string;
  }
  
  interface RequestBody {
    mainData: MainData;
    options: Option[];
  }

  export async function POST(req: NextRequest, res: NextApiResponse) {
    try {
        // Log raw request body
        const rawBody = await req.text();
        console.log('Raw request body:', rawBody);

        // Parse the request body as a JSON object
        const body = JSON.parse(rawBody); // use JSON.parse here instead of req.json()
        const { mainData, options }: RequestBody = body;

        // Create a new product with its options and answers
        const products = await prisma.product.create({
            data: {
              productName: mainData.product_name,
              description: mainData.description,
              image: mainData.image,
              options: {
                create: options.map((option) => ({
                  type: option.type,
                  question: option.question,
                  answers: {
                    create: option.answers.map((answer) => ({
                      ans: answer.ans,
                      img: answer.img || null,
                    })),
                  },
                })),
              },
            },
          });

        return NextResponse.json(products);
    } catch (error) {
        console.error('Failed to create product:', error);
        return NextResponse.json({error: 'Failed to create product'});
    }
}



export async function GET(req: NextRequest,res: NextApiResponse) {
    try {
        const products = await prisma.product.findMany({
            include: {
              options: {
                include: {
                  answers: true,
                },
              },
            },
          });
      
         return NextResponse.json(products);

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'An error occurred' });
    } finally {
        await prisma.$disconnect(); // Ensure Prisma is disconnected properly
    }
}
