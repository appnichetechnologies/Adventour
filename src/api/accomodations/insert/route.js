import { NextResponse } from "next/server";
import add_accomodation from "./logic";

export async function POST(request)
{
    try 
    {
        const data = request.json();
        const result = add_accomodation(data);
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