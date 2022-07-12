import React from 'react'
import { View,Text,} from 'react-native'
import { Container } from '../../components/container/Container'
import { TextInput } from '../../components/textInput/TextInput'
import { styles } from './Login.style'

export const LoginView = () => {
  return (
    <Container isScrollViewDisabled contentStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput title='username'/>
      <TextInput title='password' isSensitive/>

    </Container>
  )
}
