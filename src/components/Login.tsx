/* eslint-disable indent */
import React from 'react';
import '../App.scss';

function Login() {
    return <>
        <div className='logIn'>
			<div className='divInsideLogIn'>
				<p className='inputName'>User name</p>
				<input name='username' placeholder='' />
				<p className='inputName'>Password</p>
				<input name='password' placeholder='' type='password' /><br/>
				<button>Sign in</button>
				<p className='signUpPara'>Sign up</p>
			</div>
		</div>
    </>;
}

export default Login;
