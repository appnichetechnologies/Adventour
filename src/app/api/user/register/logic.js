import { getXataClient  } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export default async function sign_up(data)
{
    try 
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
            const username = data['username'];
            const email = data['email'];
            const password = data['password'];

            const user_add = await connection.db.users.create({
                UserName: username,
                Email: email,
                Password: password,
                Type: "User",
            });

            return {
                'returncode': 200,
                'message': 'User Registered',
                'output': user_add
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
    catch(error) 
    {
        return {
            'returncode': 500,
            'message': error.message,
            'output': []
        }
    }
}
