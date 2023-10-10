import React, { useState } from 'react'
import { Stack, Text, Toggle } from "@wonderflow/react-components";

export default function DownloadForm(props:any) {
          const [formFields, setFormFields] = useState({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    company: "",
                    accept: true,
                    subscribe: false
          })

          const [formErrors, setFormErrors] = useState({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    company: "",
                    accept: "",
                    subscribe: ''
          })

          const [formValidate, setFormValidate] = useState(false);

          const handleChange = (event: any, fieldName: any) => {

                    setFormFields({ ...formFields, [fieldName]: event.target.value })
          }
          const submit = async (e: any) => {
                    e.preventDefault();
                    const temp: any = {}

                    if (formFields?.first_name) {
                              temp["first_name"] = ''
                    } else {

                              temp["first_name"] = "This field is required"
                    }

                    if (formFields?.last_name) {
                              temp["last_name"] = ""
                    } else {
                              temp["last_name"] = "This field is required";
                    }

                    if (formFields?.email == '') {
                              temp["email"] = "This field is required"

                    } else if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formFields?.email))) {
                              temp["email"] = "This doens't look like an email"
                    } else {
                              temp["email"] = ""
                    }

                    if (formFields?.phone == '') {
                              temp["phone"] = "This field is required";

                    } else if (!(/^(\+\d{1,3}[- ]?)?\d{10}$/.test(formFields?.phone))) {
                              temp["phone"] = "Is this a valid phone number?"
                    } else {
                              temp["phone"] = ""
                    }

                    if (formFields?.company) {
                              temp["company"] = "";
                    } else {
                              temp["company"] = "This field is required";
                    }
                    if (formFields?.accept) {
                              temp['accept'] = ''
                    } else {
                              temp['accept'] = 'We need your consent in order to proceed.'
                    }
                    setFormErrors({ ...formErrors, ...temp })
                    if (temp.first_name == '' && temp?.last_name == '' && temp.email == '' && temp.company == '' && temp.phone == '' && temp?.accept == '') {

                             



                    }

                    return true;
          }


          return (
                    <>
                              {/* <Stack as="div" hPadding={48} vPadding={48} className="webform--form--block"> */}
                              <form className='mt-4' id="demoForm" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                                        <input type="hidden" name="oid" value="00D7Q000000KCPt" />
                                        <input type="hidden" name="retURL" value="https://wonderflow.netlify.app/thank-you-download" />
                                        <select hidden={true} id="lead_source" name="lead_source">
                                                  <option value="Inbound">Inbound</option>
                                        </select>

                                        <input hidden={true}  id="00N7Q000004vF1Z" maxLength={100} name="00N7Q000004vF1Z" size={20} type="text" value="Download Form" />
                                        <input hidden={true} id="00N7Q000004vAFn" maxLength={255} name="00N7Q000004vAFn" size={20} type="text"  value={props?.utm}/>
                                        <Stack as="div" direction='column' rowGap={24}>
                                        <Stack as="div" className='gridItem'>
                                                  <Stack as="div" className='formGroup'>
                                                            <label htmlFor="first_name">First Name</label>
                                                            <input required id="first_name" name="first_name" type="text" placeholder='Joe' onChange={(e) => handleChange(e, "first_name")} />
                                                            <Text as="div" variant="subtitle-2" color="danger">{formErrors?.first_name}</Text>
                                                  </Stack>
                                                  <Stack as="div" className='formGroup'>
                                                            <label htmlFor="last_name">Last Name</label>
                                                            <input required id="last_name" name="last_name" type="text" placeholder='Doe' onChange={(e) => handleChange(e, "last_name")} />
                                                            <Text as="div" variant="subtitle-2" color="danger">{formErrors?.last_name}</Text>
                                                  </Stack>
                                        </Stack>
                                        <Stack as="div" className='gridItem'>
                                                  <Stack as="div" className='formGroup'>
                                                            <label htmlFor="email">Business Email</label>
                                                            <input required id="email" name="email" type="text" placeholder='Email' onChange={(e) => handleChange(e, "email")} />
                                                            <Text as="div" variant="subtitle-2" color="danger">{formErrors?.email}</Text>
                                                  </Stack>
                                                  <Stack as="div" className='formGroup'>
                                                            <label htmlFor="phone">Phone</label>
                                                            <input required id="phone" name="phone" type="number" maxLength={10} minLength={10} placeholder='+1' onChange={(e) => handleChange(e, "phone")} />
                                                            <Text as="div" variant="subtitle-2" color="danger">{formErrors?.phone}</Text>
                                                  </Stack>
                                        </Stack>
                                        <Stack as="div" className='formGroup'>
                                                  <label htmlFor="company">Company</label>
                                                  <input required id="company" name="company" type="text" placeholder='Acme Ltd.' onChange={(e) => handleChange(e, "company")} />
                                                  <Text as="div" variant="subtitle-2" color="danger">{formErrors?.company}</Text>
                                        </Stack>
                                        <Stack as="div" className='toggleSwitch'>
                                                  <Toggle required defaultChecked={formFields.accept} onChange={(e) => setFormFields({ ...formFields, accept: !formFields.accept })} label="I accept the Terms and the Privacy policy" />
                                                  <Text as="div" variant="subtitle-2" color="danger">{formErrors?.accept}</Text>
                                        </Stack>
                                        <Stack as="div" className='toggleSwitch'>
                                                  <Text as="div" variant="subtitle-2" color="danger">{formErrors?.accept}</Text>
                                                  <Toggle required defaultChecked={formFields?.subscribe} onChange={(e) => setFormFields({ ...formFields, subscribe: !formFields?.subscribe })} label="Subscribe to the Newsletter" />
                                        </Stack>
                                        <Stack as="div" className='formBtn'>
                                                  <input type="submit" name="Request a demo" />
                                        </Stack>
                                        </Stack>
                              </form>
                              {/* </Stack> */}
                    </>
          )
}
