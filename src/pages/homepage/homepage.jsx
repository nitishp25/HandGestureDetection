import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

const Homepage = () => (
    <div className="homepage">
        <Link className="sections selectSections" to="/gestures">
            <h1 className="name">Gesture Translation</h1>
        </Link>
        <Link className="sections selectSections" to="/signlanguage">
            <h1 className="name">Sign Language Translation</h1>
        </Link>
    </div>
);

export default Homepage;