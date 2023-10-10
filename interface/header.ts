
export interface logo{
          title:string
          url:string
}

export interface headerData{
          logo:logo
}

export interface mainNav{
          title:string
          url:string
          sub_menu:logo[]
}

export interface login{
          href:string
          title:string
}
export interface call_us_group{
          country_code:string
          country_name:string
          country_number:string
}
export interface authNav{
          login:login
          call_us_group:call_us_group[]
          demo_request:login
          call_us:string
}