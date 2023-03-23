import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { db } from "../firebase";

// Update a document to a Collection
export const updateDocument = async (collectionName, docId, data) => {
  const res = await updateDoc(doc(db, collectionName, docId), {
    ...data,
  });

  return res;
};

// Update arrays of a Collection
export const updateArray = async (collectionName, docId, key, data) => {
  const res = await updateDoc(doc(db, collectionName, docId), {
    [key]: arrayUnion(data),
  });

  return res;
};
