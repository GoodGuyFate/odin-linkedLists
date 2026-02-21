import { LinkedList } from './linked-list.js';

test('should create an empty list', () => {
    const list = new LinkedList();
    expect(list.head).toBe(null);
});