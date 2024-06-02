import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export default async function add_accomodation(data)
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
        const name = await data['name'];
        const destination = await data['destination'];
        const description = await data['description'];
        const price = await data['price'];

        const accomodations = await connection.db.accomodations.create(
            {
                Name: name,
                Destination: destination,
                Description: description,
                PricePerNight: parseFloat(price),
            }
        );

        return {
            'returncode': 200,
            'message': 'Accomodation Added',
            'output': accomodations
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