import React, { useEffect, createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import auth, { googleProvider } from "../auth/firebase.config";
import { useSelector, useDispatch } from "react-redux";
import { auth as authState } from "../app/store";
import {
  setUser,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  resetState,
} from "../features/AuthSlice";
import { getMessage } from "../utils";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { isSuccess, isError } = useSelector(authState);
  const dispatch = useDispatch();
  //reset server response//
  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(resetState());
    }, 3000);

    return () => clearTimeout(timeOut);

    // eslint-disable-next-line
  }, [isSuccess === true, isError === true]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        const user = {
          userId: userCred.uid,
          name: userCred.displayName,
          photo: userCred.photoURL,
          isVerified: userCred.emailVerified,
        };
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
    return () => {
      unsubscribe();
    };

    // eslint-disable-next-line
  }, []);

  const createUser = async (values) => {
    dispatch(setLoading(true));
    const { name, email, password } = values;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateUserName(name);
      await sendVerificationMail();
      dispatch(setSuccess());
    } catch (error) {
      dispatch(setError());
      dispatch(setMessage(getMessage(error.code)));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const loginUser = async (values) => {
    dispatch(setLoading(true));
    const { email, password } = values;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(setSuccess());
    } catch (error) {
      dispatch(setError(true));
      dispatch(setMessage(getMessage(error.code)));
      console.log(error.code);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const logoutUser = async () => {
    dispatch(setLoading(true));
    try {
      await signOut(auth);
      dispatch(setSuccess());
      dispatch(setMessage("user logged out"));
    } catch (error) {
      dispatch(setError());
      dispatch(setMessage(error.code));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const updateUserName = (displayName) => {
    return updateProfile(auth?.currentUser, { displayName });
  };

  const sendVerificationMail = () => {
    return sendEmailVerification(auth?.currentUser);
  };

  //> Google sign in with pop up
  const loginWithGoogle = async () => {
    dispatch(setLoading(true));
    try {
      await signInWithPopup(auth, googleProvider);
      dispatch(setSuccess());
    } catch (error) {
      console.log(error.code);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const values = {
    createUser,
    loginUser,
    logoutUser,
    updateUserName,
    sendVerificationMail,
    loginWithGoogle,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
