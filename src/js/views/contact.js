import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	const [contactList, setContactList] = useState([]);
	const [agendaName, setAgendaName] = useState("");

	async function getContacts(name) {
		const response = await fetch(`https://playground.4geeks.com/contact/agendas/${name}/contacts`)
		const data = await response.json();
		setContactList(data.contacts)
	}
	useEffect(() => {
		getContacts();
	}, [])

	let handlerGetAgenda = async (e) => {
		setAgendaName(e.target.value)
		await getContacts(e.target.value)
	}

	return (
		<div className="container">
			<div>
				<p> Busca tu agenda </p>
				<input type="text" onChange={handlerGetAgenda} />
			</div>
			<ul className="list-group">
				{contactList && contactList.map((contact, index) => {
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
