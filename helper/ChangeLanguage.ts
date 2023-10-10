export const ChangeLanguage=(lang:any,path:string,value:string)=>{
    return lang?`${path.replace(`?lang=${lang}`,`?lang=${value}`)}`:`${path}?lang=${value}`
}

export const changeUrl=(lang:any,path:string)=>{
    return lang?`${path}?lang=${lang}`:path
}