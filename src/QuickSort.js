import React, { useState, useEffect } from "react";

const QuickSort = () => {
  const initialArray = [5, 8, 3, 1, 6, 9, 2, 4, 7, 10];
  const [array, setArray] = useState([...initialArray]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    if (isSorting) {
      const quickSort = async (arr, left, right) => {
        if (left >= right) {
          return;
        }

        const partition = async (arr, left, right) => {
          const pivot = arr[right];
          let i = left;

          for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
              [arr[i], arr[j]] = [arr[j], arr[i]];
              i++;
            }
          }

          [arr[i], arr[right]] = [arr[right], arr[i]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 300));
          return i;
        };

        const index = await partition(arr, left, right);
        await quickSort(arr, left, index - 1);
        await quickSort(arr, index + 1, right);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      };

      quickSort(array, 0, array.length - 1).then(() => setIsSorting(false));
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

export default QuickSort;
