import {useState} from 'react';

export const useLocalStorage = (key: any,  defaultValue: any)=>{
    const getInitialValue = () => localStorage.getItem(key) ?? defaultValue;
    const [value, setValue] = useState(getInitialValue);
    const setAndStoreValue = (newValue: string) => {
         setValue(newValue);
         localStorage.setItem(key, newValue);
    }; 
    return [value, setAndStoreValue];
}