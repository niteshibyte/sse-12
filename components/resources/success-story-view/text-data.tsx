'use client';
import {  Text } from "@wonderflow/react-components";

export const TextData = (props: any)=> {
    return (
        <>
            {props.Paragraph &&
                <Text as="p" className='fs-18 mt-4'>{props.Paragraph}</Text>
            }
            {props.titleSmall &&
                <Text as="p" className="fs-24 mt-4">{props.titleSmall}</Text>
            }
            {props.largeTitle &&
                <Text as="h2" variant='heading-3' className='mt-4'>{props.largeTitle}</Text>
            }
        </>
    )
}