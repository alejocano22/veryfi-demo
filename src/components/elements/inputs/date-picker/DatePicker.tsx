export interface DatePickerProps {
  id?: string;
  name?: string;
  label?: string;
  min?: string | number;
  max?: string | number;
  hideLabel?: boolean;
  required?: boolean;
  register?: any;
  additionalCss?: string;
}

const DatePicker = ({
  id,
  name,
  min,
  max,
  label,
  hideLabel,
  required,
  register,
  additionalCss,
}: DatePickerProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className={[
          hideLabel && 'sr-only',
          'block mb-1 text-xs lg:text-base',
        ].join(' ')}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type='date'
        min={min}
        max={max}
        required={required}
        {...register(name)}
        className={[
          'border rounded-md border-gray-light p-1 mr-1 lg:mr-5',
          additionalCss,
        ].join(' ')}
      />
    </>
  );
};

export default DatePicker;
