import './styles.scss';

export default function FormInput({label, handleChange, ...rest}) {
  return (
    <>
      {label && <label>{label}</label>}
      <input className="formInput" onChange={handleChange} {...rest} />
    </>
  );
}
