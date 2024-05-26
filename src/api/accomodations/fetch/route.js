import { NextResponse } from "next/server";
import { fetch_accomodation, fetch_accomodations } from "./logic";

export async function POST(request)
{
    try 
    {
        const data = request.data();
        const result = fetch_accomodation(data)
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
    
        const result = fetch_accomodations()
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