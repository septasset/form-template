import React from 'react'
import { useField, useFormikContext } from 'formik'

//Mui components
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, Radio, FormControlLabel} from '@mui/material'


export default function RadioGroup({ label, options, ...props }) {
    const [field, meta] = useField(props);
    const formik = useFormikContext();

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup
                {...props}
                row
                name={field.name}
                value={field.value}
                onChange={formik.handleChange}
            >
                {options.map((option, index) => {
                    return (
                        <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
                    )
                })}
            </MuiRadioGroup>
        </FormControl>
    )
}
