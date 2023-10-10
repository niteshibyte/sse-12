import { Button, Container, List, Stack, Text } from "@wonderflow/react-components";
import { MegaMenuFooter } from "./mega-menu-footer";
export const BecomeOurPartner = () => {
    return (
        <>
            <Container dimension="full" padding={false} className="mega--menu--list">
                <Stack as="div" direction="column" rowGap={64}>
                    <Container dimension="extra-large">
                        <Stack as="div" direction="row" wrap vAlign="center" columnGap={48} rowGap={48} hPadding={24}>
                            <Stack as="div" className="product--video--block">
                                <Stack as="div" className="product--video">
                                    <video width="100%" loop autoPlay muted>
                                        <source src="/video-1.mp4" type="video/mp4" />
                                    </video>
                                </Stack>
                                <Stack as="div" vPadding={16} hPadding={24} className="video--content">
                                    <Text as="h5" variant="heading-5" className="text--bold">Become Our Partner Menu</Text>
                                    <Text as="p" variant="body-1" className="mt-4">Get to know the product and the power your company is about to get</Text>
                                </Stack>
                            </Stack>

                            <Stack as="div" direction="row" wrap vAlign="start" rowGap={48} columnGap={48} className="product--menu--list">
                                <Stack as="div" direction="column" rowGap={24} className="mega--menu--block">
                                    <Stack as="div" className="menu--image">
                                        <img src="/product-menu-image.png" alt="Menu Icon" />
                                    </Stack>
                                    <Text as="p" variant="body-1">Get to know the product and the power your company is about to get</Text>
                                    <Button as="a" href="#" className="button secondary">Overview</Button>
                                    <List className="sub-mega-menu--list">
                                        <List.Li>
                                            <Text as="a" href="#">
                                                <img src="/m-icon-1.png" alt="Icon" />
                                                Data
                                            </Text>
                                        </List.Li>
                                        <List.Li>
                                            <Text as="a" href="#">
                                                <img src="/m-icon-2.png" alt="Icon" />
                                                Access
                                            </Text>
                                        </List.Li>
                                        <List.Li>
                                            <Text as="a" href="#">
                                                <img src="/m-icon-3.png" alt="Icon" />
                                                Analysis
                                            </Text>
                                        </List.Li>
                                    </List>
                                </Stack>

                                <Stack as="div" className="mega--menu--block">
                                    <List className="sub-mega-menu--list">
                                        <List.Li>
                                            <Text as="a" href="#">
                                                <img src="/m-icon-4.png" alt="Icon" />
                                                Industries
                                            </Text>
                                        </List.Li>
                                    </List>
                                    <Text as="p" variant="body-1">See how our product can be tailored to your business specifics:</Text>
                                    <List className="sub-menu-has-drop-menu">
                                        <List.Li>
                                            <Text as="a" href="#">
                                                Consumer Electronics
                                            </Text>
                                        </List.Li>
                                        <List.Li>
                                            <Text as="a" href="#">
                                                Beauty & Personal Care
                                            </Text>
                                        </List.Li>
                                        <List.Li>
                                            <Text as="a" href="#">
                                                Hospitality
                                            </Text>
                                        </List.Li>
                                        <List.Li>
                                            <Text as="a" href="#">
                                                FMCG
                                            </Text>
                                        </List.Li>
                                        <List.Li>
                                            <Text as="a" href="#">
                                                Retail
                                            </Text>
                                        </List.Li>
                                    </List>
                                    <Button as="a" href="#" className="button secondary">Learn more</Button>
                                </Stack>

                                <Stack as="div" className="mega--menu--block">
                                    <List>
                                        <List.Li>
                                            <Text as="a" href="#">
                                                <img src="/m-icon-5.png" alt="Icon" />
                                                Analysis
                                            </Text>
                                        </List.Li>
                                    </List>
                                    <Text as="p" variant="body-1">See what world-class analysts think about Wonderflow</Text>
                                    <Stack as="div" direction="row" wrap columnGap={16} rowGap={16} className="mega-menu--logos">
                                        <Text as="a" href="#">
                                            <img src="/m-logo-1.png" alt="Logo" />
                                        </Text>
                                        <Text as="a" href="#">
                                            <img src="/m-logo-2.png" alt="Logo" />
                                        </Text>
                                        <Text as="a" href="#">
                                            <img src="/m-logo-1.png" alt="Logo" />
                                        </Text>
                                        <Text as="a" href="#">
                                            <img src="/m-logo-2.png" alt="Logo" />
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>

                    <MegaMenuFooter />
                </Stack>
            </Container>
        </>
    );
}