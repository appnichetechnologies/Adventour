import { NextResponse } from "next/server";
import { fetch_package, fetch_packages } from "./logic";

export async function POST(request)
{
    try 
    {
        const data = await request.json();
        const result = await fetch_package(data);
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
    
        const result = await fetch_packages()
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
