import React from 'react';
import police from '../../config/people.json'
import PeopleItem from '../PeopleItem/PeopleItem';
import classes from './PeopleList.module.css'

const PeopleList = ({ viewMode }) => {
    const { people } = police;

    return (
        <>
            {
                people.length && (
                    <ul className={viewMode === 'Tiles' ? classes.tilesContainer : classes.ul}>
                        {people.map(person => (
                            <PeopleItem key={person.id} person={person} viewMode={viewMode} />
                        ))}
                    </ul>
                )
            }
        </>
    );
};


export default PeopleList;