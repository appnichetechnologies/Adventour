import { getXataClient } from "../../../xata";
const connection = getXataClient();

export default async function add_booking(data) {
	
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
        const user_id = data['user_id'];
        const package_id = data['package_id'];

        const booking = await connection.db.bookings.create(
            {
                Packages: package_id,
		User: user_id
            }
        );

        return {
            'returncode': 200,
            'message': 'Bookings Added',
            'output': booking
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
