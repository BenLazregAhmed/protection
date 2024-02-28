import React from 'react'

export default function NoNumberOrSymbol(inputString) {
    const onlyLettersAndSpacesRegex = /^[A-Za-z\s]+$/;
  
    return onlyLettersAndSpacesRegex.test(inputString);
}
