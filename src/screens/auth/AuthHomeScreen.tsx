import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackParamList} from "../../navigations/stack/AuthStackNavigator.tsx";
import {authNavigations} from "../../constants";

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authNavigations.AUTH_HOME>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Button title="로그인화면으로 이동" onPress={()=> navigation.navigate(authNavigations.LOGIN)}/>
          <Button title="회원가입으로 이동" onPress={()=> navigation.navigate(authNavigations.SIGNUP)}/>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
