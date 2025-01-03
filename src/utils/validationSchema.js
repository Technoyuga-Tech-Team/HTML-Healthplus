import { allowCharacterAndNumber, allowedOnlyCharacter, allowedOnlyCharAndSpace, onlyNumberShouldAllowed, shouldNotEnterSpaceAtMiddle } from '@/constant/images';
import * as Yup from 'yup';
// import { allowCharacterAndNumber, allowedOnlyCharAndSpace, onlyNumberShouldAllowed, shouldNotEnterSpaceAtMiddle } from '../constants/globalConst';

const emailConstValidation = {
    limit: 5000,
    regEx: shouldNotEnterSpaceAtMiddle
}

const passwordConstConstValidation = {
    limit: 5000,
    allowMultipleSpace: true
}

const emailYupValidationConst = Yup.string().email('Invalid email format').required('Email is required');
const passwordYupValidationConst = Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
const confirmPasswordYupValidationConst = Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')

const phoneNumberValidationConst = Yup.string()
    .required('Phone number is required')
    .min(6, 'Phone number must be at least 6 characters')
    .max(16, 'Phone number must be at most 16 characters')

// Register as investor
export const registerAsCustomerValidationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    username: Yup.string().required('Username is required'),
    email: emailYupValidationConst,
    password: passwordYupValidationConst,
    phone_number: phoneNumberValidationConst,
    confirmPassword: confirmPasswordYupValidationConst,
    language: Yup.array().required('Language is required')
});

export const registerCustomerInitialValue = [
    {
        name: "first_name",
        type: "text",
        label: "First Name",
        placeHolder: "Enter your first name",
        value: "",
        style: { flex: true },
        regEx: allowedOnlyCharAndSpace
    },
    {
        name: "last_name",
        type: "text",
        label: "Last Name",
        placeHolder: "Enter your last name",
        value: "",
        style: { flex: true },
        regEx: allowedOnlyCharAndSpace
    },
    {
        name: "username",
        type: "text",
        label: "Username",
        placeHolder: "Enter a username",
        value: "",
        regEx: allowedOnlyCharacter,
        style: { flex: true }
    }, {
        name: "email",
        type: "text",
        label: "Email Address",
        placeHolder: "Enter Email",
        value: "",
        style: { flex: true },
        ...emailConstValidation
    }, {
        name: "phone_number",
        type: "phone",
        label: "Phone Number",
        placeHolder: "Enter your Phone Number",
        value: "",
        limit: 16,
        style: { flex: true },
        regEx: onlyNumberShouldAllowed,
    },
    {
        name: "language",
        type: "dropdownPaginate",
        label: "Select language",
        typeOfApi: "language",
        placeHolder: "Select language",
        value: "",
        regEx: allowedOnlyCharacter,
        style: { flex: true }
    },
    {
        name: "password",
        type: "password",
        label: "Create Password",
        placeHolder: "Create a password",
        value: "",
        style: { flex: true },
        ...passwordConstConstValidation
    },
    {
        name: "confirmPassword",
        type: "password",
        label: "Confirm Password",
        placeHolder: "Confirm a password",
        value: "",
        style: { flex: true },
        ...passwordConstConstValidation
    },
    {
        name: "checkbox",
        type: "checkbox",
        checkBoxArray: [{
            label: "<p>I agree to the Terms & Conditions</p>",
            value: false
        }]

    }
]