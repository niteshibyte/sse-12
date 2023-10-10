import { List, Stack, Text } from "@wonderflow/react-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SETSELECTEDDATA } from "../../../reducer/selectedData";
import { useRouter } from "next/router";
export const RightSidebar = () => {
    const [category, setCategory] = useState([])
    const [tags, setTags] = useState([])
    const [authors, setAuthors] = useState([])
    const { blog_Data } = useSelector((state: any) => state?.blogData);
    const selectedData = useSelector((state: any) => state?.selectedData)
    const [selectItem, setSelectItem] = useState<any>()
    const dispatch = useDispatch();
    const router = useRouter()
    useEffect(() => {
        setCategory(blog_Data?.select_categories)
        setTags(blog_Data?.select_tags)
        setAuthors(blog_Data?.select_authors)
        setSelectItem({ ...selectedData })
    }, [blog_Data, selectedData])
    const handleSelectItem = (type: string, data: string) => {
        if (selectItem?.blogTag == data && type == 'blogTag') {
            setSelectItem({ ...selectItem, [type]: '' })
            dispatch(SETSELECTEDDATA({ ...selectItem, [type]: '' }))
        } else if (selectItem?.blogCategory == data && type == 'blogCategory') {
            setSelectItem({ ...selectItem, [type]: 'All' })
            dispatch(SETSELECTEDDATA({ ...selectItem, [type]: 'All' }))
        } else if (selectItem?.blogAuthor == data && type == 'blogAuthor') {
            setSelectItem({ ...selectItem, [type]: '' })
            dispatch(SETSELECTEDDATA({ ...selectItem, [type]: '' }))
        }
        else {
            setSelectItem({ ...selectItem, [type]: data })
            dispatch(SETSELECTEDDATA({ ...selectItem, [type]: data }))
            router.push('#blog')
        }

    }

    return (
        <Stack as="div" rowGap={64} className="right--sidebar desktop-view">
            <Stack as="div" className="sidebar--block">
                <Text variant="heading-3">Categories</Text>
                <List className="category--list">
                    <List.Li onClick={() => handleSelectItem('blogCategory', 'All')} className={selectItem?.blogCategory == 'All' ? "active" : ""}>
                        <Text as="a" variant="heading-6">All</Text>
                    </List.Li>
                    {category?.length > 0 && category?.map((item: any, index: number) => {
                        return (
                            <List.Li variant="heading-6" onClick={() => handleSelectItem('blogCategory', item?.title)} className={selectItem?.blogCategory == item?.title ? "active" : ""} key={index}>
                                <Text as='a' variant="heading-6">{item?.title}</Text>
                            </List.Li>
                        )
                    })}

                </List>
            </Stack>
            <Stack as="div" className="sidebar--block mt-16">
                <Text variant="heading-3">Popular Tags</Text>
                <List className="tag--list">

                    {tags?.length > 0 && tags?.map((item: any, index: number) => {
                        return (
                            <List.Li variant="heading-6" className={selectItem?.blogTag == item?.title ? "active" : ""} onClick={() => handleSelectItem('blogTag', item?.title)}>
                                <Text as="a" variant="heading-6">{item?.title}</Text>
                            </List.Li>
                        )
                    })}

                </List>
            </Stack>
            <Stack as="div" className="sidebar--block mt-16">
                <Text variant="heading-3">Authors</Text>
                <List className="tag--list">

                    {authors?.length > 0 && authors?.map((item: any, index: number) => {
                        return (
                            <List.Li className={selectItem?.blogAuthor == item?.title ? "active" : ""} onClick={() => handleSelectItem('blogAuthor', item?.title)}>
                                <Text as="a" variant="heading-6">{item?.title}</Text>
                            </List.Li>
                        )
                    })}

                </List>
            </Stack>

        </Stack>
    );
}