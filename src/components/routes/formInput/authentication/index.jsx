// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from '../../../../services/firebase';

const Authentication = () => {
  const getUseDocRef = async user => await createUserDocumentFromAuth(user);
  // const getResponse = async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);

  //   return response ? getUseDocRef(response.user) : console.log('no user');
  // };

  // useEffect(() => getResponse, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    getUseDocRef(user);
  };

  return (
    <>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <button onClick={logGoogleUser}>Sign in with Google Pop up</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </div>
      
      </button> */}
    </>
  );
};

export default Authentication;