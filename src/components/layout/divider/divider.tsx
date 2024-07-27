export interface DividerProps {
    className?: string;
    type?: 'rtl' | 'ltr';
}

export function Divider({ type = 'rtl', className = '' }: DividerProps) {

    return <div className={`w-full h-1 rounded-full 
        ${type === 'rtl' ? 'divider-gradient-rtl' : 'divider-gradient-ltr'} 
    ${className}`}>

    </div>
}