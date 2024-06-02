import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient()

async function fetch_activity(data)
{
    try 
    {
        const id = data['id'];

        let activities = await connection.db.activities.filter(
            {
                id: id
            }
        )
        .getAll();

        return {
            'returncode': 200,
            'message': 'Activities Fetched',
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

async function fetch_activities()
{
    try 
    {
        let activities = await connection.db.activities.select(
            [
                'Name',
                'Destination.*',
                'Description',
            ]
        )
        .getAll();

        return {
            'returncode': 200,
            'message': 'Activities Fetched',
            'output': activities
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
    fetch_activity,
    fetch_activities 
}