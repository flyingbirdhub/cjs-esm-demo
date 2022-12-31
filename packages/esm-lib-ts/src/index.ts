import { getMain } from './circular';

const foo = 'foo';
export const foo2 = 'foo2';
export default foo;
export const main = `${getMain()}-circular`;
