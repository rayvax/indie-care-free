import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ICFButton from '../../../common/buttons/ICFButton';
import ICFCheckbox from '../../../common/forms/ICFCheckbox';
import ICFTextInput from '../../../common/forms/ICFTextInput';
import { homePagePath } from '../../../utils/paths/routerPaths';

interface RegisterageProps
{
    setUser: (username: string) => void;
}

function RegisterPage({ setUser }: RegisterageProps)
{
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent)
    {
        event.preventDefault();

        setUser(username);
        navigate(homePagePath);
    }

    return (
        <div className='register-page account-form'>
            <h1>Create account</h1>
            <form action={ homePagePath } onSubmit={ handleSubmit } className='account-form-main-content'>
                <ICFTextInput
                    type='text'
                    label='Username'
                    name='username'
                    id='username'
                    value={ username }
                    onChange={ (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value) }
                />
                <ICFTextInput type='text' label='Email' name='email' id='email' />
                <ICFTextInput type='password' label='Password' name='email' id='email' />
                <ICFTextInput type='password' label='Repeat password' name='email' id='email' />
                <ICFCheckbox
                    id='terms'
                    onChange={ () => setIsTermsAccepted(!isTermsAccepted) }
                >
                    I accept the <a href='#terms'>Terms of the service</a>
                </ICFCheckbox>
                <ICFButton type='submit' content='Register' disabled={ !isTermsAccepted || username.length <= 0 } />
            </form>
        </div>
    );
}

export default RegisterPage;