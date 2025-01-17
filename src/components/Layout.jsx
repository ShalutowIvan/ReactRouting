import { Link, Outlet, NavLink } from 'react-router-dom'
import CustomLink from './CustomLink'


export default function Layout() {
	const setActive = ({isActive}) => isActive ? 'active-link' : '';

	return (
		<>
		<header>
        {/*<h2><NavLink to="/" className={setActive}>Home</NavLink></h2>
        
        <h2><NavLink to="/posts" className={setActive}>Blog</NavLink></h2>
        
        <h2><NavLink to="/about" className={setActive}>About</NavLink></h2>*/}

        {/* ниже наш кастомный линк */}
        <h2><CustomLink to="/">Home</CustomLink></h2>
        
        <h2><CustomLink to="/posts">Blog</CustomLink></h2>
        
        <h2><CustomLink to="/about">About</CustomLink></h2>



        {/*<h2><NavLink to="/" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Home</NavLink></h2>
        
        <h2><NavLink to="/posts" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Blog</NavLink></h2>
        
        <h2><NavLink to="/about" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>About</NavLink></h2>*/}
      </header>

      <main>

      <Outlet />

      </main>
      <footer>
      	2024 год

      </footer>

      </>
		)


}















