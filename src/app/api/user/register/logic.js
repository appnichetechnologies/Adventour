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

            let user = await connection.db.users.filter(
                {
                    Student_Username: username
                }
            )
            .getAll();

            if(user!=undefined || user!=null, user.length!=0)
            {
                return {
                    'returncode': 400,
                    'message': "User account Found, Please Login.",
                    'output': []
                }
            }

            const user_add = await connection.db.users.create({
                UserName: username,
                Email: email,
                Password: password,
                Type: "User",
            });

            return {
                'returncode': 200,
                'message': 'User Registered',
                'output': user
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