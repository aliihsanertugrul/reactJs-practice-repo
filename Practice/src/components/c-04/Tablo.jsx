import React from "react";
import students from "../../assets/data/students.json";

const Tablo = () => {
  const style1 = {
    backgroundColor: "cyan",
    color: "crimson",
    textAlign: "center",
    lineHeight: "1.5rem",
  };

  return (
    <table style={{ width: "500px", margin: "3rem auto" }}>
      <thead style={{ backgroundColor: "greenyellow" }}>
        <tr style={{ lineHeight: "3rem" }}>
          <th>Isim</th>
          <th>Yas</th>
          <th>Kurs</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student, index) => (
          <tr
            key={index}
            style={
              index % 2 === 0
                ? style1
                : { ...style1, backgroundColor: "bisque" }
            }
          >
            <td>{student.isim}</td>
            <td>{student.yas}</td>
            <td>{student.kurs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tablo;
