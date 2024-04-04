import React, {useState} from 'react';
import { redirect } from 'react-router-dom'
const Login = ({mockLogin}) => {
    const [userDetails, setUserDetails] = useState(
        {   user: {userName: '',
                  password: ''},
            redirect: false}
    );
    const handleChange = (e) => {
        var currUserName = e.target.value;
        setUserDetails({user:{userName: currUserName, password: ''}});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        mockLogin(userDetails.user);
        setUserDetails({redirect: true});
    }
    return(
        <div>
            {userDetails.redirect ? 
                <div>
                <p>login successful</p>
                </div>
            :
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>User Name</label>
                            <input type="text" name="userName" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" />
                        </div>
                        <button>Log In</button>
                    </form>
                </div>
            }
        </div>
    )
}
export default Login;