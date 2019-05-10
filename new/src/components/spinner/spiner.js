import React from 'react';
import './spinner.css';

const Spinner = () => {
    return(
        <div class="lds-css ng-scope">
            <div class="lds-rolling">
                <div>Loading...</div>
            </div>  
            <style type="text/css">
            </style>
        </div>
        );
};
export default Spinner;