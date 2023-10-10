
import { Button, Container, Stack, Textfield } from "@wonderflow/react-components";
import { SectionHead } from "../section-head/section-head";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
export const SubscribeForm = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required"),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors }: any = formState;
    const onSubmit = (data: any) => {
        reset({ email: '' })
    }
    return (
        <>
            <>
                <Container dimension="extra-large" padding={false} className="">
                    <Stack as="div" rowGap={32} vPadding={128} hPadding={24} className="mt-128 section--with--circle width--full bg--dark overflow-hidden mb--0">
                            {/* Circle Images */}
                            <Stack className="circle--highlight circle-left-top">
                                <img src="/red-circle.png" alt="Red Circle" />
                            </Stack>
                            <Stack className="circle--highlight circle-right-bottom">
                                <img src="/red-circle.png" alt="Red Circle" />
                            </Stack>

                            {/* Section Head */}
                            <SectionHead
                                title="Subscribe to the Wonder Newsletter"
                                headText="Sign up for our newsletter and stay up-to-date with the latest news and updates from our company!"
                            />

                            {/* Subscribe form */}
                            <Stack as="div" className="webform--form--block mt-8">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Stack direction="row" className="" rowGap={16} wrap>
                                        <Textfield id='email'
                                            {...register('email')}
                                            message={errors?.email?.message}
                                            type="email" placeholder="Your E-mail" />
                                        <Button type="submit" dimension="big">Subscribe</Button>
                                    </Stack>
                                </form>
                            </Stack>
                        </Stack>
                </Container>
            </>
        </>
    );
}