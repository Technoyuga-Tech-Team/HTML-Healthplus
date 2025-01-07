import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { ErrorMessage } from 'formik';

const DatePickerComp = ({
    label, name, value, onChange, setFieldValue
}) => {

    const onChangeDateValue = (data) => {
        if (onChange) {
            onChange(data)
        } else {
            setFieldValue(name, data)
        }
    }


    return (
        <div className='mb-3'>
            {label && <div>
                <label
                    className="form-label"
                    htmlFor={name}>{label}</label>
            </div>
            }
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        value={value || null}
                        onChange={onChangeDateValue}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                variant="outlined"
                                name={name}
                                margin="normal"
                                sx={{
                                    '& .MuiInputBase-root': {
                                        backgroundColor: 'white',
                                    },
                                }}
                            />
                        )}
                    />
                </DemoContainer>
            </LocalizationProvider>
            <ErrorMessage style={{ color: "red" }} name={name} component="div" />
        </div>
    )
}

export default DatePickerComp