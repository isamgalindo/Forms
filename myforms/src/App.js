import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [formValues, setFormValues] = useState({ email: '', password: '', favClass: '1' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleEmailChange = (e) => {

    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormValues({ ...formValues, password });
    validatePassword(password);
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = () => {
    validateEmail(formValues.email);
    const isvalid = validateForm
    if (!errors.email && isvalid) {
      // Call fetch or submit the form
      alert(JSON.stringify(formValues));
    }
  };

  const validateEmail = (email) => {
    // Basic email format validation using a regular expression
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrors({ ...errors, email: 'Invalid email format' });
    } else {
      setErrors({ ...errors, email: '' });
    }
  };

  const validatePassword = (password) => {
    // Password should have numbers and letters and be at least 9 characters long
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/;
    if (!passwordRegex.test(password)) {
      setErrors({
        ...errors,
        password: 'Password should have numbers and letters and be at least 9 characters long',
      });
    } else {
      setErrors({ ...errors, password: '' });
    }
  };



  const validateForm = () => {
    validatePassword(formValues.password);

    // Check if there are any errors
    return !errors.password;
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={formValues.email}
            style={{ borderColor: errors.email ? 'red' : '' }}
          />
          <Form.Text className="text-danger">{errors.email}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
            style={{ borderColor: errors.password ? 'red' : '' }}
          />
          <Form.Text className="text-danger">{errors.password}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;


