import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function Register() {
    const [inputs, setInputs] = useState({
        Tipo_doc: "",
        Ide: "",
        Name: "",
        L_name: "",
        Nac: "",
        Cel: "",
        Email: ""
    });
    const [pais, setPais] = useState([]);

    const onChange = async e => {
        await setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log(inputs);
    };

    useEffect(() => {
        axios.get("https://restcountries.com/v2/all")
            .then((res) => {
                setPais(res.data)
            })
    }, []);

    const { Name, L_name, Email, Ide, Tipo_doc, Cel, Nac } = inputs;

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {
                firstName: Name,
                lastName: L_name,
                email: Email,
                sicCode: Ide,
                sicCodeType: Tipo_doc,
                mobilePhone: Cel,
                nationality: Nac,
                createdBy: "Juan Esteban Cardenas"
            };
            console.log(body);
            await axios.post("http://144.217.88.168:3030/api/user", body, { headers: { "Content-type": "application/json" } })
                .then(res => {
                    if (res.status === 201) {
                        toast.success("Register succesfully");
                    } else {
                        toast.error(res.statusText);
                    }
                })
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <div className='container'>
                <form onSubmit={onSubmitForm}>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor='Tipo_doc' >Tipo de documentacion</label>
                        </div>
                        <div className='col-75'>
                            <select
                                id="Tipo_doc"
                                name="Tipo_doc"
                                onChange={e => onChange(e)}
                                required
                            >
                                <option defaultChecked>-- Seleccione --</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="CC">Cedula de ciudadania</option>
                                <option value="CE">Cedula de extranjeria</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor='Name' >Nombre</label>
                        </div>
                        <div className='col-75'>
                            <input
                                type="text"
                                id='Name'
                                onChange={e => onChange(e)}
                                name='Name'
                                required
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor='Nac' >Nacionalidad</label>
                        </div>
                        <div className='col-75'>
                            <select
                                id="Nac"
                                name="Nac"
                                onChange={e => onChange(e)}
                                required
                            >
                                <option >-- Seleccione --</option>
                                {pais.map((elem, index) => {
                                    return (
                                        <option key={index} value={elem.name}>{elem.name}</option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor='Email' >Email</label>
                        </div>
                        <div className='col-75'>
                            <input
                                type="email"
                                id='Email'
                                onChange={e => onChange(e)}
                                name='Email'
                                required
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor='Ide' >Identificacion</label>
                        </div>
                        <div className='col-75'>
                            <input
                                type="text"
                                id='Ide'
                                onChange={e => onChange(e)}
                                name='Ide'
                                required
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor='L_name' >Apellidos</label>
                        </div>
                        <div className='col-75'>
                            <input
                                type="text"
                                id='L_name'
                                onChange={e => onChange(e)}
                                name='L_name'
                                required
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor='Cel' >Celular</label>
                        </div>
                        <div className='col-75'>
                            <input
                                type="tel"
                                maxLength="10"
                                id='Cel'
                                onChange={e => onChange(e)}
                                name='Cel'
                                required
                            />
                        </div>
                    </div>

                    <div className='row'>
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </div>
        </Fragment>)
}

export default Register;
