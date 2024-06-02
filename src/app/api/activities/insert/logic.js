import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export default async function add_activities(data)
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
        const name = data['name'];
        const destination = data['destination'];
        const description = data['description'];

        const activities = await connection.db.activities.create(
            {
                Name: name,
                Destination: destination,
                Description: description,
            }
        );

        return {
            'returncode': 200,
            'message': 'Activities Added',
            'output': activities
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