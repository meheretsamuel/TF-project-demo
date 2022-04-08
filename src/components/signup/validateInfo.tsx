export default function validateInfo(values : any) {
  let errors = {
    name: '',
    organization: '',
    tin: '',
    phone_number: '',
    email: '',
    password: '',
    password2: ''
  };

  let pass: boolean = false;

  if (!values.name.trim()) {
    errors.name = 'Username required';
  }
  else pass = true;

  if (!values.organization) {
    errors.organization = 'Organization required';
  }
  else pass = true;
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  if(!values.tin) {
    errors.tin = 'Tin Number Required'
  }
  else pass = true;
  //@todo a test to check tinnumber validity here

  if(!values.phone_number) {
    errors.phone_number = 'Phone Number Required'
  }
  else pass = true;

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  else pass = true;

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }
  else pass = true;

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  else pass = true;

  
  return {errors, pass};
}
