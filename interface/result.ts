
export interface result_group{
          title:string
          description:string
}
export interface image{
          url:string
          title:string

}
export interface icon{
          url:string
}
export interface slider_group{
          image:image
          icon:icon
          description:string

}

export interface demo_cta{
          href:string
          title:string
}
export interface resultData{
          title:string
          description:string
          result_group:result_group[]
          slider_group:slider_group[]
          demo_cta:demo_cta
}