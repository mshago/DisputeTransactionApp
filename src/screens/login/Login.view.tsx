import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components/button/Button';
import {Container} from '../../components/container/Container';
import {Section} from '../../components/section/Section';
import {TextInput} from '../../components/textInput/TextInput';
import {styles} from './Login.style';
import {LoginScreenViewT} from './Login.types';

export const LoginScreenView: FC<LoginScreenViewT> = ({
  error,
  loading,
  handleLoginOnPress,
  fields,
  setFields,
}) => {
  const {username, password} = fields;

  return (
    <Container isScrollViewDisabled contentStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Section containerStyle={styles.textInputSection}>
        <TextInput
          title="username"
          value={username}
          onChangeText={(value: string) =>
            setFields({...fields, username: value})
          }
        />
      </Section>
      <Section containerStyle={styles.textInputSection}>
        <TextInput
          title="password"
          isSensitive
          value={password}
          onChangeText={(value: string) =>
            setFields({...fields, password: value})
          }
        />
      </Section>
      <Section containerStyle={styles.textInputSection}>
        <Button
          isLoading={loading}
          title="Login"
          onPress={handleLoginOnPress}
        />
      </Section>
    </Container>
  );
};
