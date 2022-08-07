import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Logo from '../../images/logo.svg';
import TextInput from '../../components/Form/TextInput';
import FormGroup from '../../components/Form/FormGroup';
import { Header } from './components';

function Singup() {
  const validationSchema = yup.object({
    lastname: yup
      .string('Entrez votre nom de famille')
      .required('confirmer le mot de passe est requis'),
    firstname: yup
      .string('Entrez votre prénom')
      .required('Le prénom est requis'),
    email: yup
      .string('Entrer votre Email')
      .email('Entrer un email valide')
      .required('Email est requis'),
    password: yup
      .string('Tapez votre mot de passe')
      .required('Mot de passe requis'),
    confirmPassword: yup
      .string()
      .required('Veuillez confirmer votre mot de passe')
      .oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas'),
  });

  const formik = useFormik({
    initialValues: {
      lastname: '',
      firstname: '',
      email: '',
      password: '',
      confirmPassword: '',
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
          <Header title="S’inscrire" />
          <form onSubmit={formik.handleSubmit} method="post">
            <FormGroup
              label="Nom*"
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              errors={formik.touched.lastname && formik.errors.lastname}
            >
              <TextInput
                name="lastname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastname}
                className={formik.errors.lastname ? 'border-danger' : ''}
              />
            </FormGroup>

            <FormGroup
              label="Prénom*"
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              errors={formik.touched.firstname && formik.errors.firstname}
            >
              <TextInput
                name="firstname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstname}
                className={formik.errors.firstname ? 'border-danger' : ''}
              />
            </FormGroup>

            <FormGroup
              label="Email*"
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
              label="Mot de passe*"
              error={formik.touched.password && Boolean(formik.errors.password)}
              errors={formik.touched.password && formik.errors.password}
            >
              <TextInput
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className={formik.errors.password ? 'border-danger' : ''}
              />
            </FormGroup>

            <FormGroup
              label="Confirmez le mot de passe*"
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              errors={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            >
              <TextInput
                name="confirmPassword"
                type="password"
                className={formik.errors.confirmPassword ? 'border-danger' : ''}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
            </FormGroup>

            <FormGroup>
              <button type="submit" className="btn btn-primary">
                S’inscrire
              </button>
            </FormGroup>

            <div className="text-center text-sm">
              <span className="mr-1">Vous avez déjà un compte ?</span>
              <Link className="text-muted" to="/">
                Se connecter
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Singup;
