import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export default async function add_package(data)
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
        const type = data['type'];
        const destination = data['destination'];
        const activity = data['activity'];
        const accomodations = data['accomodations'];
        const description = data['description'];
        const start_date = data['start_date'];
        const end_date = data['end_date'];
        const price = data['price'];

        const packages = await connection.db.packages.create(
            {
                Name: name,
                Type: type,
                Destination: destination,
                Activity: activity,
                Accomodations: accomodations,
                StartDate: new Date(start_date),
                EndDate: new Date(end_date),
                Price: parseFloat(price),
                Description: description,
            }
        );

        return {
            'returncode': 200,
            'message': 'Package Added',
            'output': packages
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