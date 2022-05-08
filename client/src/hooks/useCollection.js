import { useEffect, useState, useRef } from "react";
import { fireStore } from "../fireBaeDateBae/config";

import React from "react";

export const useCollection = (collection, _query, _order) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const query = useRef(_query).current;
  const order = useRef(_order).current;

  useEffect(() => {
    let ref = fireStore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }
    if (order) {
      ref = ref.orderBy(...order);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc);
          results.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data");
      }
    );

    return () => unsubscribe();
  }, [collection, query, order]);

  return { documents, error,order };
};
