import { FC, useEffect, useMemo, useState } from 'react';
import { Form, Input } from 'antd';
import 'antd/dist/antd.css';
import './Login.scss';

interface FormData {
  username: string;
  password: string;
}

const validateUsername = (username: string): string | undefined => {
  if (username.length === 0) {
    return 'Please enter a username';
  }
};

const validatePassword = (password: string): string | undefined => {
  if (password !== 'synthwave-1984') {
    return 'Enter the correct password';
  }
};

const useLogin = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    setFormErrors((currentFormErrors) => {
      return {
        ...currentFormErrors,
        username: validateUsername(formData.username),
        password: validatePassword(formData.password),
      };
    });
  }, [formData]);

  const isSubmitEnabled = useMemo(() => {
    const isUsernameEmpty =
      !formData.username || formData.username.length === 0;
    const isPasswordEmpty =
      !formData.password || formData.password.length === 0;

    return !isUsernameEmpty && !isPasswordEmpty;
  }, [formData.username, formData.password]);

  return {
    isSubmitDisabled: !isSubmitEnabled,
    formData,
    setFormData,
    formErrors,
  };
};

const Login: FC = () => {
  const { isSubmitDisabled, formData, setFormData, formErrors } = useLogin();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 500,
        margin: '100px auto',
      }}
      className="login-page"
    >
      <h1>Welcome to Login</h1>
      <p>
        In this form, the username can be anything with at least 1 character,
        and the password must be "synthwave-1984"
      </p>
      <Form layout={'vertical'}>
        <Form.Item
          label={'Username'}
          validateStatus={Boolean(formErrors.username) ? 'error' : undefined}
          help={formErrors.username}
        >
          <Input
            placeholder={'Enter your username'}
            value={formData.username}
            onChange={(e) => {
              setFormData((currentForm) => {
                return {
                  ...currentForm,
                  username: e.target.value,
                };
              });
            }}
          />
        </Form.Item>

        <Form.Item
          label={'Password'}
          validateStatus={Boolean(formErrors.password) ? 'error' : 'success'}
          help={formErrors.password}
        >
          <Input
            name={'Password'}
            placeholder={'Enter your password'}
            value={formData.password}
            onChange={(e) => {
              setFormData((currentForm) => {
                return {
                  ...currentForm,
                  password: e.target.value,
                };
              });
            }}
          />
        </Form.Item>

        <button disabled={isSubmitDisabled}>Submit</button>
      </Form>
    </div>
  );
};

export default Login;
