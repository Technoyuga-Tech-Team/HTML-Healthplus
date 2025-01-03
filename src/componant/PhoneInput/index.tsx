import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./index.css"
import { ErrorMessage } from 'formik';

function PhoneInputData({ name, label, value, setFieldValue }) {
    return (
        <div className='mb-3'>
            <div>
                <label
                    className="form-label"
                    htmlFor={name}>{label}</label>
            </div>
            <PhoneInput
                country={"us"}
                inputClass='phone-input-main-wrapper'
                placeholder=""
                value={value}
                onChange={(val, countryData) => {
                    const numericValue = val.replace(/[^0-9]/g, ""); // Extract numeric value only
                    const countryCodePrefix = countryData.dialCode; // Get country code prefix from countryData 
                    const getNumber = numericValue.substring(countryData.dialCode.length)
                    setFieldValue("phoneNumberLatest", getNumber)
                    setFieldValue("countryCodeMain", countryCodePrefix)
                    setFieldValue(name, numericValue)
                }} />
            <ErrorMessage style={{ color: "red" }} name={name} component="div" />

        </div>
    )
}

export default PhoneInputData