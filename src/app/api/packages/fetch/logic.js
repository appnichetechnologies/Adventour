import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient()

async function fetch_package(data)
{
    try 
    {
        const id = data['id'];

        let packages = await connection.db.packages.filter(
            {
                id: id
            }
        )
        .getAll();

        return {
            'returncode': 200,
            'message': 'Package Fetched',
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

async function fetch_packages()
{
    try 
    {
        let packages = await connection.db.packages.select(
            [
                'Name',
                'Type',
                'StartDate',
                'EndDate',
                'Price',
                'Destination.*',
                'Accomodations.*',
                'Activity.*',
                'Description',
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