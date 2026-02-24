import { useState, useEffect, useRef } from 'react';

export const LoginForm = () => {

  const [formState, setFormState] = useState({
    matricula: '',
    nombre: '',
    apellidos: '',
    edad: '',
    universidad: '',
    carrera: ''
  });

  const [submitted, setSubmitted] = useState(null);
  const matriculaRef = useRef();

  useEffect(() => {
    matriculaRef.current.focus();
  }, []);

  useEffect(() => {
    console.log('Formulario actualizado:', formState);
  }, [formState]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = () => {
    setSubmitted(formState);
  };

  return (
    <div style={{
      maxWidth: '450px',
      margin: '40px auto',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '24px' }}>
        📋 Formulario de Registro
      </h1>
      <hr style={{ marginBottom: '20px' }} />

      {[
        { ref: matriculaRef, name: 'matricula', placeholder: '🎓 Matrícula' },
        { name: 'nombre',      placeholder: '👤 Nombre' },
        { name: 'apellidos',   placeholder: '👤 Apellidos' },
        { name: 'edad',        placeholder: '📅 Edad' },
        { name: 'universidad', placeholder: '🏫 Universidad' },
        { name: 'carrera',     placeholder: '📚 Carrera' },
      ].map(({ ref, name, placeholder }) => (
        <input
          key={name}
          ref={ref}
          type="text"
          placeholder={placeholder}
          name={name}
          value={formState[name]}
          onChange={onInputChange}
          style={{
            width: '100%',
            padding: '10px 14px',
            marginBottom: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '15px',
            boxSizing: 'border-box',
            outline: 'none',
          }}
        />
      ))}

      <button
        onClick={onSubmit}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#4f46e5',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '4px',
        }}
      >
        Enviar ✅
      </button>

      {submitted && (
        <div style={{
          marginTop: '24px',
          padding: '20px',
          backgroundColor: '#f0fdf4',
          borderRadius: '10px',
          border: '1px solid #86efac'
        }}>
          <h2 style={{ color: '#16a34a', marginBottom: '12px' }}>✅ Datos enviados:</h2>
          {Object.entries(submitted).map(([key, value]) => (
            <p key={key} style={{ margin: '6px 0', color: '#333' }}>
              <strong style={{ textTransform: 'capitalize' }}>{key}:</strong> {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};