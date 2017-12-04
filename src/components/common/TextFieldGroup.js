import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup,FormText, Label, Input, FormFeedback, InputGroup, InputGroupAddon } from 'reactstrap';
import { Link } from "react-router-dom";

// todo:: maybe add https://availity.github.io/availity-reactstrap-validation/ ?
// todo:: toggles, maybe...
const TextFieldGroup = ({field, value, isDisabled, label, error, type, onChange, onBlur, text, addon, textLink}) => {

    let formtext = null;
    if (textLink && text) {
        formtext = (
            <FormText color="muted">
                <Link to={textLink}>{text}</Link>
            </FormText>
        );
    } else if (text ) {
        formtext = (
            <FormText color="muted">
                {text}
            </FormText>
        );
    }

    return (
        <div>
            <FormGroup color={ error ?  'danger' : '' }>
                <Label for={field}>{label}</Label>
                <InputGroup>
                    <InputGroupAddon><i className={addon} aria-hidden="true"></i></InputGroupAddon>
                    <Input
                        type={type}
                        name={field}
                        state={ error ?  'danger' : '' }
                        value={value}
                        placeholder=""
                        disabled={isDisabled}
                        onChange={onChange}
                        onBlur={onBlur} />
                </InputGroup>

                <FormFeedback><small>{error}</small></FormFeedback>
                {formtext}
            </FormGroup>
        </div>
    );
};

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    text: PropTypes.string,
    textLink: PropTypes.string,
    isDisabled: PropTypes.bool,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func
};

TextFieldGroup.defaultProps = {
    type: 'text'
};

export default TextFieldGroup;