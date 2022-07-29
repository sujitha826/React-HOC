import React from 'react';

// HOC that handles loading if props are not fetched and make our users happy.

function WithLoading(Component) {
    return function WithLoadingComponent({ isLoading, repos }) {
        if (!isLoading) return <Component repos= {repos} />;
        return <p>Hold on, fetching data might take some time.</p>;
    };
}

/* This would display the text “Hold on, fetching data might take some time” 
when the app is still fetching data and the props are being injected into state. 
We make use of isLoading to determine whether the component should be rendered.*/

export default WithLoading;