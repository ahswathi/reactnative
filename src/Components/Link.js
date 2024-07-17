import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const Link = ({ url, children }) => {
  const handlePress = () => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <TouchableOpacity onPress={handlePress}  style={styles.underline}>
      <Text style={styles.linkText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkText: {
    fontSize: 14,
    color: '#19392C',
    textAlign: 'center',
    fontWeight: '600',
  },
  underline: {
    borderBottomWidth: 1,
    borderRadius: 6,
    borderColor: '#19392C',
    borderBottomColor:'#19392C', 
    
  }
  ,
});

export default Link;
