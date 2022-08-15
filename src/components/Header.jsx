import React from 'react';
import Button from './Button';
import '../index.css';

const Header = ({title, showAddForm, showAddTask}) => {
    return (
        <header className='header'>
            <h1>{title}</h1> 
            <Button color='red' text={showAddTask ? 'Close': 'Add'} onClick={showAddForm}/>
        </header>
    );
}

Header.defaultProps = {
    title: 'Task manager'
}

export default Header;
