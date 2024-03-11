import { useController } from 'react-hook-form';

interface TextFieldProps {
  label?: string;
  name: string;
  control: any;
}

export const TextField = ({ label, name, control }: TextFieldProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  return (
    <div className={'form-field'}>
      <label className={'form-field-label'} htmlFor={name}>
        {label}
      </label>
      <input className={'form-field-input'} {...field} name={name} type={'text'} />
      {error && <p className={'txt txt-err'}>{'Invalid value'}</p>}
    </div>
  );
};
