import { TextField } from '../TextField';
import { useForm } from 'react-hook-form';
import { type CityFormModel, type FormSubmitHandler } from '../../models';
import React from 'react';

interface FormProps {
  onSubmit: FormSubmitHandler<CityFormModel>;
}

export const CityForm = ({ onSubmit }: FormProps) => {
  const { setError, handleSubmit, control } = useForm<CityFormModel>({
    mode: 'all',
    defaultValues: { city: '' },
  });

  const onSubmitHandler = handleSubmit((values) => onSubmit(values, { setError }));
  return (
    <form className={'gap-6 align-items-start w-100'} onSubmit={onSubmitHandler}>
      <TextField name={'city'} control={control} />
      <button className={'btn btn-secondary'} type={'submit'}>
        {'Submit'}
      </button>
    </form>
  );
};
