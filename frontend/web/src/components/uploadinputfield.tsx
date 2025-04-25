import { RefObject } from "react";

interface datatype{
    title:string,
    inputref?:RefObject<HTMLInputElement | null>,
    handlefn:any
}

export const UploadField=({title,inputref,handlefn}:datatype)=>{

    return  <div className="w-1/2">
    <h1>{title}</h1>
    <label htmlFor='uploadimg' className="block rounded-xl border-1 cursor-pointer h-10 w-1/3 flex items-center justify-center text-sm font-medium text-gray-900">
              Choose file
              </label>
              <input onChange={handlefn} ref={inputref} className="hidden" id='uploadimg' type="file" />
</div>
}