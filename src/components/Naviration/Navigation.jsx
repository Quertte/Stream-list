import React from 'react';
import classes from './Navigation.module.css'

const Navigation = ({ setViewMode, viewMode }) => {
    const namesButton = ['List', 'Tiles'];

    return (
        <>
            {
                namesButton.map((name, index) => (
                    <React.Fragment key={name}>
                        <button
                            className={`${classes.button} ${viewMode === name ? classes.bold : ''}`}
                            onClick={() => setViewMode(name)}
                        >
                            {name}
                        </button>
                        {index < namesButton.length - 1 && <span> | </span>}
                    </React.Fragment>
                ))
            }
        </>
    );
};

export default Navigation;