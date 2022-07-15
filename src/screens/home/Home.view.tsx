import React, { FC } from 'react'
import { Text } from 'react-native'
import { Container } from '../../components/container/Container'
import { THomeScreenView } from './Home.type'

export const HomeScreenView:FC<THomeScreenView> = () => {
  return (
    <Container>
      <Text>HomeView</Text>
    </Container>
  )
}
