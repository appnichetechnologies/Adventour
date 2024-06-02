import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export default async function destination_add(data)
{
    if (connection == undefined || connection == null) 
    {
        return {
            'returncode': 404,
            'message': "Connection With Xata wasn't established.",
            'output': []
        }
    }
    
    try 
    {
        const file = data.get('image');
        const name = data.get('name');
        const country = data.get('country');
        const region = data.get('region');
        const description = data.get('description');


        const result = await connection.db.destinations.create(
        {
            Name: name,
            Country: country,
            Region: region,
            Description: description,
        });


        await connection.files.upload({
            table: 'destinations', 
            column: 'Image', 
            record: result.id 
        }, file);

        return {
            'returncode': 200,
            'message': "Destination Added.",
            'output': result
        }
    } 
    catch(error) 
    {
        return {
            'returncode': 500,
            'message': error.message,
            'output': []
        }
    }
}