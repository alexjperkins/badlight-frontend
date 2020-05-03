import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button } from '@material-ui/core'
import styled from 'styled-components'
import { ScreenContainer } from '../components/Layout'
import { Heading, Text } from '../components/Typography/Typography'
 
import Lamp from './logo.png'

const LampImg = styled.img`
  max-width: 60%
`

export const LandingPage: FC = () => {
  const history = useHistory()

  const linkTo = React.useCallback((path: string) => () => history.push(path), [
    history
  ])

  return(
    <ScreenContainer>
      <Box
        my={4}
        display="flex"
        justifyContent="center"
      >
        <Box maxWidth={['50%', '200px']}>
          <LampImg src={Lamp} alt="logo" />
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        minHeight={['100vh', '100%']}
        width={['100%', '500px']}
        margin="0 auto"
      >
        <Box>
          <Box mt={6}>
            <Heading gutterBottom>{`BadLight`}</Heading>
            <Text gutterBottom>
              {`The Personal Management Application`}
            </Text>
          </Box>

          
          <Box mt={6}>
            <Text gutterBottom>
              {`Coming Soon...`}
            </Text>
          </Box>

          <Box mt={4}>
            <Box>
              <Button
                disableElevation
                variant="contained"
                color="secondary"
                fullWidth
                onClick={linkTo('/signup/')}
              >
                {`Signup`}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ScreenContainer>
  )
}
