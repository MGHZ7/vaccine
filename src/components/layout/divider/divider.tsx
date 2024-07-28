export interface DividerProps {
    className?: string;
    type?: 'rtl' | 'ltr';
}

export function Divider({ type = 'rtl', className = '' }: DividerProps) {

    return <div className={`relative w-full h-1 rounded-full 
        ${type === 'rtl' ? 'divider-gradient-rtl' : 'divider-gradient-ltr'} 
    ${className}`}>
        <div className={`absolute h-2 w-2 bg-primary rounded-full -top-0.5 ${type == 'rtl' ? 'left-0' : 'right-0'}`}></div>
    </div>
}