/*
 * @Author: chenqiang
 * @Date: 2019-10-03 12:16:19
 * @Last Modified by: chenqiang
 * @Last Modified time: 2019-10-03 12:38:50
 * 此组件是一个自定义的受控组件的封装
 */
import { useState } from 'react';
function InputValue(defaultValue: string) {
    const [value, setValue] = useState(defaultValue);
    return {
        value,
        onChange: (e: any) => setValue(e.target.value)
    };
}

export default InputValue;
