import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortContext from './PortContext';

export default function PortProvider({ children }) {
    const [language, setLanguage] = useState('Port');
    const [clientName, setClientName] = useState('');

    const contextValue = {
        language,
        setLanguage,
        clientName,
        setClientName,
    }
    
    return (
        <PortContext.Provider value={ contextValue }>
            { children }
        </PortContext.Provider>
    )
}

PortProvider.propTypes = {
    children: PropTypes.element,
  }.isRequired;
