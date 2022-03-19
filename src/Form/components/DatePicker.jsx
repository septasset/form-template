import React from 'react'
import { useField, useFormikContext } from 'formik'


//Mui components
import { TextField as MuiTextField} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {DatePicker as MuiDatePicker} from '@mui/lab';

export default function DatePicker({ label, ...props }) {
    const [field, meta] = useField(props);
    const formik = useFormikContext();
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MuiDatePicker
                name={field.name}
                label={label}
                // inputFormat='MMM/dd/yyyy'
                value={formik.values.date}
                onChange={(newValue) => {
                    formik.setFieldValue('date', newValue)
                }}
                renderInput={(params) => <MuiTextField {...params} fullWidth margin='normal' />}
            />
        </LocalizationProvider>
    )
}
