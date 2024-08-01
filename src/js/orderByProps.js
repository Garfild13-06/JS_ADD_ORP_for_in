export default function orderByProps(obj, order) {
    const orderedProps = [];
    const unorderedProps = [];

    // Сначала добавляем свойства по указанному порядку
    for (const prop of order) {
        if (prop in obj) {
            orderedProps.push({ key: prop, value: obj[prop] });
        }
    }

    // Добавляем оставшиеся свойства по алфавиту
    for (const prop in obj) {
        if (!order.includes(prop)) {
            unorderedProps.push({ key: prop, value: obj[prop] });
        }
    }

    unorderedProps.sort((a, b) => (a.key > b.key ? 1 : -1));

    return [...orderedProps, ...unorderedProps];
}
