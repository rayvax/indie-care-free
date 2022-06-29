import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ICFButton from '../../../common/buttons/ICFButton';
import ICFTextInput from '../../../common/forms/ICFTextInput';
import { getIconPath } from '../../../utils/paths/imagePaths';
import { homePagePath, registerPagePath } from '../../../utils/paths/routerPaths';

interface LoginPageProps
{
    setUser: (username: string) => void;
}


function LogInPage({ setUser }: LoginPageProps)
{
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent)
    {
        event.preventDefault();

        setUser('Steve');
        navigate(homePagePath);
    }

    return (
        <div className='login-page account-form'>
            <h1>Log in to your account</h1>
            <div className="account-form-main-content">
                <form onSubmit={ handleSubmit }>
                    <ICFTextInput label='Email' />
                    <ICFTextInput label='Password' type='password' />
                    <div className='actions'>
                        <ICFButton type='submit' content='Log in' />
                        <span className='alternative-action'>or <NavLink to={ registerPagePath }>Create account</NavLink></span>
                    </div>
                </form>
                <span className='separator'>OR</span>
                <div className='other-auth'>
                    <img src={ getIconPath('auth-gmail.png') } alt="gmail auth" />
                    <img src={ getIconPath('auth-facebook.png') } alt="facebook auth" />
                    <img src={ getIconPath('auth-pint.png') } alt="pinterest auth" />
                </div>
            </div>
        </div>
    );
}

export default LogInPage;