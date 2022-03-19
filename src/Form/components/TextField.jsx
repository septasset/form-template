import React from 'react'
import { Field, useField } from 'formik'

//Mui components
import { TextField as MuiTextField } from '@mui/material'



export default function TextField({label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <>
            <Field
                as={MuiTextField}
                label={label}
                error = {(meta.error? true:false) && meta.touched}
                helperText={(meta.error? true:false) && meta.touched? meta.error : ''}
                margin={props.margin || 'normal'}
                {...field}
                {...props}
                fullWidth
            />
        </>
    );
}



