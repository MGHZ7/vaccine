export interface DividerProps {
    className?: string;
    type?: 'rtl' | 'ltr';
    hideIndicator?: boolean;
}

export function Divider({ type = 'rtl', hideIndicator = false, className = '' }: DividerProps) {

    return <div className={`relative w-full h-1 rounded-full shadow-2xl shadow-primary
        ${type === 'rtl' ? 'divider-gradient-rtl' : 'divider-gradient-ltr'} 
    ${className}`}>
        {!hideIndicator &&
            <div className={`absolute h-4 w-4 shadow-xl shadow-primary bg-primary rounded-full -top-1.5 
            ${type == 'rtl' ? 'left-0' : 'right-0'}`}></div>
        }
    </div>
}