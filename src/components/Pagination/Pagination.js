import React from 'react';
import PropType from 'prop-types';
import { Link } from 'gatsby';
import './Pagination.scss';

export default function Pagination(props) {

    const { pageContext } = props;
    const { nextPagePath, previousPagePath } = pageContext;
    console.log(pageContext);

    return (
        <div className='pagination'>
            {previousPagePath && <Link to={previousPagePath}>Atras</Link>}
            {nextPagePath && <Link to={nextPagePath}>Siguiente</Link>}
        </div>
    );
};

Pagination.prototype = {
    pageContext: PropType.object.isRequired
};