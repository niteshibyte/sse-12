import React, { useState } from 'react'
import {  Stack, Text, Button, useBreakpointsConfig } from "@wonderflow/react-components";
import { Modal } from "@wonderflow/react-components";
type config = {
    colPadding: "24" | "64",
}
import htmlToTextConvert from '../../helper/htmlToTextConvert';
export default function TeamViewModal(props: any) {
    const [visible, setVisible] = useState<boolean>(false);
    const { matches, value } = useBreakpointsConfig<config>({
        md: { colPadding: "64" },
        lg: { colPadding: "64" },
        xl: { colPadding: "64" },
        fallback: { colPadding: "24" },
    });
    return (
        <>
<Button kind="secondary" className="" type="submit" onClick={() => setVisible(true)}>{props?.item?.button?.title}</Button>
            <Stack as="div" direction='column' className='media--row'>
                <Modal className="custom_modal"
                    isVisible={visible}
                    onCloseModal={() => setVisible(false)}
                    primaryAction={<Button> </Button>}
                >
                    <Modal.Content>
                        <Stack as="div" vAlign='start' className='teamDetail popup--form' direction='row'>
                            <Stack as="div" className='imgBlock'>
                                <img src={props?.item?.image?.url} alt="Team Image" />
                            </Stack>
                            <Stack as="div" hPadding={value.colPadding} vPadding={value.colPadding} className='teamMessage'>
                                <Button className="close-button" onClick={() => setVisible(false)}>
                                    <img src="/close.svg" alt="close" />
                                </Button>   
                                
                                <Stack as="div" direction='column' rowGap={16} columnGap={32}>
                                    <Text as="h3" variant='heading-3'>{props?.item?.name}</Text>
                                    <Stack as="div" className='popupDetail'>
                                       <div dangerouslySetInnerHTML={htmlToTextConvert(props?.item?.bio)} />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Modal.Content>

                </Modal>
            </Stack>
        </>
    )
}
