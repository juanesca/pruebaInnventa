import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Dashboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://144.217.88.168:3030/api/user")
            .then(res => {
                setUsers(res.data.data);
            })
    }, []);

    return (
        <div className='container-t'>
            <table>
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Nombre Completo</th>
                        <th>Nacionalidad</th>
                        <th>Celular</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((i, index) => {
                        console.log(i);
                        return (

                            <tr key={index}>
                                <td>{`${i.sicCodeType} - ${i.sicCode}`}</td>
                                <td>{i.completeName}</td>
                                <td>{i.nationality}</td>
                                <td>{i.mobilePhone}</td>
                                <td>{i.email}</td>
                            </tr>

                        )
                    })}
                </tbody>

            </table>
        </div>
    );
}

export default Dashboard;
