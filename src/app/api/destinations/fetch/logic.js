import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient()

async function fetch_destination(data)
{
    try 
    {
        const id = data['id'];

        let destinations = await connection.db.accomodations.filter(
            {
                id: id
            }
        )
        .getAll();

        return {
            'returncode': 200,
            'message': 'Destinations Fetched',
            'output': destinations
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

async function fetch_destinations()
{
    try 
    {
        let destinations = await connection.db.destinations.select(
            [
                "Name", 
                "Country", 
                "Region", 
                "Description",
                "Image.*"
            ]
        )
        .getAll();
        return {
            'returncode': 200,
            'message': 'Destinations Fetched',
            'output': destinations
        };
    } 
    catch(error) 
    {
        return {
            'returncode': 500,
            'message': error.message,
            'output': []
        };
    }
}

export {
    fetch_destination,
    fetch_destinations
}