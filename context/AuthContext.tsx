"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc } from "firebase/firestore";

const AuthContext = createContext("");

export function useAuth() {
  return useContext(AuthContext);
}

type AuthProviderProps = {
  children: ReactNode;
  value: any;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDataObject, setUserDataObject] = useState({});
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setUserDataObject({});
    setCurrentUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(auth, async (user) => {
      try {
        setLoading(true);
        setCurrentUser(user);
        if (!user) {
          return;
        }
        console.log("Fetching user data from firebase...");
        const docRef = doc(db, "users", user.uid);
        const docSnap = await docRef.get(docRef);
        let firebaseData = {};
        if (docSnap.exists()) {
          console.log("Found user data in firebase.");
          firebaseData = docSnap.data();
          console.log(firebaseData);
        }
        setUserDataObject(firebaseData);
      } catch (err: any) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userDataObject,
    signup,
    logout,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
