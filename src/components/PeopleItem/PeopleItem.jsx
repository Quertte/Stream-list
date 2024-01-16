import React from 'react';
import classes from './PeopleItem.module.css'

const PeopleItem = ({ person, viewMode }) => {

    return (
        <li className={viewMode === 'List' ? classes.li : classes.tile}>
            {Object.entries(person)
                .filter(([props, _]) => props !== 'id')
                .map(([props, value]) => (
                    <span key={props} className={viewMode === 'List' ? classes.span : ''}>{value}</span>
                ))}
        </li>
    )
}

export default PeopleItem;
