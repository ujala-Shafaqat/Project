import React from "react";
export const Input =({type, className, name,value,onChange,inputId, placeholder,defaultValue,label,helperText,error}) => {
    console.log(value);
    return (
        <div>
            {label && <label className="block text-sm text-gray-600 font-bold mb-2">{label}</label>}
            {helperText && <label className="block text-sm text-gray-600">{helperText}</label>}
            <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            id={inputId}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={className}
            // className={'w-full shadow appearance-none rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
            />
            <p className="mt-2 text-sm text-red-600">{error}</p>
        </div>
    )
}









