import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient()

async function fetch_accomodation(data)
{
    try 
    {
        const id = data['id'];

        let accomodation = await connection.db.accomodations.filter(
            {
                id: id
            }
        )
        .getAll();

        return {
            'returncode': 200,
            'message': 'Accomodation Fetched',
            'output': accomodation
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

async function fetch_accomodations()
{
    try 
    {
        let accomodation = await connection.db.accomodations.select(
            [
                'Name',
                'Destination.*',
                'Description',
                'PricePerNight',
            ]
        )
        .getAll();

        return {
            'returncode': 200,
            'message': 'Accomodation Fetched',
            'output': accomodation
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
    fetch_accomodation,
    fetch_accomodations
}