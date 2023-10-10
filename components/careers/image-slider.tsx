import { Card, Stack } from "@wonderflow/react-components";
export const ImageSlider = (props: any) => {
    return (
        <>
            <Card className="card--block" padding={false}>
                <Stack as="div" className="card--wrapper">
                    {props.cardImage &&
                        <Stack as="div" className="card--image">
                            <img src={props.cardImage} alt="Card Image" />
                            <img className="hover" src={props.cardImage1} alt="Card Image" />
                        </Stack>
                    }
                </Stack>
            </Card>
        </>
    )
}
