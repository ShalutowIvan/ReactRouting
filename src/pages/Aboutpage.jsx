import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom'




export default function Aboutpage() {

	return (
		<>
			<h1>Aboutpage</h1>
			<p>Вася</p>

			<ul>
				<li><Link to="/about/contacts/">Our contacts</Link></li>
				<li><Link to="/about/team/">Our contacts</Link></li>
			</ul>

			{/*<Routes>
				<Route path='contacts' element={<p>Our contacts</p>} />
				<Route path='team' element={<p>Our team</p>} />
			</Routes>*/}
			<Outlet />
		</>
		)

}






