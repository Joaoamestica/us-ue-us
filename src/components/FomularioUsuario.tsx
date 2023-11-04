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
        rut: yup.string().test('rut-invalido', 'Rut invalido',validarRut),
        phone: yup.string().min(9,'Este campo debe tener 9 caracteres').max(9, 'Este campo debe tener 9 caracteres'),
        address: yup.string().max(100, 'Este campo debe tener maximo 100 caracteres' ),
        region: yup.string().required('Este campo debe ser requerido'),
        commune: yup.string().required('Este campo debe ser requerido'),
        message: yup.string().required('Este campo debe ser requerido')
      });

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        // firstName: "",
        name: "",
        email: "",
        rut: "",
        phone: "",
        address:"",
        region: "",
        commune: "",
        message: ""
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



                <label htmlFor="phone" className="label-inputs">Teléfono (*)</label>
                <input
                    placeholder="123456789"
                    className="campo-corto"
                    type="text"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {errors.phone && touched.phone && (<span className="help-text">{errors.phone}</span>)}




                <label htmlFor="address" className="label-inputs">Dirección de envío (*)</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Calle, Número, Depto., Villa, etc. (Máximo 100 caracteres)"
                    className="campo-formulario"
                    value={values.address}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {errors.address && touched.address && (<span className="help-text">{errors.address}</span>)}





                <label htmlFor="region" className="label-inputs">Región (*)</label>
                <input
                    type="text"
                    id="region"
                    name="region"
                    placeholder="Santiago"
                    value={values.region}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {errors.region && touched.region && (<span className="help-text">{errors.region}</span>)}




                <label htmlFor="commune" className="label-inputs">Comuna (*)</label>
                <input
                    type="text"
                    id="commune"
                    name="commune"
                    placeholder="La Florida"
                    value={values.commune}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {errors.commune && touched.commune && (<span className="help-text">{errors.commune}</span>)}




                <label htmlFor="message" className="label-inputs">Mensaje</label>
                <input
                    type="text"
                    placeholder="Dejar en el mesón de conserjería"
                    className="campo-formulario"
                    id="message"
                    name="message"
                    value={values.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {errors.message && touched.message && (<span className="help-text">{errors.message}</span>)}


              </div>
            </div>
            <button type="submit" className="boton-formulario">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
};


