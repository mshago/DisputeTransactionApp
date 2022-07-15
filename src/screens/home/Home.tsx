import React, { FC } from 'react'
import { Container } from '../../components/container/Container'
import { THomeScreen } from './Home.type'
import { HomeScreenView } from './Home.view'

export const HomeScreen:FC<THomeScreen> = () => {
  return (
    <HomeScreenView/>
  )
}
