export function getPredefinedInitials(str: string, defaultInitials: string) {
    switch (str) {
        case 'mp':
            return 'MP';
        case 'odbx':
            return 'odbx';
        case 'mpds':
            return 'MPDS';
        default:
            return defaultInitials;
    }
}
