import * as React from 'react';
//import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import { render } from 'sass';
import Item from 'antd/lib/list/Item';


export default function BasicDatePicker() {
  const [valueStart, setValueStart] = React.useState(null);
  const [valueEnd, setValueEnd] = React.useState(null);

  //const [ currentID, setCurrentID ] = useState(1);

function request() {
  fetch("http://localhost:5000/", {
    mode: 'no-cors',
    //method: "post",
  })
  .then(res => console.log(res))
  .then(data => console.log(data));

}

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Start"
          value={valueStart}
          onChange={(newValue) => {
            setValueStart(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="End"
          value={valueEnd}
          onChange={(newValue) => {
            setValueEnd(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button variant="contained" onClick={request()}>Получить</Button>
      </LocalizationProvider>


    </div>
  );
}
