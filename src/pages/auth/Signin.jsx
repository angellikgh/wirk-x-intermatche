import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import cx from 'classnames';

import { useAuthDispatch, useAuthState } from '../../providers/authProvider';
import Logo from '../../images/logo.svg';
import TextInput from '../../components/Form/TextInput';
import FormGroup from '../../components/Form/FormGroup';
import { Header } from './components';

function Singin() {
  const navigate = useNavigate();
  const { onLogin } = useAuthDispatch();
  const { loading, error } = useAuthState();

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
      onLogin(values).then((res) => {
        if (res) navigate('/dashboard');
      });
    },
  });

  return (
    <div className="container mx-auto flex justify-center h-screen overflow-hidden">
      <section className="flex flex-col justify-center h-screen items-center flex-wrap">
        <div className="mb-[50px]">
          <img src={Logo} className="w-274 h-50" />
        </div>

        <div className="bg-white rounded-xl p-[40px] w-[364px] shadow-card">
          <Header title="Se connector" />
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
                disabled={loading}
              />
            </FormGroup>

            <FormGroup
              label="Mot de passe"
              error={formik.touched.password && Boolean(formik.errors.password)}
              errors={formik.touched.password && formik.errors.password}
            >
              <TextInput
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className={formik.errors.password ? 'border-danger' : ''}
                disabled={loading}
              />
            </FormGroup>

            <FormGroup>
              <p className={cx('text-danger mb-2', { hidden: !error })}>
                {error}
              </p>

              <button
                type="submit"
                className={cx('btn btn-primary', {
                  'bg-slate-300 hover:bg-slate-300 cursor-wait': loading,
                })}
                disabled={loading}
              >
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
