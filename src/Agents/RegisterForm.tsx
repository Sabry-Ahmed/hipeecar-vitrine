import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
        alert("Passwords do not match!");
        return;
    }

    const username = `${firstName} ${lastName}`.trim(); // Combine first and last name

    const payload: any = {
        username,  // Add username to the payload
        email,
        password,
    };

    // Add optional fields only if they are not empty
    if (lastName) payload.lastName = lastName;
    if (firstName) payload.firstName = firstName;
    if (phone) payload.phone = phone;

    try {
        const response = await fetch('https://strapi-api-tpbf.onrender.com/api/auth/local/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            alert('Account created successfully!');
        } else {
            // Parse the error message from the response
            const errorData = await response.json();
            console.error('Error data:', errorData);
            alert(`Failed to create account: ${errorData.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred: ' + error.message);
    }
};


  return (
    <form onSubmit={submitForm} id="vgroup-Vsection-3" className='Abox-3'>
      <span className='Vtext-19'>
        Créez un compte pour commencer l’aventure
        <br /><br />
      </span>
      <span className='Vtext-1a'>Je suis un :</span>

      <div className='Vgroup'>
        <span className='Vtext-1b'>Particulier</span>
        <span className='Vtext-1c'>Professionnel</span>
        <div>
          <label>
            <input type="radio" name="choice" value="particulier" />
          </label>
          <label className='VtextA-1c'>
            <input type="radio" name="choice" value="professionnel" />
          </label>
        </div>
      </div>

      <div className='Vgroup-2'>
        <span className='Vtext-1d'>Nom</span>
        <span className='Vtext-1e'>Prénom</span>
      </div>
      <div className='Vwrapper-4'>
        <div className='Vwrapper-5'>
          <input
            type="text"
            className='Vtext-1f invisible-input'
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='Vwrapper-6'>
          <input
            type="text"
            className='Vtext-20 invisible-input'
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>
      <div className='Vwrapper-7'>
        <span className='Vtext-21'>E-mail</span>
        <span className='Vtext-22'>Téléphone</span>
      </div>
      <div className='Vwrapper-8'>
        <div className='Vsection-4'>
          <input
            type="email"
            className='Vtext-23 invisible-input'
            placeholder="monemail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='Vbox-4'>
          <input
            type="text"
            className='Vtext-24 invisible-input'
            placeholder="0699999999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className='Vgroup-3'>
        <span className='Vtext-25'>Mot de passe</span>
        <span className='Vtext-26'>Confirmation</span>
      </div>
      <div className='Vwrapper-9'>
        <div className='Vsection-5'>
          <input
            type="password"
            className='Vtext-27 invisible-input'
            placeholder="***************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='Vsection-6'>
          <input
            type="password"
            className='Vtext-28 invisible-input'
            placeholder="***************"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
      </div>
      <div className='Awrapper-b'>
        <button type="submit" className='Atext-2b'>Devenir agent</button>
      </div>
    </form>
  );
};

export default RegisterForm;
