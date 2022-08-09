import React from 'react'
import { Link, useLocation} from 'react-router-dom'


const About = () => {
	const location = useLocation()
	const { pathname } = location

	return (
		<div className='about__content'>
			<ul className='about__list'>
				<li>
					<Link to={`${pathname}/about-app`}>About App</Link>
				</li>
				<li>
					<Link to={`${pathname}/about-author`}>About Author</Link>
				</li>
			</ul>
		</div>
	)
}
export default About