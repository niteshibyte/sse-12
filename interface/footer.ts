export interface after_copyright_menu {
          link: any[]
}

export interface social_share {
          social_share: any[]
}
export interface footerData {
          copyright_text: string
          after_copyright_menu: after_copyright_menu
          social: social_share

}
export interface logo{
          url:string,
          title:string
}
export interface footerLogo{
          logo:logo
          newsletter_form_text:string
}


export interface link{
          title:string
          href:string
}
export interface resources_menu{
          menu_title:string,
          link:link[]
}
export interface company_menu{
          menu_title:string
          link:link[]
}
export interface support_menu{
          menu_title:string
          link:link[]
}
export interface footerMenu{
          resources_menu:resources_menu
          company_menu:company_menu
          support_menu:support_menu
}