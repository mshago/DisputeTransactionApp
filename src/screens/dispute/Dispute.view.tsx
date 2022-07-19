import React from 'react'
import { Text } from 'react-native'
import { Button } from '../../components/button/Button'
import { Container } from '../../components/container/Container'
import { TextInput } from '../../components/textInput/TextInput'
import { styles } from './Dispute.style'

export const DisputeScreenView = () => {
  return (
    <Container containerStyle={styles.container}>
      <TextInput multiline={true} numberOfLines={4}/>
      <Button title='Send dispute'/>
    </Container>
  )
}
