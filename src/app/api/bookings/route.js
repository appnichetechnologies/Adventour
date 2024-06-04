import { NextResponse } from "next/server";
import add_booking from "./logic";

export async function POST(request){
	
    try 
    {
        const data = await request.json();
        const result = await add_booking(data);
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
