import React, { useState, useEffect } from "react";

const MergeSort = () => {
  const initialArray = [5, 8, 3, 1, 6, 9, 2, 4, 7, 10];
  const [array, setArray] = useState([...initialArray]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    if (isSorting) {
      const mergeSort = async (arr) => {
        if (arr.length <= 1) {
          return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = await mergeSort(arr.slice(0, middle));
        const right = await mergeSort(arr.slice(middle));

        return merge(left, right);
      };

      const merge = async (left, right) => {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
          } else {
            result.push(right[rightIndex]);
            rightIndex++;
          }
        }

        result = result
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
        setArray([...result]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        return result;
      };

      const sort = async () => {
        const sortedArray = await mergeSort(array);
        setArray(sortedArray);
        setIsSorting(false);
      };

      sort();
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
        gSort
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

export default MergeSort;
