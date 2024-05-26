import { NextResponse } from "next/server";
import { fetch_destination, fetch_destinations } from "./logic";

export async function POST(request)
{
    try 
    {
        const data = request.data();
        const result = fetch_destination(data)
        return NextResponse.json(
            {
                'returncode': result.returncode,
                'message': result.message,
                'output': result.output
            }
        )        
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
        )    
    }
}

export async function GET()
{
    try 
    {
    
        const result = fetch_destinations()
        return NextResponse.json(
            {
                'returncode': result.returncode,
                'message': result.message,
                'output': result.output
            }
        )        
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
        )    
    }
}