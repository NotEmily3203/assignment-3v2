import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
const Login = ({mockLogin}) => {
    const [userDetails, setUserDetails] = useState(
        {   user: {userName: '',
                  password: ''},
            redirect: false}
    );
    const handleChange = (e) => {
        setUserDetails((prevState) => ({
            ...prevState,
            user: {userName: e.target.value,
                  password: ''},
        }));
    };
    const navigate = useNavigate();
    const handleRedirect = () => {
        if(userDetails.redirect){
            navigate('/profile');
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserDetails((prevState) => ({
            ...prevState,
            redirect: true,
        }));
        mockLogin(userDetails.user);
    }

    useEffect(() => {
        console.log(userDetails);
        handleRedirect();
    }, [userDetails]);
    return(
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

    )
}
export default Login;