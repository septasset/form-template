import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

//Mui components
import {RadioGroup as MuiRadioGroup, Button, Box, Typography, TextField as MuiTextField, Grid, Dialog, DialogTitle, DialogContent } from '@mui/material'

//customized conponents
import MyTextField from './components/TextField'
import SingleSelect from './components/SingleSelect'
import RadioGroup from './components/RadioGroup'
import DatePicker from './components/DatePicker'
import MultipleSelect from './components/MultipleSelect'

const trialTypeOptions = [
    { label: 'Pharmaceutical', value: 'Pharmaceutical' },
    { label: 'Collaborative', value: 'Collaborative' },
    { label: 'Investigator Led', value: 'Investigator Led' },
    { label: 'Registry', value: 'Registry' },
]

const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
]


const stakeholderOptions = [
    { label: 'Alice', value: 'Alice' },
    { label: 'Boyang', value: 'Boyang' },
    { label: 'Charles', value: 'Charles' },
    { label: 'Daniel', value: 'Daniel' },
    { label: 'Evan', value: 'Evan' },
    { label: 'Finley', value: 'Finley' },
    { label: 'George', value: 'George' },
]

export default function Form() {
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <Formik
            //intial values, will appear on the form when first launched
            initialValues={{
                projectName: '',
                email: '',
                gender: '',
                trialType: '',
                stakeholders: [],
                date: new Date()
            }}
            validationSchema={
                //configure the validation criteria in the Yup object below 
                Yup.object({
                    projectName: Yup.string().required('Project name required').max(20, 'Username must be 20 characters or less'),
                    email: Yup.string().email('Invalid email').required('Email required'),
                    trialType: Yup.string().required('Trial type required'),
                })
            }
            onSubmit={(values, actions) => {
                alert(`Data Submited: \n${JSON.stringify(values)}`)
                actions.resetForm();
            }}
        >
            {formik => (
                <>
                    {/* button for opening the form */}
                    <Button variant='contained' color='primary' onClick={() => { setOpenPopup((prev) => !prev) }}>Add Trial</Button>
                    <Dialog open={openPopup}>

                        <DialogTitle sx={{}}>
                            <Typography variant='h5' component='span'>
                                New Trial
                            </Typography>

                            {/* button for closing the form */}
                            <Button variant='contained' color='error' size='small' onClick={() => { setOpenPopup((prev) => !prev) }} style={{ float: 'right' }}>X</Button>
                        </DialogTitle>

                        <DialogContent dividers={true}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    {/* plain Text input 
                                        to use you need: 
                                        1. declare name and initialvalue in initialValues
                                        2. configure the validation schema in Yup.object within validationSchema array
                                        3. give name and label attibute to the component, name must be same as ones you use in initialValues and validationSchema
                                        4. must used with formik liberary
                                    */}
                                    <MyTextField
                                        name='projectName'
                                        label='Project Name*'
                                    />

                                    <MyTextField
                                        name='email'
                                        label='Email*'
                                    />

                                    {/* selector - for select multiple options 
                                        to use you need: 
                                        1. declare name and initialvalue in initialValues
                                        2. configure the validation schema in Yup.object within validationSchema
                                        3. create the options array, e.g. [{ label: 'l1', value: 'v1' }, { label: 'l2', value: 'v2' }...],
                                        the first and second attribute of every element in this array must be 'label' and 'value'
                                        4. pass name, label, options array as props to the component, name must be same as ones you use in initialValues and validationSchema
                                        5. must used with formik liberary
                                    */}

                                    <MultipleSelect
                                        name='stakeholders'
                                        label='Stakeholder'
                                        options={stakeholderOptions}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    {/* Select - for select single option
                                        to use you need: 
                                        1. declare name and initialvalue in initialValues
                                        2. configure the validation schema in Yup.object within validationSchema
                                        3. create the options array, e.g. [{ label: 'l1', value: 'v1' }, { label: 'l2', value: 'v2' }...],
                                        the first and second attribute of every element in this array must be 'label' and 'value'
                                        4. pass name, label, options array as props to the component, name must be same as ones you use in initialValues and validationSchema
                                        5. must used with formik liberary
                                    */}
                                    <SingleSelect
                                        name='trialType'
                                        label='Trial Type'
                                        options={trialTypeOptions}
                                    />

                                    {/* datepicker 
                                        to use you need: 
                                        1. declare name and initialvalue in initialValues
                                        2. configure the validation schema in Yup.object within validationSchema
                                        3. pass name, label, as props to the component, name must be same as ones you use in initialValues and validationSchema
                                        4. must used with formik liberary
                                    */}
                                    <DatePicker
                                        name='date'
                                        label='Date'
                                    />

                                    {/* radio groups 
                                        to use you need: 
                                        1. declare name and initialvalue in initialValues
                                        2. configure the validation schema in Yup.object within validationSchema
                                        3. create the options array, e.g. const options = [{ label: 'l1', value: 'v1' }, { label: 'l2', value: 'v2' }...],
                                        the first and second attribute of every element in this array must be 'label' and 'value'
                                        4. pass name, label, options array as props to the component, name must be same as ones you use in initialValues and validationSchema
                                        5. must used with formik liberary
                                    */}
                                    <RadioGroup
                                        name='gender'
                                        label='Gender'
                                        options={genderOptions}
                                    />
                                </Grid>
                            </Grid>

                             <Box>
                                    {/* submit button */}
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        size='small'
                                        color='primary'
                                        onClick={formik.handleSubmit}>
                                        SUBMIT
                                    </Button>

                                    {/* reset button */}
                                    <Button
                                        variant='contained'
                                        size='small'
                                        color='error'
                                        onClick={formik.handleReset}
                                        style={{ float: 'right' }}>
                                        RESET
                                    </Button>
                                </Box>
                        </DialogContent>
                    </Dialog>
                </>
            )}
        </Formik>
    )
}
