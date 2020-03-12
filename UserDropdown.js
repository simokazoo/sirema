import React, { Fragment, FunctionComponent, useState, useContext, useCallback } from 'react'
import { Menu, MenuItem, Typography, Button, Box } from '@material-ui/core'
import { KeyboardArrowDown, AccountCircle } from '@material-ui/icons'
import { useBreakpoint } from '@components/Hooks/useBreakpoint'
import { AuthContext } from '@portal/Application'
import { getUser, removeUserToken } from '@components/Hooks/useUserToken'
import { useHistory } from 'react-router'

export const UserDropdown: FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const history = useHistory()
  const { upLg } = useBreakpoint()
  const { setAuth } = useContext(AuthContext)
  const {
    profile: { prefix, firstName, lastName, suffix },
  } = getUser()

  const userName = `${prefix} ${firstName} ${lastName} ${suffix}`

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const handleLogout = useCallback((): void => {
    setAuth(false)
    removeUserToken()
    handleClose()
    history.push('/')
  }, [history, setAuth])

  return (
    <Fragment>
      <Button
        aria-controls='user-dropdown-menu'
        aria-haspopup='true'
        onClick={event => setAnchorEl(event.currentTarget)}
        endIcon={<KeyboardArrowDown />}
      >
        {upLg ? (
          <Typography variant='subtitle1' color='textSecondary'>
            {userName}
          </Typography>
        ) : (
          <Box pl={2} display='flex'>
            <AccountCircle />
          </Box>
        )}
      </Button>
      <Menu
        id='user-dropdown-menu'
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {!upLg && (
          <MenuItem disabled>
            <Typography variant='caption' color='textSecondary'>
              {userName}
            </Typography>
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography color='primary'>Logout</Typography>
        </MenuItem>
      </Menu>
    </Fragment>
  )
}
