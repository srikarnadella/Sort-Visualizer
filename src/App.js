import React from "react";
import BubbleSort from "./BubbleSort";
import SelectionSort from "./SelectionSort";
import InsertionSort from "./InsertionSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";

const App = () => {
  return (
    <div style={appStyle}>
      <h1 style={headerStyle}>Sorting Algorithm Visualizer</h1>
      <div style={containerStyle}>
        <div style={sortContainerStyle}>
          <h2>Bubble Sort</h2>
          <BubbleSort />
          <p style={infoStyle}>
            Bubble Sort is a simple sorting algorithm that repeatedly steps
            through the list, compares adjacent elements, and swaps them if they
            are in the wrong order. The pass through the list is repeated until
            the list is sorted.
          </p>
          <p style={metricsStyle}>
            <strong>Time Complexity:</strong> O(n²)
            <br />
            <strong>Space Complexity:</strong> O(1)
            <br />
            <strong>Best Case:</strong> O(n)
            <br />
            <strong>Worst Case:</strong> O(n²)
            <br />
            <strong>Average Case:</strong> O(n²)
            <br />
            <strong>Stable:</strong> Yes
          </p>
        </div>
        <div style={sortContainerStyle}>
          <h2>Selection Sort</h2>
          <SelectionSort />
          <p style={infoStyle}>
            Selection Sort is an in-place comparison sorting algorithm. It has
            an O(n²) time complexity, making it inefficient on large lists, and
            generally performs worse than the similar insertion sort.
          </p>
          <p style={metricsStyle}>
            <strong>Time Complexity:</strong> O(n²)
            <br />
            <strong>Space Complexity:</strong> O(1)
            <br />
            <strong>Best Case:</strong> O(n²)
            <br />
            <strong>Worst Case:</strong> O(n²)
            <br />
            <strong>Average Case:</strong> O(n²)
            <br />
            <strong>Stable:</strong> No
          </p>
        </div>
        <div style={sortContainerStyle}>
          <h2>Insertion Sort</h2>
          <InsertionSort />
          <p style={infoStyle}>
            Insertion Sort is a simple sorting algorithm that builds the final
            sorted array one item at a time. It is much less efficient on large
            lists than more advanced algorithms such as quicksort, heapsort, or
            merge sort.
          </p>
          <p style={metricsStyle}>
            <strong>Time Complexity:</strong> O(n²)
            <br />
            <strong>Space Complexity:</strong> O(1)
            <br />
            <strong>Best Case:</strong> O(n)
            <br />
            <strong>Worst Case:</strong> O(n²)
            <br />
            <strong>Average Case:</strong> O(n²)
            <br />
            <strong>Stable:</strong> Yes
          </p>
        </div>
        <div style={sortContainerStyle}>
          <h2>Merge Sort</h2>
          <MergeSort />
          <p style={infoStyle}>
            Merge Sort is an efficient, stable, comparison-based, divide and
            conquer sorting algorithm. Most implementations produce a stable
            sort, meaning that the implementation preserves the input order of
            equal elements in the sorted output.
          </p>
          <p style={metricsStyle}>
            <strong>Time Complexity:</strong> O(n log n)
            <br />
            <strong>Space Complexity:</strong> O(n)
            <br />
            <strong>Best Case:</strong> O(n log n)
            <br />
            <strong>Worst Case:</strong> O(n log n)
            <br />
            <strong>Average Case:</strong> O(n log n)
            <br />
            <strong>Stable:</strong> Yes
          </p>
        </div>
        <div style={sortContainerStyle}>
          <h2>Quick Sort</h2>
          <QuickSort />
          <p style={infoStyle}>
            Quick Sort is an efficient, in-place, comparison-based, divide and
            conquer sorting algorithm. It works by selecting a 'pivot' element
            from the array and partitioning the other elements into two
            sub-arrays, according to whether they are less than or greater than
            the pivot.
          </p>
          <p style={metricsStyle}>
            <strong>Time Complexity:</strong> O(n log n)
            <br />
            <strong>Space Complexity:</strong> O(log n)
            <br />
            <strong>Best Case:</strong> O(n log n)
            <br />
            <strong>Worst Case:</strong> O(n²)
            <br />
            <strong>Average Case:</strong> O(n log n)
            <br />
            <strong>Stable:</strong> No
          </p>
        </div>
      </div>
      <div style={tableContainerStyle}>
        <h2>Comparison Table</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Time Complexity</th>
              <th>Space Complexity</th>
              <th>Stability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bubble Sort</td>
              <td>O(n²)</td>
              <td>O(1)</td>
              <td>Stable</td>
            </tr>
            <tr>
              <td>Selection Sort</td>
              <td>O(n²)</td>
              <td>O(1)</td>
              <td>Not Stable</td>
            </tr>
            <tr>
              <td>Insertion Sort</td>
              <td>O(n²)</td>
              <td>O(1)</td>
              <td>Stable</td>
            </tr>
            <tr>
              <td>Merge Sort</td>
              <td>O(n log n)</td>
              <td>O(n)</td>
              <td>Stable</td>
            </tr>
            <tr>
              <td>Quick Sort</td>
              <td>O(n log n)</td>
              <td>O(log n)</td>
              <td>Not Stable</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const appStyle = {
  backgroundColor: "#121212",
  color: "#ffffff",
  minHeight: "100vh",
  padding: "20px",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "40px",
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const sortContainerStyle = {
  backgroundColor: "#1e1e1e",
  borderRadius: "10px",
  padding: "20px",
  margin: "10px",
  maxWidth: "250px",
  textAlign: "center",
};

const infoStyle = {
  marginTop: "10px",
  fontSize: "14px",
};

const metricsStyle = {
  marginTop: "10px",
  fontSize: "14px",
  color: "#bbbbbb",
};

const tableContainerStyle = {
  marginTop: "40px",
  textAlign: "center",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const thStyle = {
  border: "1px solid #ffffff",
  padding: "8px",
  backgroundColor: "#333333",
};

const tdStyle = {
  border: "1px solid #ffffff",
  padding: "8px",
};

export default App;
