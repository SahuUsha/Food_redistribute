import { RefObject } from "react";

interface datatype{
type:string,
placeholder?:string,
title:string,
inputref?: RefObject<HTMLInputElement | null>;
}

export const FormField=({type,placeholder,title,inputref}:datatype)=>{

    return <div className="w-1/2">
          <h1>{title}</h1>
          <input ref={inputref} className="h-12 rounded p-1 w-full border-1 border-gray-400 bg-skin-200 px-2" required type={type} placeholder={placeholder}/>
    </div>
}