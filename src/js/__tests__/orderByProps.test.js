import orderByProps from '../orderByProps';

test('should sort properties according to order and alphabetically', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ['name', 'level'];
    const expected = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
    ];
    const result = orderByProps(obj, order);
    expect(result).toEqual(expected);
});

test('should sort properties alphabetically if no order is provided', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = [];
    const expected = [
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 },
        { key: 'name', value: 'мечник' },
    ];
    const result = orderByProps(obj, order);
    expect(result).toEqual(expected);
});

test('should return empty array for empty object', () => {
    const obj = {};
    const order = ['name', 'level'];
    const expected = [];
    const result = orderByProps(obj, order);
    expect(result).toEqual(expected);
});

test('should ignore properties not in the object', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ['name', 'level', 'nonexistent'];
    const expected = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
    ];
    const result = orderByProps(obj, order);
    expect(result).toEqual(expected);
});
