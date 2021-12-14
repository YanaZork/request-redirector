import React, { useState, useEffect } from 'react';

function DeviceList() {

    const [devices, setDevices] = useState([]);

    useEffect(
        async() => {
            const resp = await fetch(`http://localhost:5000/getDevices`, {
                mode: 'no-cors',
                //method: "post",

            })
            const res = await resp
            console.log(res)
        },
        []
    );

    return (
        <div>
            {devices.map(device => <h1>device.name </h1>)}
        </div>
    );
}
export default DeviceList;
