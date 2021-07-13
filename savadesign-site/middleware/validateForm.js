const Joi = require("joi");
const myCustomJoi = Joi.extend(require("joi-phone-number"));

export const validateForm = async (
  name = "",
  email = "",
  message = ""
) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(128).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(3)
      .required(),
    message: Joi.string().min(1).required(),
  });

  try {
    const value = await schema.validateAsync({ name, email, message });
    const data = await JSON.parse(JSON.stringify(value));
    return data;
  } catch (err) {
    return { errorMessage: err };
  }
};
