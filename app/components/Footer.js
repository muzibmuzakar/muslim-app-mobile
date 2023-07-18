import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.footerContent}>
        <Text style={styles.footerText}>
          &copy; Portfolio By 
            <Text style={styles.linkText}> Muzib Muzakar</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },
  footerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: 'white',
  },
  linkText: {
    fontSize: 16,
    color: 'white',
    fontWeight: "700"
  },
});

export default Footer;