import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";

export type FormSubmitHandler<T extends FieldValues, F = object> = (
  data: T,
  form: Partial<
    Pick<UseFormReturn<T>, 'setValue' | 'setError' | 'setFocus' | 'clearErrors' | 'reset' | 'resetField' | 'unregister'>
  > &
    F,
) => ReturnType<SubmitHandler<T>>;

export enum CityNameFormFields {
  city = 'city',
}

export interface CityFormModel {
  [CityNameFormFields.city]: string;
}
