/* eslint-disable indent */
import React, {useEffect, useState} from 'react';
import '../App.scss';
import SignUp from './SignUp';

function Login() {
	const [toSignUP, setToSignUp] = useState(false);
	// eslint-disable-next-line space-before-blocks
	if (toSignUP){
		return <SignUp />;
	}

    return <>
        <div className='logIn'>
			<div className='divInsideLogIn'>
				<p className='inputName'>User name</p>
				<input name='username' placeholder='' />
				<p className='inputName'>Password</p>
				<input name='password' placeholder='' type='password' /><br/>
				<button>Sign in</button>
				<p onClick={() => setToSignUp(true)} className='signUpPara'>Sign up</p>
			</div>
		</div>
    </>;
}

export default Login;
