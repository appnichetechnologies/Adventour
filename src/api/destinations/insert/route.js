import { NextResponse } from "next/server";
import destination_add from "./logic";
export async function POST(request)
{
    try 
    {
        const data = await request.formData();
        const result = await destination_add(data);
        return NextResponse.json(
            {
                'returncode': result.returncode,
                'message': result.message,
                'output': result.output
            }
        );
    }
    catch(error) 
    {
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