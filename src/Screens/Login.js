import React, { useState, useEffect  } from 'react';
import { StatusBar } from 'react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native';
import styles from './styles';
import CustomButton from './CustomButton';

const Login = () => {

  const width = Dimensions.get('window').width;
  const [activeTab, setActiveTab] = useState('Register');
  const [fullName, setFullName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  useEffect(() => {
    StatusBar.setBackgroundColor('#f7f7a3'); // Set status bar background color
    StatusBar.setBarStyle('dark-content'); // Set status bar text color
  }, []);

  const renderRegisterContent = () => (
    <View>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter'
        placeholderTextColor="#999"
        value={fullName}
        onChangeText={setFullName}
      />
      <Text style={styles.label}>Email Id</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter'
        placeholderTextColor="#999"
        value={registerEmail}
        onChangeText={setRegisterEmail}
      />
      <Text style={styles.label}>Phone number</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter'
        placeholderTextColor="#999"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>

  );

  const renderLoginContent = () => (
    <View>
      <Text style={styles.label}>Email Id</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter'
        placeholderTextColor="#999"
        value={loginEmail}
        onChangeText={setLoginEmail}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter'
        placeholderTextColor="#999"
        value={loginPassword}
        onChangeText={setLoginPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View >
  );

  return (
    <View style={styles.container}>
      <View style={styles.section}>

        <View style={styles.logotext}>
          <Image source={require("../images/welcome.png")} />
          <Text style={{ fontSize: 26, color: '#19392C', paddingTop: 10, fontWeight: 900, }}>
            Welcome
          </Text>
          <Text style={{ fontSize: 14, color: '#19392C', textAlign: 'center', paddingHorizontal: 30, fontWeight: 400, }}>
            Create an account or log in to explore about our app
          </Text>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Login' && styles.activeTab]}
            onPress={() => setActiveTab('Login')}
          >
            <Text style={[styles.tabText, activeTab === 'Login' && styles.activetabText]}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Register' && styles.activeTab]}
            onPress={() => setActiveTab('Register')}
          >
            <Text style={[styles.tabText, activeTab === 'Register' && styles.activetabText]}>Register</Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'Register' ? renderRegisterContent() : renderLoginContent()}
      </View >
    </View >
  )
}

export default Login