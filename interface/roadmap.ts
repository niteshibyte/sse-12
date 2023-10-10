
export interface success_image {
          url: string
          title: string

}
export interface taglines {
          tagline: string
}
export interface learn_more_cta {
          href: string
          title: string
}
export interface success_group {
          success_image: success_image
          category: string
          title: string
          taglines: taglines[]
          learn_more_cta: learn_more_cta
          description: string
}

export interface roadmapData {
          title: string
          long_title: string
          success_group: success_group[]

}