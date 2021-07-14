import * as Yup from 'yup';
import { errors } from 'helpers/variables';
import { camelCaseStringToNormalText } from 'helpers/generic.methods';

/**
 * Lookup for a generic text field string
 **/
export const requiredText = Yup.string().required(field =>
  errors.fieldError(camelCaseStringToNormalText(field.path))
);
