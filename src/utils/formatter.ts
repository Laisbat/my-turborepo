import { format } from "date-fns";

export const formatNumber = (value: number, fractionDigits: number = 2) => {
    return new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits
    }).format(value);
}
export const formatNumberForMoney = (value: number, fractionDigits: number = 2) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits
    }).format(value);
};

export const formatDate = (value: string, formatString = 'dd/MM/yyyy HH:mm:ss') => {
    return format(new Date(value), formatString)
}

export const formatCpfCnpj = (value: string) => {
    value = `${value}`.replace(/[^\d]/g, '');

    if (value.length <= 11) {
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
        return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
}

export const formatStringForNumber = (text: string): number => {
    return `${text}`.length > 0 ? Number(`${text}`.replace(/[^0-9,-]/g, '').replace(',', '.')) : 0;
}