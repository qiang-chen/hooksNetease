//统一引入.ts后缀的名字

// const context = require['context']('./modules', false, /\.ts$/);

// let obj = {};
// context.keys().forEach((key: any) => {
//     obj[key.slice(2).slice(0, -3)] = new (context(key)).default();
// });

// export default obj;
import Category from './modules/category';

export default {
    category: new Category()
};
