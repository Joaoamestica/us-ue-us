import * as Yup from "yup";


export const usuarioSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });