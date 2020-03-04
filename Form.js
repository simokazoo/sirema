import React, { FunctionComponent } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@material-ui/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { FormikTextField } from '@components/MuiFormikElements/FormikTextField'
import { FormikSelect } from '@components/MuiFormikElements/FormikSelect'
import { ActionButton } from '@components/Buttons/ActionButton'

const validationSchema = (): Yup.ObjectSchema<
  Yup.Shape<
    object,
    {
      firstName: string
      lastName: string
      email: string
      role: string
    }
  >
> => {
  return Yup.object().shape({
    firstName: Yup.string().required('First Name mandatory'),
    lastName: Yup.string().required('Last Name mandatory'),
    email: Yup.string().email('email incorrect'),
    role: Yup.string().required('Role mandatory field'),
  })
}

interface FormProps {
  open: boolean
  handleClose: () => void
  firstName?: string
  lastName?: string
  email?: string
  role?: string
  handleDelete?: () => void
}

export const TeamMemberDialog: FunctionComponent<FormProps> = ({
  open,
  firstName = '',
  lastName = '',
  email = '',
  role = '',
  handleClose,
  handleDelete,
}) => {
  return (
    <Box onSubmit={e => e.stopPropagation()}>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title' maxWidth='xs' fullWidth>
        <Formik
          initialValues={{ firstName: firstName, lastName: lastName, email: email, role: role }}
          validationSchema={validationSchema}
          validateOnBlur={false}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false)
              handleClose()
            }, 2000)
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle id='form-dialog-title'>
                {!handleDelete ? 'Add name' : 'Change name'}
              </DialogTitle>
              <DialogContent>
                <FormikTextField label='First name' name='firstName' showAsterisk margin='dense' autoFocus />
                <FormikTextField label='Last name' name='lastName' showAsterisk margin='dense' />
                <FormikTextField label='Email' name='email' margin='dense' />
                <FormikSelect
                  showAsterisk
                  name='role'
                  label='Role mandatory'
                  margin='dense'
                  options={[
                    {
                      id: 'Admin',
                      name: 'Admin',
                    },
                    { id: 'Sales', name: 'Sales' },
                    {
                      id: 'Manager',
                      name: 'Manager',
                    },
                  ]}
                />
                {!!handleDelete && (
                  <ActionButton
                    variant='outlined'
                    onClick={() => {
                      handleDelete()
                      handleClose()
                    }}
                  >
                    Delete member
                  </ActionButton>
                )}
              </DialogContent>
              <DialogActions>
                <ActionButton onClick={handleClose}>Cancel</ActionButton>
                <ActionButton primary disabled={isSubmitting}>
                  {!handleDelete ? 'Add' : 'Save'}
                </ActionButton>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </Box>
  )
}
