import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient()

async function fetch_package(data)
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

async function fetch_packages()
{
    try 
    {
        let packages = await connection.db.packages.select(
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
            'message': 'Packages Fetched',
            'output': packages
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
    fetch_package,
    fetch_packages
}