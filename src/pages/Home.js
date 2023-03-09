import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './styles.css';
import { FaUser } from 'react-icons/fa';


export default function Home() {
    // create users state
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    // on load get data of users and store it in users
    useEffect(() => {
        axios.get('http://13.233.147.198:3000/api/user')
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    useEffect(() => {



    }, [users]);


    // handle click for delete button

    const HandleDeleteClick = (email, name) => {

        console.log(email, name);
        const headers = {
            'Authorization': 'Bearer paperboy'
        }
        const data = {
            name: name,
            email: email
        }


        axios.delete('http://13.233.147.198:3000/api/user', { data })
            .then(response => {
                // console.log("erewerewrre", response.data.email);

                // console.log(users);
                const updatedUsers = users.filter((user) => user.email !== response.data.email)
                console.log("=>>>>", updatedUsers);
                setUsers(updatedUsers)
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            }
            );

        // console.log(tempemail);


    };


    // handle click for edit button

    const HandleEditClick = (email) => {

        localStorage.setItem('email', email);
        const local = localStorage.getItem('email')
    };



    return (

        <div className="bg-dark text-white">
            <nav className="navbar sticky-top navbar-dark bg-secondary">
                <a className="navbar-brand" href="#">Create User Data</a>
            </nav>
            <div className="container my-5">
                <div className="row">
                    {users.map((e, i) => {
                        // Generate a random color for each user icon
                        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                        return (
                            <div className="col-sm-4 mb-4" key={i}>
                                <div className="card bg-secondary text-white h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-center mb-3">
                                            <FaUser size={48} color={randomColor} />
                                        </div>
                                        <h5 className="card-title">{e.name}</h5>
                                        <p className="card-text"><strong>Username:</strong> {e.username}</p>
                                        <p className="card-text"><strong>Email:</strong> {e.email}</p>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-outline-danger "
                                                onClick={() => HandleDeleteClick(e.email, e.name)}
                                            >
                                                delete
                                            </button>
                                            <Link to="/edit">
                                                <button type="button" className="btn btn-outline-warning ml-2"
                                                    onClick={() => HandleEditClick(e.email)}
                                                    style={{ marginLeft: '9px' }}
                                                >
                                                    edit
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="text-center">
                    <Link to="/add">
                        <button type="button" className="btn btn-success">
                            create
                        </button>
                    </Link>
                </div>
            </div>
        </div>



    )

}