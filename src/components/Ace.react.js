import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/theme/solarized_light';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const Ace = (props) => {
    return (
        <AceEditor
            mode="python"
            name={props.id}
            theme="solarized_light"
            value={props.value}
            onChange={(value) => {
                if (props.setProps) props.setProps({value: value});
            }}
        />
    );
};

Ace.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * The value of the text content
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};

export default Ace;
