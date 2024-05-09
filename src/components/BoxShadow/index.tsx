
import {  ReactNode } from 'react';

interface Props {
    children: ReactNode;
  }
  
const BoxShadow= ({children}:Props) =>  {
    return (<div className=" p-5 shadow-shadowBox rounded-3xl flex gap-8 mx-4">
        {children}
    </div>)
}

export default BoxShadow;

 

