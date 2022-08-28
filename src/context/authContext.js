import React, { useEffect, createContext, useContext } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  confirmPasswordReset,
} from "firebase/auth";
import auth, { googleProvider } from "../auth/firebase.config";
import { useSelector, useDispatch } from "react-redux";
import { auth as authState } from "../app/store";
import { useNavigate, useLocation } from "react-router-dom";
import {
  setUser,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  resetState,
} from "../features/AuthSlice";
import { getMessage } from "../utils";

const AuthContext = createContext({
  forgotPassword: () => Promise,
  createUser: () => Promise,
  loginUser: () => Promise,
  logoutUser: () => Promise,
  updateUserName: () => Promise,
  sendVerificationMail: () => Promise,
  loginWithGoogle: () => Promise,
  resetPassword: (oobCode, newPassword, continueUrl) => Promise,
});

const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
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
      navigate("/", { state: { from: location }, replace: true });
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
      navigate("/", { state: { from: location }, replace: true });
    } catch (error) {
      dispatch(setError());
      dispatch(setMessage(getMessage(error.code)));
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
      navigate("/", { state: { from: location }, replace: true });
    } catch (error) {
      console.log(error.code);
    } finally {
      dispatch(setLoading(false));
    }
  };
  //> Google Forgot Password
  const forgotPassword = async (values) => {
    const { email } = values;
    dispatch(setLoading(true));
    try {
      await sendPasswordResetEmail(auth, email, {
        url: `${process.env.REACT_APP_ORIGIN}/signin`,
      });
      dispatch(setSuccess());
      dispatch(setMessage(`Open your email & reset your password`));
    } catch (error) {
      dispatch(setError());
      dispatch(setMessage(getMessage(error.code)));
    } finally {
      dispatch(setLoading(false));
    }
  };

  //> Google Reset Password
  const resetPassword = async (oobCode, newPassword, continueUrl) => {
    dispatch(setLoading(true));
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      dispatch(setSuccess());
      dispatch(setMessage(`Password has been updated successfully`));
      navigate("/signin", {
        state: {
          from: location,
        },
        replace: true,
      });
    } catch (error) {
      dispatch(setError());
      dispatch(setMessage(error.code));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const values = {
    forgotPassword,
    createUser,
    loginUser,
    logoutUser,
    updateUserName,
    sendVerificationMail,
    loginWithGoogle,
    resetPassword,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
