import React from 'react'

export default function IsNumber(input) {
    return !isNaN(+input) && !isNaN(parseFloat(input));

}
