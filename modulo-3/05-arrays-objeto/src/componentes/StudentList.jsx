// src/components/StudentList.js
const StudentList = ({ students }) => {
    return (
        <ul>
            {students.map((student, index) => (
                <li key={index}>
                    <strong>{student.nombre}</strong> - {student.localidad} ({student.nacionalidad})
                </li>
            ))}
        </ul>
    );
};

export default StudentList;
