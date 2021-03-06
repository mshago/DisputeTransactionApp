import React, { FC } from "react";
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { colors } from "../../theme/colors";

import { styles } from "./Container.style";
import { TContainer } from "./Container.type";

export const Container: FC<TContainer> = ({
  children,
  isLoading = false,
  safeAreaStyle,
  containerStyle,
  contentStyle,
  isScrollViewDisabled = false,
  backgroundColor,
  isHeaderVisible = false,
  ...rest
})  => {
  const Container = isScrollViewDisabled ? View : ScrollView;

  const containerDynamicStyle = isScrollViewDisabled
    ? { style: [styles.container, containerStyle] }
    : { contentContainerStyle: containerStyle };

  if (isLoading) {
    return (
      <SafeAreaView
        style={[
          styles.loading,
          safeAreaStyle,
        ]}
        {...rest}
      >
        <ActivityIndicator size="large" color={colors.primary}/>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        safeAreaStyle,
        {backgroundColor}
      ]}
    >
      {/* {isHeaderVisible && <Header title={'Pokemon'}/>} */}
      <Container {...containerDynamicStyle} {...rest}>
        <View style={[styles.content, contentStyle]}>{children}</View>
      </Container>
    </SafeAreaView>
  );
};

