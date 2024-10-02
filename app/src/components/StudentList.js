import React from 'react';
import axios from 'axios';

export default class StudentList extends React.Component {
    state = {
        students: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/students`)
            .then(res => {
                const students = res.data;
                this.setState({ students });
            })
    }

    render() {
        return (
            <div>
                <h3>Student List</h3>
            <ul>
                {
                    this.state.students
                        .map(student => {
                                console.log(student);
                               return <li key={student.id}>{student.firstName} {student.lastName} {student.email}</li>
                            }
                        )
                }
            </ul>
            </div>
        )
    }
}

