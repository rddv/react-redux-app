import React from 'react'

function ErrorField(props) {
    const { input, type, meta: {error, touched} } = props
    const errorText = touched && error && <div style={{color: "red"}}>{error}</div>
    return (
        <div>
            <div>
                <label htmlFor="">{input.name}</label>
                <input {...input} type={type}/>

            </div>
            {errorText}
        </div>
    );
}

ErrorField.propTypes = {};
ErrorField.defaultProps = {};

export default ErrorField;
