import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [selected, setSelected] = useState(new Date());

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      }
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        dateFormat="dd/MM/yyyy"
        placeholder="Data"
      />
      {error && <span>{error}</span>}
    </>
  );
}
