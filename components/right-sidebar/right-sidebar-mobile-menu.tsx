import { Stack, List, Button, Drawer, OverlayContainer, useOverlayContext, Text, Accordion, AccordionItem, IconButton } from "@wonderflow/react-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StackWrapper from '../../helper/api'
export default function RightSidebarMobileMenu() {
    const [visible, setVisible] = useState<boolean>(false);
    const { onClose, titleId } = useOverlayContext();

    const [category, setCategory] = useState([])
    const [tags, setTags] = useState([])
    const webinarData = useSelector((state: any) => state?.webinar?.webinar);

    useEffect(() => {
      
        setCategory(webinarData?.all_categories)
        setTags(webinarData?.all_tags)
    }, [webinarData])


   

    return (
        <>
            <Stack as="div" direction="row" vAlign="center" columnGap={8} className="mobile--menu--options">
                <Stack as="div" hAlign="end" className="filterIcon" onClick={() => setVisible(!visible)}>
                    <IconButton dimension="big" kind="flat" icon={<svg width="20" height="21" viewBox="0 0 20 21" fill="none">
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
                    </svg>} />
                    
                </Stack>
            </Stack>
            <OverlayContainer obfuscate={false} onClose={() => setVisible(false)}>
                {visible &&
                    <Drawer className="drawer--mobile">
                        <Stack as="div" className="mobile-menu-top-header" vAlign="center" hAlign="center" hPadding={24} vPadding={16}>
                            <Button dimension="big" kind="flat" className="resetButton">Reset</Button>
                            <Text as="p" variant="heading-6" textAlign="center">Filters</Text>
                            <IconButton icon={"xmark"} className="menu--btn toggle--btn cross" onClick={() => setVisible(false)}></IconButton>
                        </Stack>
                        <Accordion defaultOpen="1" className="right--sidebar">
                            <Stack as="div" hPadding={24}>
                                <AccordionItem value="1" summary="Categories" iconPosition="left">
                                    <Stack as="div" className="sidebar--block">
                                        <List className="category--list">
                                            {category?.length > 0 && category?.map((item:any,index:number) => {
                                                return (
                                                    <List.Li key={index}>
                                                        <Text >{item?.title}</Text>
                                                    </List.Li>
                                                )
                                            })}
                                            
                                        </List>
                                    </Stack>
                                </AccordionItem>
                                <AccordionItem value="2" summary="Popular Tags">
                                    <List className="tag--list">
                                        <List.Li className="active">
                                            <Text as="a" href="#">Business</Text>
                                        </List.Li>
                                        <List.Li>
                                            <Text as="a" href="#">Marketing</Text>
                                        </List.Li>
                                        <List.Li>
                                            <Text as="a" href="#">Voice of the Customer</Text>
                                        </List.Li>
                                        <List.Li>
                                            <Text as="a" href="#">Financial</Text>
                                        </List.Li>
                                        <List.Li>
                                            <Text as="a" href="#">Technology</Text>
                                        </List.Li>
                                    </List>
                                </AccordionItem>
                                <AccordionItem value="3" summary="Top Writers">
                                    <List className="author--list">
                                        <List.Li>
                                            <Stack as="div" direction="row" vAlign="start" columnGap={16}>
                                                <Stack as="div" className="author--image">
                                                    <img src="/auth-1.png" alt="Author Image" />
                                                </Stack>
                                                <Stack as="div" className="author--meta">
                                                    <Text as="a" href="#">Bechir</Text>
                                                    <Text as="p" variant="body-1">VP of Product Growth</Text>
                                                </Stack>
                                            </Stack>
                                        </List.Li>
                                        <List.Li>
                                            <Stack as="div" direction="row" vAlign="start" columnGap={16}>
                                                <Stack as="div" className="author--image">
                                                    <img src="/auth-2.png" alt="Author Image" />
                                                </Stack>
                                                <Stack as="div" className="author--meta">
                                                    <Text as="a" href="#">Bechir</Text>
                                                    <Text as="p" variant="body-1">VP of Product Growth</Text>
                                                </Stack>
                                            </Stack>
                                        </List.Li>
                                        <List.Li>
                                            <Stack as="div" direction="row" vAlign="start" columnGap={16}>
                                                <Stack as="div" className="author--image">
                                                    <img src="/auth-3.png" alt="Author Image" />
                                                </Stack>
                                                <Stack as="div" className="author--meta">
                                                    <Text as="a" href="#">Bechir</Text>
                                                    <Text as="p" variant="body-1">VP of Product Growth</Text>
                                                </Stack>
                                            </Stack>
                                        </List.Li>
                                        <List.Li>
                                            <Stack as="div" direction="row" vAlign="start" columnGap={16}>
                                                <Stack as="div" className="author--image">
                                                    <img src="/auth-4.png" alt="Author Image" />
                                                </Stack>
                                                <Stack as="div" className="author--meta">
                                                    <Text as="a" href="#">Bechir</Text>
                                                    <Text as="p" variant="body-1">VP of Product Growth</Text>
                                                </Stack>
                                            </Stack>
                                        </List.Li>
                                        <List.Li>
                                            <Stack as="div" direction="row" vAlign="start" columnGap={16}>
                                                <Stack as="div" className="author--image">
                                                    <img src="/auth-5.png" alt="Author Image" />
                                                </Stack>
                                                <Stack as="div" className="author--meta">
                                                    <Text as="a" href="#">Bechir</Text>
                                                    <Text as="p" variant="body-1">VP of Product Growth</Text>
                                                </Stack>
                                            </Stack>
                                        </List.Li>
                                    </List>
                                </AccordionItem>
                            </Stack>
                        </Accordion>
                        <Button className="filterBtn" type="submit">Apply filters</Button>
                    </Drawer>
                }
            </OverlayContainer>
        </>
    )
}
