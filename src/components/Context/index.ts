//先展示一下context这个文件
import { createContext } from 'react';

//这个括号可以传一个默认值 只有当Context.Provider不设置value时这个空对象默认值才会生效
export const Context = createContext({});
