import { NextResponse } from "next/server";
import sign_up from "./logic";

export async function POST(request) {
    try {
        const data = await request.json();
        const result = await sign_up(data);
        return NextResponse.json(
            {
                'returncode': result.returncode,
                'message': result.message,
                'output': result.output
            }
        );


    }
    catch (error) {
        return NextResponse.json(
            {
                'returncode': 500,
                'message': error.message,
                'output': []
            },
            {
                status: 500
            }
        );
    }
} 
