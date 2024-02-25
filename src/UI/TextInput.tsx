import React from "react";

interface TextInputProps{
    id: any;
    label: string;
    type:string;
    name:string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextInput :React.FC<TextInputProps> = ({id,label,type,name,onChange,...props}) => {
    return (
        <>
            <div>
                <label htmlFor={type} className="block text-sm font-medium leading-6 text-gray-900 flex items-start">
                    {label}
                </label>
                <div className="mt-2">
                    <input
                        id={id}
                        name={name}
                        type={type}
                        autoComplete={type}
                        required
                        onChange={onChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </>
    );
};
export default TextInput