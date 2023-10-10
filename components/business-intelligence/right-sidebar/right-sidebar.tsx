import { List, Stack, Text } from "@wonderflow/react-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SETSELECTEDDATA } from "../../../reducer/selectedData";
import { useRouter } from "next/router";
export const RightSidebar = () => {
    const { body_section } = useSelector((state: any) => state?.bipage)
    const selectedData = useSelector((state: any) => state?.selectedData)
    const [selectItem, setSelectItem] = useState<any>()
    const dispatch = useDispatch();
    const router = useRouter()
    useEffect(() => {
        setSelectItem({ ...selectedData })
    }, [selectedData])


    const handleSelectItem = (type: string, data: string) => {

        if (selectItem?.bussinesstag == data && type == 'bussinesstag') {
            setSelectItem({ ...selectItem, [type]: '' })
            dispatch(SETSELECTEDDATA({ ...selectItem, [type]: '' }))
        } else if (selectItem?.bussinessCategory == data && type == 'bussinessCategory') {
            setSelectItem({ ...selectItem, [type]: 'All' })
            dispatch(SETSELECTEDDATA({ ...selectItem, [type]: 'All' }))
        }
        else {
            setSelectItem({ ...selectItem, [type]: data })
            dispatch(SETSELECTEDDATA({ ...selectItem, [type]: data }))
        }

        router.push('#report')

    }
    return (
        <>
            {body_section && <Stack as="div" direction="column" rowGap={96} className="right--sidebar desktop-view">
                <Stack as="div" className="sidebar--block">
                    <Text variant="heading-3">Categories</Text>
                    <List className="category--list">
                        <List.Li onClick={() => handleSelectItem('bussinessCategory', 'All')} className={selectItem?.bussinessCategory == 'All' ? "active" : ""}>
                            <Text as="a" variant="heading-6">All</Text>
                        </List.Li>
                        {body_section?.select_report_categories?.length > 0 && body_section?.select_report_categories?.map((item: any, index: number) => {

                            return (
                                <List.Li onClick={() => handleSelectItem('bussinessCategory', item?.title)} className={selectItem?.bussinessCategory == item?.title ? "active" : ""} key={index}>
                                    <Text as='a' variant="heading-6">{item?.title}</Text>
                                </List.Li>
                            )
                        })}

                    </List>
                </Stack>
                <Stack as="div" className="sidebar--block mt-16">
                    <Text variant="heading-3">Popular Tags</Text>
                    <List className="tag--list">

                        {body_section?.select_report_type?.length > 0 && body_section?.select_report_type?.map((item: any, index: number) => {
                            return (
                                <List.Li className={selectItem?.bussinesstag == item?.title ? "active" : ""} onClick={() => handleSelectItem('bussinesstag', item?.title)}>
                                    <Text as="a" variant="heading-6">{item?.title}</Text>
                                </List.Li>
                            )
                        })}

                    </List>
                </Stack>
            </Stack>}
        </>
    );
}