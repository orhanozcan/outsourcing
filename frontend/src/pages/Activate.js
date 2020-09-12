import React, { useState } from 'react'

import { activate } from '../api/auth'
import { useToast } from '../contexts/toast';
var queryString = require('query-string');


export default function (e) {
    const [active, setActive] = useState('Activating...');
    const parsed = queryString.parse(window.location.search);
    const toastMessageStack = useToast();

    (async () => {
        const result = await activate(parsed.uuid);

        if (result.status === 1) {
            toastMessageStack(result.msg)
            setTimeout(() => {
                window.location.replace('/login');
            }, 3000);
        }
        else {
            setActive(result.msg)
            setTimeout(() => {
                window.location.replace('/login');
            }, 3000);
        }
    }
    )();
    return <div>{active}</div>;

}
