import React, { useRef, useEffect, useState } from 'react';
import Select from 'react-select/async';

import { useField } from '@rocketseat/unform';

export default function ReactSelect({
  name,
  label,
  options,
  multiple,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  function getDefaultValue() {
    if (!defaultValue) return null;

    if (!multiple) {
      return options.find(option => option.id === defaultValue);
    }

    return options.filter(option => defaultValue.includes(option.id));
  }

  return (
    <>
      <Select
        cacheOptions
        defaultOptions
        name={fieldName}
        loadOptions={options}
        isMulti={multiple}
        defaultValue={getDefaultValue()}
        ref={ref}
        onChange={option => setSelected(option.id)}
        selected={selected}
        getOptionValue={option => option.id}
        getOptionLabel={option => option.title}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </>
  );
}
