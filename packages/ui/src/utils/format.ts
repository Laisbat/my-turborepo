export const numberFormater = (value: number, fractionDigits: number = 2) => {
    return new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits
    }).format(value);
}
export const numberForMoney = (value: number, fractionDigits: number = 2) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits
    }).format(value);
};
