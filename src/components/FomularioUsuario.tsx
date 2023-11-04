import { useFormik } from "formik";
import * as yup from "yup";
import "./FormularioUsuario.css";
import { validate } from "rut.js";


export const FomularioUsuario = () => {

    function validarRut() {
        if(validate(values.rut)){
            return true;
        }else{
            return false;
        }
    }

    const basicSchema = yup.object().shape({
        // firstName: yup.string().min(4),
        name: yup.string().required('Este campo es requerido'),
        email: yup.string().email("Este campo debe ser email").required('Este campo es requerido'),
        rut: yup.string().test('rut-invalido', 'Rut invalido',validarRut)
      });

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        // firstName: "",
        name: "",
        email: "",
        rut: "",
      },
      validationSchema: basicSchema,

      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
      {/* CODIGO DE EJEMPLO*/}
      <div>FomularioUsuario</div>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          value={values.firstName}
          onBlur={handleBlur}
          className={errors.firstName && touched.firstName ? "error-input" : ""}
        />
        {errors.firstName && touched.firstName && (
          <p className="error-input">{errors.firstName}</p>
        )}

        <button type="submit"> Enviar datos</button>
      </form> */}

      <div className="contenedor-body-checkout">
        <div className="contenedor-envio">
          <div className="envio">1. Envío</div>

          <form className="datos-envio" onSubmit={handleSubmit}>
            <div className="campo-select">
              <div className="contenedor-inputs">

                <label htmlFor="name" className="label-inputs">
                  Nombre Completo (*)
                </label>
                <input
                  placeholder="Nombres y Apellidos"
                  className="campo-corto"
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.name && touched.name && (<span className="help-text">{errors.name}</span>)}


                <label htmlFor="email" className="label-inputs">Correo Electrónico (*)</label>
                <input
                    placeholder="nombre@servidor.com"
                    className="campo-corto"
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {errors.email && touched.email && (<span className="help-text">{errors.email}</span>)}



                <label htmlFor="rut" className="label-inputs">R.U.T. (*)</label>
                <input
                    placeholder="12.345.678-9"
                    className="campo-corto"
                    type="text"
                    id="rut"
                    name="rut"
                    value={values.rut}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {errors.rut && touched.rut && (<span className="help-text">{errors.rut}</span>)}








              </div>
            </div>
            <button type="submit" className="boton-formulario">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
};


