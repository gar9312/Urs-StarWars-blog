import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);
    const [contactList, setContactList] = useState( []); 
    async function getContacts() {
    const response = await fetch("https://swapi.dev/api/people")
    const apiContact = await response.json();
    setContactList (apiContact.results)
    }
    useEffect (() => {
        getContacts();
    }, [])

	return (
		<div className="container">
			<ul className="list-group">
				{contactList.map((contact, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
                                {contact.name}
							<button className="btn btn-success">
								Delete contact
							</button>
						</li>
					);
				})}
			</ul>
			<br />
            <Link to="/addContact">
				<button className="btn btn-primary">Add new contact</button>
			</Link>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
