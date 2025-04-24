interface datatype{
    title:string
}

export const UploadField=({title}:datatype)=>{

    return  <div className="w-1/2">
    <h1>{title}</h1>
    <label htmlFor='uploadimg' className="block rounded-xl border-1 cursor-pointer h-10 w-1/3 flex items-center justify-center text-sm font-medium text-gray-900">
              Choose file
              </label>
              <input className="hidden" id='uploadimg' type="file" />
</div>
}