import * as yup from 'yup'
const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    name: yup
      .string()
      .min(6, "Username must be at least 6 characters long.")
      .required("Username is Required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
  })

export default formSchema