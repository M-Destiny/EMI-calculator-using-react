import React from 'react'
import Table from 'react-bootstrap/Table'

export default function Emi(props) {

    console.log(props);
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td></td> */}
                        <td>{props.submit}</td>
                        <td>{props.total}</td>
                        <td>{props.duration}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
