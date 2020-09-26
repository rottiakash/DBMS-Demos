import React, { FC, useEffect, useState } from "react";
const axios = require("axios").default;
interface StudentTableProps {}

interface Student {
  USN: string;
  name: string;
}

const StudentTable: FC<StudentTableProps> = () => {
  const [students, setStudents] = useState<Array<Student>>([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:8080/getStudents");
      setStudents(res.data);
    })();
  }, [students]);
  return (
    <div>
      <table style={{ border: "1px solid black" }}>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>USN</th>
          <th style={{ border: "1px solid black" }}>Name</th>
        </tr>
        {students.map((student: Student) => (
          <tr key={student.USN} style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>{student.USN}</td>
            <td style={{ border: "1px solid black" }}>{student.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default StudentTable;
