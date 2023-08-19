import './Error404.css';

import React, { useEffect } from 'react';

export default function Error404() {

    useEffect(() => {
        document.title = 'Error';
      }, []);

    return (
        <div>
            <div id="error_box">
                <h1>404</h1>
                <h2>Page not Found</h2>
                <h3>The Page that you are trying to access does not exist.</h3>
            </div>
        </div>
    )
}