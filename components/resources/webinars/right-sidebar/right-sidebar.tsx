import { List, Stack, Text } from "@wonderflow/react-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SETSELECTEDDATA } from "../../../../reducer/selectedData";
import { useRouter } from "next/router";
export const RightSidebar = () => {
    const [category, setCategory] = useState([])
    const [tags, setTags] = useState([])
    const webinarData = useSelector((state: any) => state?.webinar?.webinar);
    const selectedData = useSelector((state: any) => state?.selectedData)
    const [selectItem, setSelectItem] = useState<any>()
    const dispatch = useDispatch();
    const router = useRouter()
    useEffect(() => {
        setCategory(webinarData?.all_categories)
        setTags(webinarData?.all_tags)
        setSelectItem({ ...selectedData })
    }, [webinarData, selectedData])



    const handleSelectItem = (type: string, data: string) => {

        if (selectItem?.tag == data && type == 'tag') {
            setSelectItem({ ...selectItem, [type]: '' })
            dispatch(SETSELECTEDDATA({ ...selectItem, [type]: '' }))
        } else if (selectItem?.category == data && type == 'category') {
            setSelectItem({ ...selectItem, [type]: 'All' })
            dispatch(SETSELECTEDDATA({ ...selectItem, [type]: 'All' }))
        }
        else {
            setSelectItem({ ...selectItem, [type]: data })
            dispatch(SETSELECTEDDATA({ ...selectItem, [type]: data }))
            router.push('#webinar')
        }



    }
    return (
        <Stack as="div" direction="column" rowGap={96} className="right--sidebar desktop-view">
            <Stack as="div" className="sidebar--block">
                <Text variant="heading-3">Categories</Text>
                <List className="category--list">
                    <List.Li onClick={() => handleSelectItem('category', 'All')} className={selectItem?.category == 'All' ? "active" : ""}>
                        <Text as="a" variant="heading-6">All</Text>
                    </List.Li>
                    {category?.length > 0 && category?.map((item: any, index: number) => {
                        return (
                            <List.Li onClick={() => handleSelectItem('category', item?.title)} className={selectItem?.category == item?.title ? "active" : ""} key={index}>
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
                            <List.Li className={selectItem?.tag == item?.title ? "active" : ""} onClick={() => handleSelectItem('tag', item?.title)}>
                                <Text as="a" variant="heading-6">{item?.title}</Text>
                            </List.Li>
                        )
                    })}

                </List>
            </Stack>
        </Stack>
    );
}