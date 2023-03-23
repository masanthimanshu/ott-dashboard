import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// Get all the data from a collection
export const getCollectionData = async (collectionName) => {
  const arr = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });

  return arr;
};

// Get all the data from a document
export const getDocumentData = async (collectionName, documentName) => {
  const docRef = doc(db, collectionName, documentName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};
