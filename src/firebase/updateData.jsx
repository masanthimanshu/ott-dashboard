import { updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

// Update a document to a Collection
export const updateDocument = async (collectionName, docId, data) => {
  await updateDoc(doc(db, collectionName, docId), {
    ...data,
  });
};
