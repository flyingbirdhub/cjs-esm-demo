import { getMain } from './circular';

const foo = 'foo';
export default foo;
export const main = `${getMain()}-circular`;
