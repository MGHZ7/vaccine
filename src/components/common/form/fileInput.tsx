import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface FileInputProps {
    label: string;
    className?: '';
    fileInputProps: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

export function FileInput({ label, className = '', fileInputProps }: FileInputProps) {

    return <label className={`relative block px-8 py-2 rounded w-full text-center border border-primary 
        transition-all hover:bg-primary cursor-pointer ${className}`}>
        {label}
        <input
            {...fileInputProps}
            type="file" className={`-z-10 absolute opacity-0 w-0 h-0 ${fileInputProps.className ?? ''}`} />
    </label>
}