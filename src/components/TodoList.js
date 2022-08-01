import React from 'react';

const List = ({ repos }) => {
    if (!repos) return null;
    if (!repos.length) return <p>No Todos to show now, sorry</p>;
    
    return (
        <ul>
            {repos.map((repo) => {
                return <li key={repo.userId}>{repo.title}</li>;
            })}
        </ul>
    );
};

export default List;