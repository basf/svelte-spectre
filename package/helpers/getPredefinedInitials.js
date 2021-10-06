export function getPredefinedInitials(str, defaultInitials) {
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
