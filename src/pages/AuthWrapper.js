import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Lottie from 'lottie-react-web';
import loadingGif from '../images/loading.json';
import styled from 'styled-components';

function AuthWrapper({ children }) {
  const {
    isLoading,
    error,
  } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <Lottie
          width="80%"
          options={{
            animationData: loadingGif,
            loop: true,
          }}
        />
      </Wrapper>
    );
  }
  if (error) {
    return <Wrapper>Oops... {error.message}</Wrapper>;
  }
  return <>{children}</>;
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
