import * as React from 'react';
import { useSelector } from 'react-redux';

import { getErrors } from '../../store/selectors/commonSelector';

const ErrorsViewer = () => {
    const errors = useSelector(getErrors);
    console.log('errors', errors);

    if (!errors?.length) return null;

    return (
        <>
            {errors.map((e, index) => (
                <div key={`error#${index}`} className="error">
                    <span>{e}</span>
                </div>
            ))}
        </>
    );
};

export default ErrorsViewer;
