import React from 'react'
import axios from 'axios'

import * as styles from './Contact.module.scss'

const Contact = () => {
  console.log(styles)
  const [successMessage, setSuccessMessage] = React.useState<
    React.ReactNode | string
  >('')
  const [errorMessage, setErrorMessage] = React.useState<
    React.ReactNode | string
  >('')
  const [submitButtonText, setSubmitButtonText] = React.useState<
    React.ReactNode | string
  >('Submit')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // eslint-disable-next-line
    // @ts-ignore
    const data = Object.fromEntries(new FormData(event.target))

    const emptyfields = Object.values(data).some(field => field === '')

    if (emptyfields) {
      setErrorMessage(
        <h2 className={styles.error}>
          Some required fields below are not filled in, please complete before
          submitting.
        </h2>
      )
    } else {
      setErrorMessage('')
      setSubmitButtonText('Submitting...')

      data['site'] = 'idea'
      data['subject'] =
        'Email from exampNew message from IDEA Landing site contact forme contact form site'

      axios
        .post(
          'https://9a8pmml6ca.execute-api.us-east-1.amazonaws.com/submit',
          JSON.stringify(data),
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then(() => {
          setSuccessMessage(
            <h2 className={styles.success}>Feedback Submitted</h2>
          )
          setSubmitButtonText('Submit')
        })
        .catch(_ => {
          setErrorMessage(
            <h2 className={styles.error}>
              There was an error submitting your request, please check your
              network connection and try again.
            </h2>
          )
          setSubmitButtonText('Submit')
        })
    }
  }

  return (
    <>
      <header className={styles.header}>
        <h1>Contact us</h1>
      </header>

      <form className={styles.main} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <p>
            We welcome questions and feedback about the site, its contents, or
            how to use the materials to provided here, as well as requests for
            technical assistance. Please use the form below to contact us.
          </p>
          <p>
            Your personal and contact information will only be used to respond
            to your input. Do not submit any proprietary or protected
            information via this form.
          </p>
        </div>
        <div className={styles.formRow}>{errorMessage}</div>
        <div className={styles.formRow}>
          <label className={styles.firstName} htmlFor="First_Name">
            First Name*
            <input type="text" id="First_Name" name="First_Name" />
          </label>
          <label className={styles.lastName} htmlFor="Last_Name">
            Last Name*
            <input type="text" id="Last_Name" name="Last_Name" />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.email} htmlFor="email">
            Email*
            <input type="text" id="email" name="email" />
          </label>
          <label className={styles.org} htmlFor="Organization">
            Organization*
            <input type="text" id="Organization" name="Organization" />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.body} htmlFor="body">
            Comment or question*
            <textarea id="body" name="body" maxLength={1200} />
            <p>200 Words</p>
          </label>
        </div>
        <div className={styles.formRow}>
          <button className={styles.submit}>{submitButtonText}</button>
        </div>
        <div className={styles.formRow}>{successMessage}</div>
      </form>
    </>
  )
}

export default Contact
