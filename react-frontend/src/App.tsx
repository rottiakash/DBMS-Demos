import React from "react";
import StudentTable from "./studentTable";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <StudentTable />
    </div>
  );
}

export default App;
