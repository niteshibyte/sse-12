
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({
    api_key: process.env.NEXT_PUBLIC_API_KEY || '',
    delivery_token: process.env.NEXT_PUBLIC_DELIVERY_TOKEN || '',
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT || "",
    region: Contentstack.Region.EU,

})
export default {
    getHeader(page: string, entry_id: string,lang:string|undefined='en-us') {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id).language(lang=='undefined'?"en-us":lang)
                .includeFallback()
                .includeReference('solution_side_ss.reference')
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getFooter(page: string, entry_id: string,lang:string='en-us') {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    gewWebinareData(page: string, entry_id: string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()
                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeReference(["all_categories", "all_tags"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getWhitePaperData(page: string, entry_id: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .includeReference(["select_categories", "select_tags"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getHomePage(page: string, entry_id: string,lang:string='en-us') {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .includeReference(['partners', 'section_9_resources.reference', 'section_9_resources.reference.choose_categories', 'section_9_resources.reference.category', "section_four.side_slider.success_stories"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getWebinar(page: string, entry_id: string, currentPage: number, limit: number, option: any) {
        return new Promise((resolve, reject) => {
            const Query1 = (option?.category == 'All' || option?.category == undefined) ? {} : Stack.ContentType(page).Query().where('title', option?.category);
            const Query2 = (option?.tag == undefined || option?.tag == '') ? {} : Stack.ContentType(page).Query().where('title', option?.tag);

            // const result = await Stack.ContentType('content_type_uid').Query().referenceIn('brand', Query1).toJSON().find(); 
            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeFallback()
                .includeReference(['choose_categories', 'choose_tags'])
                .referenceIn("choose_categories", Query1)
                .referenceIn('choose_tags', Query2)
                // .where('uid',"bltfc6b8da2f59d819c")
                .addParam('include_count', 'true')
                .skip((currentPage - 1) * limit)
                .limit(limit)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getWhitePaperAPI(page: string, entry_id: string, currentPage: number, limit: number, option: any) {
        return new Promise((resolve, reject) => {
            const Query1 = (option?.whiteCategory == 'All' || option?.whiteCategory == undefined) ? {} : Stack.ContentType(page).Query().where('title', option?.whiteCategory);
            const Query2 = (option?.whitetag == undefined || option?.whitetag == '') ? {} : Stack.ContentType(page).Query().where('title', option?.whitetag);

            // const result = await Stack.ContentType('content_type_uid').Query().referenceIn('brand', Query1).toJSON().find(); 
            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeReference(['category', 'whitepapestags'])
                .referenceIn("category", Query1)
                .referenceIn('whitepapestags', Query2)
                // .where('uid',"bltfc6b8da2f59d819c")
                .addParam('include_count', 'true')
                .skip((currentPage - 1) * limit)
                .limit(limit)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },

    getSingleWhitePaper(page: string, url: string,lang:string) {

        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .includeReference(['category', 'whitepapestags'])

                .where('url', `/${url}`)
                .addParam('include_count', 'true')

                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getNotInWhitePaper(page: string, url: string,lang:string) {

        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .includeReference(['category', 'whitepapestags'])

                .notEqualTo('url', `/${url}`)
                .addParam('include_count', 'true')
                .limit(3)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getAllWhitePaper(page: string, limit: number) {

        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeReference(['category', 'choose_tags'])

                .addParam('include_count', 'true')
                .limit(limit)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getSingleWebinar(page: string, url: string,lang:string) {

        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .includeReference(['choose_categories', 'choose_tags'])
                .where('url', `/${url}`)
                .addParam('include_count', 'true')

                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getNotINWebinar(page: string, url: string,lang:string) {

        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang).includeReference(['choose_categories', 'choose_tags'])

                .notEqualTo('url', `/${url}`)
                .addParam('include_count', 'true')
                .limit(3)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getAllWebinar(page: string, limit: number) {

        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query().includeFallback().language(`${localStorage.getItem("lang") || 'en-us'}`).includeReference(['choose_categories', 'choose_tags'])

                .addParam('include_count', 'true')
                .limit(limit)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getWhitePaper(page: string, entry_id: string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()
                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeReference(["select_categories", "select_whitepapers", 'select_tags'])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getProductData(page: string, entry_id: string,lang:string='en-us') {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .includeReference(["partner_logos", "testimonial", "common_partner"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getDepartmentData(page: string, title: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)

                .Query()
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .where('url', title)
                .includeReference(["hero_banner", "newsletter", 'partner_logo', 'testimonial'])
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getIndustoryData(page: string, title: string,lang:string='en-us') {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .where('url', `/industries/${title}`)
                .includeReference(["hero_banner", "partner_logo", "testimonial", "newsletter", "section_resources.reference", "section_resources.reference.choose_categories"])
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getTouchPointPage(page: string, entry_id: string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()

                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeReference(['partners'])

                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },

    getSuccessStoryData(page: string, entry_id: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)
                .includeReference(["select_categories", "select_tags"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getSuccessStoryAPI(page: string, currentPage: number, limit: number, option: any) {

        return new Promise((resolve, reject) => {
            const Query1 = (option?.successCategory == 'All' || option?.successCategory == undefined) ? {} : Stack.ContentType(page).Query().where('title', option?.successCategory);
            const Query2 = (option?.successtag == undefined || option?.successtag == '') ? {} : Stack.ContentType(page).Query().where('title', option?.successtag);

            // const result = await Stack.ContentType('content_type_uid').Query().referenceIn('brand', Query1).toJSON().find(); 
            Stack.ContentType(page)
                .Query()
                .includeFallback()

                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeReference(['category', 'successtags'])
                .referenceIn("category", Query1)
                .referenceIn('successtags', Query2)
                // .where('uid',"bltfc6b8da2f59d819c")
                .addParam('include_count', 'true')
                .skip((currentPage - 1) * limit)
                .limit(limit)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getSuccessStoryAll(page: string, limit: number) {

        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Query()
                .includeFallback()

                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeReference(['category', 'successtags'])

                .addParam('include_count', 'true')
                .limit(limit)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getSuccessSingle(page: string, url: string,lang:string) {

        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)
                .includeReference(['category', 'successtags'])

                .where('url', `/${url}`)
                .addParam('include_count', 'true')

                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getSuccessRecent(page: string, url: string,lang:string) {

        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)
                .includeReference(['category', 'successtags'])

                .notEqualTo('url', `/${url}`)
                .addParam('include_count', 'true')
                .limit(3)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getSuccessStoryData1(page: string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Query()
                .includeFallback()

                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .where("title", "Using VoC tool to save €600K & 90% in consumer feedback analysis time")

                .includeReference(["select_categories", "select_tags"])
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getTouchPointEntry(page: string, title: string,lang:string='en-us') {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Query()
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)
                .where('url', title)
                .includeReference(["hero_banner", "newsletter", 'partners', 'testimonial'])
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getAboutUsPage(page: string, entry_id: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)
                .includeReference(["testimonials"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getContactUs(page: string, entry_id: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)
                .includeReference(["partners_contactus"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getRequestADemo(page: string, entry_id: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)

                .includeReference(["partners_contactus"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getCareer(page: string, entry_id: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)
                .includeReference(["partners_contactus"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getBecomeAPartner(page: string, entry_id: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)
                .includeReference(["partners"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    gewAnalystData(page: string, entry_id: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)
                .includeReference(["select_categories", "select_reports", "select_tags"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getAnalyst(page: string, entry_id: string, currentPage: number, limit: number, option: any) {
        return new Promise((resolve, reject) => {
            const Query1 = (option?.analystCategory == 'All' || option?.analystCategory == undefined) ? {} : Stack.ContentType(page).Query().where('title', option?.analystCategory);
            const Query2 = (option?.analystTag == undefined || option?.analystTag == '') ? {} : Stack.ContentType(page).Query().where('title', option?.analystTag);
            // const result = await Stack.ContentType('content_type_uid').Query().referenceIn('brand', Query1).toJSON().find(); 
            Stack.ContentType(page)
                .Query()
                .includeFallback()

                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeReference(['select_categories', 'select_tags'])
                .referenceIn("select_categories", Query1)
                .referenceIn('select_tags', Query2)
                // .where('uid',"bltfc6b8da2f59d819c")
                .addParam('include_count', 'true')
                .skip((currentPage - 1) * limit)
                .limit(limit)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },

    getSingleAnalyst(page: string, title: string,lang:string) {

        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .includeReference(['other_analyst_reports.select_categories'])
                .language(lang=='undefined'?"en-us":lang).includeReference(['select_categories', 'choose_tags', "other_analyst_reports"])

                .where('url', `/${title}`)
                .addParam('include_count', 'true')

                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getAllAnalysis(page: string, limit: number) {

        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()

                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeReference(['select_categories', 'choose_tags'])

                .addParam('include_count', 'true')
                .limit(limit)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getBIPageData(page: string, entry_id: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)
                .includeReference(["body_section.select_report_type", "body_section.select_report_categories", "select_popular_banner_report"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },

    getProductComperisions(page: string, option: any) {
        return new Promise((resolve, reject) => {

            const Query1 = (option?.bussinessCategory == 'All' || option?.bussinessCategory == undefined) ? {} : Stack.ContentType(page).Query().where('title', option?.bussinessCategory);
            const Query2 = (option?.bussinesstag == undefined || option?.bussinesstag == '') ? {} : Stack.ContentType(page).Query().where('title', option?.bussinesstag);

            Stack.ContentType(page)

                .Query().includeFallback().language(`${localStorage.getItem("lang") || 'en-us'}`).includeReference(['report_category', 'types'])
                .referenceIn("report_category", Query1)
                .referenceIn('types', Query2)
                // .where('uid',"bltfc6b8da2f59d819c")
                .addParam('include_count', 'true')
                // .skip((currentPage - 1) * limit)
                // .limit(limit)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getReport(page: string, option: any) {
        return new Promise((resolve, reject) => {
            const Query1 = (option?.bussinessCategory == 'All' || option?.bussinessCategory == undefined) ? {} : Stack.ContentType(page).Query().where('title', option?.bussinessCategory);
            const Query2 = (option?.bussinesstag == undefined || option?.bussinesstag == '') ? {} : Stack.ContentType(page).Query().where('title', option?.bussinesstag);

            Stack.ContentType(page)
                .Query()
                .includeFallback().language(`${localStorage.getItem("lang") || 'en-us'}`).includeReference(['categories', 'types'])
                .referenceIn("categories", Query1)
                .referenceIn('types', Query2)
                // .where('uid',"bltfc6b8da2f59d819c")
                .addParam('include_count', 'true')
                // .skip((currentPage - 1) * limit)
                // .limit(limit)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },

    getSingleProductComperisions(page: string, url: string,lang:string) {
        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .includeReference(['report_category', 'types', 'more_comparisons', 'more_comparisons.types'])

                .where('url', `/${url}`)
                .addParam('include_count', 'true')

                .limit(1)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getSingleReport(page: string, url: string,lang:string) {
        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .includeReference(['report_category', 'types'])
                .includeReference('other_voc_reports', 'other_voc_reports.types')
                .where('url', `/${url}`)
                .addParam('include_count', 'true')

                .limit(1)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },

    getBlogPage(page: string, entry_id: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id).language(lang=='undefined'?"en-us":lang)
                .includeFallback()
                .includeReference(["featured_posts", "featured_posts.select_category", 'select_authors', 'select_categories', 'select_tags'])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getAllBlog(page: string, currentPage: number, limit: number, option: any) {
        return new Promise((resolve, reject) => {
            const Query1 = (option?.blogCategory == 'All' || option?.blogCategory == undefined) ? {} : Stack.ContentType(page).Query().where('title', option?.blogCategory);
            const Query2 = (option?.blogTag == undefined || option?.blogTag == '') ? {} : Stack.ContentType(page).Query().where('title', option?.blogTag);
            const Query3 = (option?.blogAuthor == undefined || option?.blogAuthor == '') ? {} : Stack.ContentType(page).Query().where('title', option?.blogAuthor);

            // const result = await Stack.ContentType('content_type_uid').Query().referenceIn('brand', Query1).toJSON().find(); 
            Stack.ContentType(page)
                .Query()
                .includeFallback()

                .language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeReference(['select_category', 'select_tags', 'select_author'])
                .referenceIn("select_category", Query1)

                .referenceIn('select_tags', Query2)
                .referenceIn('select_author', Query3)

                // .where('uid',"bltfc6b8da2f59d819c")
                .addParam('include_count', 'true')
                .descending('publish_date')
                .skip((currentPage - 1) * limit)
                .limit(limit)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getSingleBlog(page: string, url: string,lang:string='en-us') {
        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .includeReference(['report_category', 'types'])
                .includeReference('select_author', 'select_category', 'select_tags')
                .where('url', `/${url}`)
                .addParam('include_count', 'true')

                .limit(1)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getNotInBlog(page: string, url: string, lang: string) {
        return new Promise((resolve, reject) => {

            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .language(lang=='undefined'?"en-us":lang)
                .includeReference(['report_category', 'types'])
                .includeReference('select_author', 'select_category', 'select_tags')
                .notEqualTo('url', `/${url}`)
                .addParam('include_count', 'true')

                .limit(3)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    getTeam(page: string, entry_id: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id)
                .includeFallback()

                .language(lang=='undefined'?"en-us":lang)
                .includeReference(["partners_contactus"])
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },

    getSalesForcePage(page: string, entry_id: string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Entry(entry_id).language(`${localStorage.getItem("lang") || 'en-us'}`)
                .includeFallback()
                .includeReference('')
                .toJSON()
                .fetch()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    adjustData(page: string, title: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)

                .Query()
                .includeFallback()
                .includeReference('partner_logo_s')

                .language(lang=='undefined'?"en-us":lang)
                .where('page_url.href', title)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
    salesForceData(page: string, title: string,lang:string) {
        return new Promise((resolve, reject) => {
            Stack.ContentType(page)
                .Query()
                .includeFallback()
                .includeReference('partner_logo_s')
                .language(lang=='undefined'?"en-us":lang)
                .where('url', title)
                .toJSON()
                .find()
                .then(
                    (result) => {
                        resolve(result)
                    },
                    (error) => {
                        reject(error)
                    }
                )
        },)
    },
   
}
