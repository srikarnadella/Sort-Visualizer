import React, { useState, useEffect } from "react";

const BubbleSort = ({ customArray }) => {
  const initialArray = customArray || [5, 8, 3, 1, 6, 9, 2, 4, 7, 10];
  const [array, setArray] = useState([...initialArray]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    setArray([...initialArray]);
  }, [customArray]);

  useEffect(() => {
    if (isSorting) {
      const bubbleSort = async () => {
        const arr = [...array];
        const len = arr.length;

        for (let i = 0; i < len - 1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              await new Promise((resolve) => setTimeout(resolve, 300));
              setArray([...arr]);
            }
          }
        }
        setIsSorting(false);
      };

      bubbleSort();
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
        Replay Sort
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

export default BubbleSort;
