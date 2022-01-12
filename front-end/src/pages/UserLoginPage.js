import {useState} from 'react';
import {useHistory} from 'react-router-dom';

export const UserLoginPage = () => {
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const onLoginClicked = async () => {
        alert('Login functionality not implemented yet');
    }
    
    return (
            <div className="content-container">
                <h1>Log in</h1>
                {errorMessage && <div className="fail">{errorMessage}</div>}
                <input placeholder='Email' type='text' onChange={e => setEmail(e.target.value)}
                       value={email}/>
                <input placeholder='Password' type='password' onChange={e => setPassword(e.target.value)}
                       value={password}/>
                <hr/>
                <button disabled={!email || !password} onClick={onLoginClicked}>Log in</button>
                <button onClick={() => history.push('/forgot-password')}>Forgot your password?</button>
                <button onClick={() => history.push('/signup')}>Don't have an account? Sign Up</button>
            </div>
    );
}
