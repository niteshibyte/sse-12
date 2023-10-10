import { Button, Stack, Text,  Toggle } from "@wonderflow/react-components";
import { Modal } from "@wonderflow/react-components";
import { useState } from 'react';
export const PopupButton = (props: any) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [successModal, setSuccessModal] = useState<boolean>(false);
    return (
        <>
            {props.popupButton &&
                <Button className="" type="submit" onClick={() => setVisible(true)}>{props.popupButton}</Button>
            }

            <Stack as="div" className="">
                <Modal size="large"
                    isVisible={visible}
                    onCloseModal={() => setVisible(false)}
                    primaryAction={<Button>
                    </Button>}
                >
                   
                    <Modal.Content >
                        <Stack as="div" direction="row" className="webform--form--block form popup--form">
                            <Stack as="div" className="form--image">
                                <img src={props?.image} alt="Whitepaper Image" />
                            </Stack>
                            <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                                <Button className="close-button" onClick={() => setVisible(false)}>
                                    <img src="/close.svg" alt="close" />
                                </Button>
                                <Stack as="div" columnGap={32} vPadding={32} hPadding={48}>
                                    <Text as="h4" variant="heading-4" className="mb-8">Download the whitepaper</Text>
                                </Stack>
                                <input type="hidden" name="oid" value="00D7Q000000KCPt" />
                                <input type="hidden" name="retURL" value="https://wonderflow.netlify.app/thank-you-download" />
                                <input type="hidden" name="Marketing" value="Marketing" />
                                <input type="hidden" name="Campaigns" value="Campaigns" />
                                <input type="hidden" name="BDR" value="BDR" />
                                <input type="hidden" name="Sales Contact" value="Sales Contact" />
                                <input type="hidden" name="Partner" value="Partner" />
                                <input type="hidden" name="SalesNash" value="SalesNash" />
                                <input type="hidden" name="Referral" value="Referral" />
                                <input type="hidden" name="Renewal" value="Renewal" />
                                <input type="hidden" name="Apollo" value="Apollo" />
                                <input type="hidden" name="Other" value="Other" />
                                <select hidden={true} id="lead_source" name="lead_source" >
                                <option value="Inbound">Inbound</option>
                            </select>

                            <input hidden={true} id="00N7Q000004vF1Z" maxLength={100} name="00N7Q000004vF1Z" size={20} type="text" value="Content Download Popup" />
                            <input hidden={true} id="00N7Q000004vAFn" maxLength={225} name="00N7Q000004vAFn" size={20} type="text" value={props?.utm} />
                            <Stack as="div" className=' mt-4' direction="row" rowGap={16} columnGap={16} vPadding={16} hPadding={48}>
                                <Stack as="div" className='formGroup'>
                                    <label htmlFor="first_name">First Name</label>
                                    <input required id="first_name" name="first_name" type="text" placeholder='Joe' />
                                </Stack>
                                <Stack as="div" className='formGroup'>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input required id="last_name" name="last_name" type="text" placeholder='Doe' />
                                </Stack>
                            </Stack>
                            <Stack as="div" className=' mt-4' direction="row" rowGap={16} columnGap={16} vPadding={16} hPadding={48}>
                                <Stack as="div" className='formGroup'>
                                    <label htmlFor="email"> Email</label>
                                    <input required id="email" name="email" type="text" placeholder='Email' />
                                </Stack>
                                <Stack as="div" className='formGroup mt-4'>
                                    <label htmlFor="company">Company</label>
                                    <input required id="company" name="company" type="text" placeholder='Acme Ltd.' />
                                </Stack>
                            </Stack>

                            <Stack as="div" className='toggleSwitch mt-8' vPadding={16} hPadding={48}>
                                <Toggle required label="I accept the Terms and the Privacy policy" />
                            </Stack>
                            <Stack as="div" className='toggleSwitch mt-4' vPadding={16} hPadding={48}>
                                <Toggle label="Subscribe to the Newsletter" />
                            </Stack>
                            <Stack as="div" className='formBtn mt-8' vPadding={16} hPadding={48}>
                                <input type="submit" name="Request a demo" />
                            </Stack>

                        </form>
                    </Stack>
                </Modal.Content>
            </Modal>

            {/* Success Modal */}
            <Modal size="large"
                isVisible={successModal}
                onCloseModal={() => setSuccessModal(false)}
                primaryAction={<Button>
                </Button>}
            >
                <Modal.Content >
                    <Stack as="div" direction="row" className="webform--form--block form popup--form">
                        <Stack as="div" className="form--image">
                            <img src="/white-paper-form.svg" alt="Whitepaper Image" />
                        </Stack>
                        <form className="">
                            <Button className="close-button" onClick={() => setSuccessModal(false)}>
                                <img src="/close.svg" alt="close" />
                            </Button>
                            <Text as="h4" variant="heading-4" className="mb-8">Thank you for your interest</Text>
                            <Text as="p" variant="subtitle-1" className="mt-8">
                                We have emailed you the document download link
                            </Text>
                            <Text variant="subtitle-1" className="mt-4">
                                If you don’t see any mail from us, please check also your spam folder.
                            </Text>
                            <Text variant="subtitle-1" className="mt-4">
                                Do you want to see the Wonderboard in action? Book a demo with one of our specialist.
                            </Text>
                            <Stack direction="row" className="mt-8 parallel--btn" wrap columnGap={24} rowGap={8}>
                                <Button >Book a demo</Button>
                                <Button as="a" href="/resources/whitepaper/" className="secondary button">Back to Resources</Button>
                            </Stack>
                        </form>
                    </Stack>
                </Modal.Content>
            </Modal>
        </Stack >
        </>
    )
}