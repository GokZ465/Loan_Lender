import { useState, useEffect } from "react";
import { auth, storage, fireStore } from "../fireBaeDateBae/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      console.log(uploadPath);
      const img = await storage.ref(uploadPath).put(thumbnail);
      console.log(img);
      const imgUrl = await img.ref.getDownloadURL();
      console.log(imgUrl);

      await res.user.updateProfile({ displayName, photoURL: imgUrl });

      //craeting user document for uwu
      await fireStore.collection("users").doc(res.user.uid).set({
        online: true,
        displayName,
        photoURL: imgUrl,
      });

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };




  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
