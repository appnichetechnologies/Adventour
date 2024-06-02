import { NextResponse } from "next/server";

export async function POST(request)
{
    try 
    {
        const data = await request.json();
        
    } 
    catch (error) 
    {
        return NextResponse.json(
            {
                'returncode': 500,
                'message': error.message,
                'output':[]
            },
            {
                status: 500
            }
        );    
    }
} 