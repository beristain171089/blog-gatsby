import React from 'react';
import { Link } from 'gatsby';
import SocialMedia from '../SocialMedia';
import Courses from '../Courses';
import './Menu.scss';

export default function Menu() {
    return (
        <div className="menu">
            <Link to="/">
                <h2>Blog developer - LUIS</h2>
            </Link>
            <p>
                Blog sobre desarrollo de software
            </p>
            <SocialMedia />
            <Courses />
        </div>
    )
}
