export interface DividerProps {
    type?: 'rtl' | 'ltr';
}

export function Divider({ type = 'rtl' }: DividerProps) {

    return <div className={`w-full h-1 rounded-full ${type === 'rtl' ? 'divider-gradient-rtl' : 'divider-gradient-ltr'}`}></div>
}