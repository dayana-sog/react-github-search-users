import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
  } = useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && <h4>Welcome, <strong>{user.name}</strong></h4>}

      {isUser ? (
        <button onClick={() => { logout({ returnTo: window.location.origin }) }}>
          logout
        </button>
      ) : (
          <button onClick={loginWithRedirect}>
            login
          </button>
        )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-grey-10);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 2px solid var(--border-color);

  h4 {
    margin-bottom: 0;
    font-weight: 400;
    
    strong {
      color: var(--border-color);
    }
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--border-color);
  }
  
  button {
      color: var(--border-color);
      background: var(--clr-grey-10);
      border: 1px solid var(--border-color);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--border-color);
        color: var(--clr-white);
      }
    }
`;

export default Navbar;
