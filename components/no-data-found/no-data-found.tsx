import React from 'react'
import { Button, IconButton, Stack, Text } from "@wonderflow/react-components";
import { useDispatch } from 'react-redux';
import { SETSELECTEDDATA } from '../../reducer/selectedData';
export default function NoDataFound() {
    const dispatch = useDispatch()
    return (
        <>
            <Stack as="div" className='noData' hAlign='center' rowGap={24} vPadding={64}>
                <Stack as="div" className='iconBlock'>
                    <IconButton icon="magnifying-glass"></IconButton>
                </Stack>
                <Stack as="div" rowGap={16}>
                    <Text as="h4" variant='heading-3' textAlign='center'>Sorry! No results found</Text>
                    <Text as="p" variant='body-1' textAlign='center'>Please try choosing other filters or reset all</Text>
                </Stack>
                <Stack as="div">
                    <Button kind='primary' onClick={() => dispatch(SETSELECTEDDATA(
                        { category: 'All', tag: "", whiteCategory: 'All', whiteTag: "", successCategory: "All", successTag: '', industry: "", analystCategory: "All", analystTag: "", bussinessCategory: "All", bussinesstag: '', blogCategory: "All", blogTag: "", blogAuthor: '' }
                    ))}>Reset all filters</Button>
                </Stack>
            </Stack>
        </>
    )
}
