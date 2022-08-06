import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Logo from '../../images/logo.svg';
import TextInput from '../../components/Form/TextInput';
import FormGroup from '../../components/Form/FormGroup';

function Singin() {
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // TODO: login
    },
  });

  return (
    <div className="container mx-auto flex justify-center h-screen overflow-hidden">
      <section className="flex flex-col justify-center h-screen items-center flex-wrap">
        <div className="mb-[50px]">
          <img src={Logo} className="w-274 h-50" />
        </div>

        <div className="bg-white rounded-xl p-[40px] w-[364px] shadow-card">
          <h1 className="text-center text-[24px] font-[600] mb-[20px]">
            Se connector
          </h1>
          <form onSubmit={formik.handleSubmit} method="post">
            <FormGroup
              label="Email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              errors={formik.touched.email && formik.errors.email}
            >
              <TextInput
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={formik.errors.email ? 'border-danger' : ''}
              />
            </FormGroup>

            <FormGroup
              label="Mot de passe"
              error={formik.touched.password && Boolean(formik.errors.password)}
              errors={formik.touched.password && formik.errors.password}
            >
              <TextInput
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
                className={formik.errors.password ? 'border-danger' : ''}
              />
            </FormGroup>

            <FormGroup>
              <button type="submit" className="btn btn-primary">
                Se connector
              </button>
            </FormGroup>

            <div className="text-center text-sm">
              <span className="mr-1">Vous n'avez pas encore de compte?</span>
              <Link className="text-muted" to="/signup">
                Inscription
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Singin;
