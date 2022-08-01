import React from 'react';
// mapping through the repos array and returning a list of repos according to their full names, with a unique key for each entry.
// if after fetching has completed and the repos prop is still empty, then it should return null. 

const List = ({ repos }) => {
    if (!repos) return null;

    if (!repos.length) return <p>No users, sorry</p>;
    
    return (
        <ul>
            {repos.map((repo) => {
                return <li key={repo.id}>{repo.name}</li>;
            })}
        </ul>
    );
};

export default List;