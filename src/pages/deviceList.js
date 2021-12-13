import * as React from 'react';


const load = () => {
    fetch(`http://localhost:5000/getDevices`, {
        mode: 'no-cors',
        //method: "post",

    })
        .then(res => res)
        .then(start => console.log(start));
}

function DeviceList() {

    return (
        <div>
            {load()}
        </div>
    );
}
export default DeviceList;