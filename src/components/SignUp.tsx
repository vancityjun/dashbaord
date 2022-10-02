/* eslint-disable indent */
import React from 'react';
import '../App.scss';

function SignUp() {
    return <>
        <div className='signUp'>
            <div className='divInsideSignIn'>
                <p className='email'>Email</p>
                <input name='email' placeholder='' />
                <p className='pw'>Password</p>
                <input name='pw' placeholder='' type='password' />
                <p className='pwConfirm'>Password confirm</p>
                <input name='pwConfirm' placeholder='' type='password' />
                <div className='agreeDiv'>
                    <p className='agreeTerm'>I agree terms of use</p>
                    <input className='agreeTermCheck' name='agreeTermCheck' type='checkbox' />
                </div>
                <button>Sign up</button>
                <p className='signInPara'>already have an account?<span>sign in</span></p>
            </div>
        </div>
    </>;
}

export default SignUp;
