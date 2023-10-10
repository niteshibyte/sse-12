import { Stack, List, Button, Drawer, OverlayContainer, useOverlayContext, Text, Accordion, AccordionItem, IconButton } from "@wonderflow/react-components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SETSELECTEDDATA } from "../../../reducer/selectedData";

export default function RightSidebarMobileMenu() {
    const [visible, setVisible] = useState<boolean>(false);
    const [category, setCategory] = useState([])
    const [tags, setTags] = useState([])
    const [authors, setAuthors] = useState([])
    const { blog_Data } = useSelector((state: any) => state?.blogData);
    const selectedData = useSelector((state: any) => state?.selectedData)
    const [selectItem, setSelectItem] = useState<any>()
    const dispatch = useDispatch();
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
        }

    }

    return (
        <>
            <Stack as="div" direction="row" vAlign="center" columnGap={8} className="mobile--menu--options">
                <Stack as="div" className="filterIcon" onClick={() => setVisible(!visible)}>
                    <Text as="h4" textAlign="end">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <g clip-path="url(#clip0_832_47011)">
                                <circle cx="4" cy="3.50781" r="3" fill="#1F2227" />
                                <circle cx="4" cy="10.5078" r="3" fill="#1F2227" />
                                <circle cx="4" cy="17.5078" r="3" fill="#1F2227" />
                                <rect y="2.50781" width="20" height="2" rx="1" fill="#1F2227" />
                                <rect y="9.50781" width="20" height="2" rx="1" fill="#1F2227" />
                                <rect y="16.5078" width="20" height="2" rx="1" fill="#1F2227" />
                            </g>
                            <defs>
                                <clipPath id="clip0_832_47011">
                                    <rect width="20" height="20" fill="white" transform="translate(0 0.507812)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Text>
                </Stack>
            </Stack>
            <OverlayContainer obfuscate={false} onClose={() => setVisible(false)}>
                {visible &&
                    <Drawer className="drawer--mobile">
                        <Stack as="div" className="mobile-menu-top-header" vAlign="center" hAlign="center" hPadding={24} vPadding={16}>
                            <Button>Reset</Button>
                            <Text as="p" variant="heading-6" textAlign="center">Filters</Text>
                            <IconButton icon={"xmark"} className="menu--btn toggle--btn cross" onClick={() => setVisible(false)}></IconButton>
                        </Stack>
                        <Accordion defaultOpen="1" className="right--sidebar">
                            <Stack as="div" hPadding={24}>
                                <AccordionItem value="1" summary="Categories" iconPosition="left">
                                    <Stack as="div" className="sidebar--block">
                                        <List className="category--list">
                                            <List.Li onClick={() => handleSelectItem('blogCategory', 'All')} className={selectItem?.blogCategory == 'All' ? "active" : ""}>
                                                <Text as="a" >All</Text>
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
                                </AccordionItem>
                                <AccordionItem value="2" summary="Popular Tags">
                                    <List className="tag--list">

                                        {tags?.length > 0 && tags?.map((item: any, index: number) => {
                                            return (
                                                <List.Li variant="heading-6" className={selectItem?.blogTag == item?.title ? "active" : ""} onClick={() => handleSelectItem('blogTag', item?.title)}>
                                                    <Text as="a" variant="heading-6">{item?.title}</Text>
                                                </List.Li>
                                            )
                                        })}

                                    </List>
                                </AccordionItem>
                                <AccordionItem value="3" summary="Top Writers">
                                    <List className="tag--list">

                                        {authors?.length > 0 && authors?.map((item: any, index: number) => {
                                            return (
                                                <List.Li className={selectItem?.blogAuthor == item?.title ? "active" : ""} onClick={() => handleSelectItem('blogAuthor', item?.title)}>
                                                    <Text as="a" >{item?.title}</Text>
                                                </List.Li>
                                            )
                                        })}

                                    </List>
                                </AccordionItem>
                            </Stack>
                        </Accordion>
                        <Button onClick={() => setVisible(false)} className="filterBtn" type="submit">Apply filters</Button>
                    </Drawer>
                }
            </OverlayContainer>
        </>
    )
}
