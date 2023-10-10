
export interface icon {
          url: string
          title: string
}
export interface stats{
          file_icon:icon
          stats_title:string
          tagline:string
}
export interface customer {
          icon: icon
          title: string
          stats:stats[]
          description:string
}
export interface more_stories_cta{
          href:string
          title:string
}
export interface successDecisionData {
          success_title: string
          success_subtitle: string
          customer: customer[]
          more_stories_cta:more_stories_cta
}