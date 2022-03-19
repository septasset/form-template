import React from 'react'
import { Field, useField, useFormikContext } from 'formik'

//Mui components
import { Autocomplete, TextField as MuiTextField } from '@mui/material'


export default function SingleSelect({ label, options, ...props }) {
    const [field, meta] = useField(props);
    const formik = useFormikContext();

    return (
        <Autocomplete
            {...props}
            inputValue={field.value}
            disablePortal={false}
            options={options}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            onChange={(event, value, reason) => {
                if (reason === 'clear') {
                    formik.setFieldValue(field.name, '')
                } else {
                    formik.setFieldValue(field.name, value.value)
                }
            }}

            renderInput={(params) =>
                <Field
                    as={MuiTextField}
                    {...params}
                    name={field.name}
                    label={label}
                    error={(meta.error ? true : false) && meta.touched}
                    helperText={(meta.error ? true : false) && meta.touched ? meta.error : ''}
                    margin={props.margin || 'normal'}
                    fullWidth
                />
            }
        />
    )
}
