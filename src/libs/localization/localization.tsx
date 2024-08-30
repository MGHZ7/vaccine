export const getDirection = (locale?: string): 'ltr' | 'rtl' => {
    switch (locale) {
        case 'ar': return 'rtl';
        default: return 'ltr';
    }
}