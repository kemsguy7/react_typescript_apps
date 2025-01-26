import React, { useReducer } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { authenticate, User } from './api/authenticate';
import { authorize } from './api/authorize';


function App() {
  const [{ user, permissions, loading }, dispatch] = useReducer(reducer, initialState);

  async function handleSignInClick() {
    dispatch({ type: 'authenticate' });
    const authenticatedUser = await authenticate();
    dispatch({
      type: 'authenticated',
      user: authenticatedUser,
    });
    if (authenticatedUser !== undefined) {
      dispatch({ type: 'authorize' });
      const authorizedPermissions = await authorize(authenticatedUser.id);
      dispatch({
        type: 'authorized',
        permissions: authorizedPermissions,
      });
    }
  }

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <Header user={user} onSignInClick={handleSignInClick} loading={loading} />
      <Main user={user} permissions={permissions} />
    </div>
  );
}

export default App;
