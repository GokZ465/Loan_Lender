import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
  const [name, setName] = useState("");

  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [tenure, setTenure] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
      tenure,
      interest,
    });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
      setTenure("");
      setInterest("");
    }
  }, [response.success]);

  return (
    <>
      <h3>Personal Loan</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name :</span>
          <input
            type="text"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
        <label>
          <span>Loan Amount :</span>
          <input
            type="number"
            required
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
        </label>
        <label>
          <span>Tenure :</span>
          <input
            type="number"
            required
            onChange={(e) => {
              setTenure(e.target.value);
            }}
            value={tenure}
          />
        </label>
        <label>
          <span>Interest Rate :</span>
          <input
            type="number"
            required
            onChange={(e) => {
              setInterest(e.target.value);
            }}
            value={interest}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addDocument(
//       uid,
//       name,
//       amount,
//     );
//   };

//   // reset the form fields
//   useEffect(() => {
//     if (response.success) {
//       setName("");
//       setAmount("");
//     }
//   }, [response.success]);

//   return (
//     <>
//       <h3>Add a Transaction</h3>
//       <e}
//           />
//         </label>
//         <label>
//           <span>Amount ($):</span>
//           <input
//             type="number"
//             required
//             onChange={(e) => setAmount(e.target.value)}
//             value={amount}
//           />
//         </label>
//         <button>Add Transaction</button>
//       </form>
//     </>
//   );
// }
