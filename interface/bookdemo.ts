export interface icon{
          url:string
          title:string
}

export interface details{
          icon:icon
          title:string
}

export interface bookDemoData{
          tagline:string
          details:details[]
          contact_title:string
}

export interface error{
          message:string
          FieldValues:string

}

export interface bookDemoError{
          firstName:error
          lastName:error
          email:error
          phone:error
          company:error
          accept:error
          subscribe:error
}