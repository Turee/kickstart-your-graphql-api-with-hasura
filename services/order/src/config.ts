import * as yup from "yup";

interface Config {
  PORT: string;
  DATABASE_URL: string;
}

const config = yup.object().shape({
  PORT: yup.number().required(),
  DATABASE_URL: yup.string().required()
});

export default <Config>config.validateSync(process.env, { stripUnknown: true });
