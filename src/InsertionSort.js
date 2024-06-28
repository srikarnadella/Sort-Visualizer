import React, { useState, useEffect } from "react";

const InsertionSort = () => {
  const initialArray = [5, 8, 3, 1, 6, 9, 2, 4, 7, 10];
  const [array, setArray] = useState([...initialArray]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    if (isSorting) {
      const insertionSort = async () => {
        const arr = [...array];
        const len = arr.length;

        for (let i = 1; i < len; i++) {
          let key = arr[i];
          let j = i - 1;

          while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
          }
          arr[j + 1] = key;
          await new Promise((resolve) => setTimeout(resolve, 300));
          setArray([...arr]);
        }
        setIsSorting(false);
      };

      insertionSort();
    }
  }, [isSorting]);

  const resetArray = () => {
    setArray([...initialArray]);
    setIsSorting(true);
  };

  return (
    <div>
      <div style={arrayContainerStyle}>
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              ...barStyle,
              height: `${value * 20}px`,
            }}
          ></div>
        ))}
      </div>
      <button onClick={resetArray} style={buttonStyle}>
        Sort
      </button>
    </div>
  );
};

const arrayContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: "300px",
  marginBottom: "10px",
};

const barStyle = {
  backgroundColor: "lightblue",
  width: "20px",
  margin: "0 2px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "lightblue",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default InsertionSort;
