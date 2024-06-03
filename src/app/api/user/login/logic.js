import { getXataClient  } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient();

export default async function sign_in(data)
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
            const password = data['password'];

            let user = await connection.db.users.filter(
                {
                    UserName: username
                }
            )
            .getAll();

            if(user==undefined || user==null)
            {
                return {
                    'returncode': 400,
                    'message': "User account not Found, Please recheck the entered username.",
                    'output': []
                }
            }

            const match = user[0].Password===password;
            if (match)
            {
                // Passwords match
                return {
                    'returncode': 200,
                    'message': 'User Authenticated',
                    'output': user
                }
            }
            else {
                // Passwords don't match
                return {
                    'returncode': 400,
                    'message': 'Incorrect Password',
                    'output': []
                }
            }
        } 
        catch (error) 
        {
            return {
                'returncode': 500,
                'message': error.message,
                'output': []
            }
        }
    } 
    catch (error) 
    {
        return {
            'returncode': 500,
            'message': error.message,
            'output': []
        }
    }
}
