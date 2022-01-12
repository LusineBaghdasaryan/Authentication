import {useState} from 'react';
import {useHistory} from 'react-router-dom';

export const UserSignupPage = () => {
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const onSignupClicked = async () => {
        alert('Signup functionality not implemented yet');
    }
    
    return (
            <div className="content-container">
                <h1>Sign up</h1>
                {errorMessage && <div className="fail">{errorMessage}</div>}
                <input placeholder='Email' type='text' onChange={e => setEmail(e.target.value)}
                       value={email}/>
                <input placeholder='Password' type='password' onChange={e => setPassword(e.target.value)}
                       value={password}/>
                <input placeholder='Confirm password' type='password' onChange={e => setConfirmPassword(e.target.value)}
                       value={confirmPassword}/>
                <hr/>
                <button disabled={!email || !password || password !== confirmPassword} onClick={onSignupClicked}>Sign up</button>
                <button onClick={() => history.push('/signup')}>Already have an account? Log in</button>
            </div>
    );
}
