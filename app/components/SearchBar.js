import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import SPACING from '../config/SPACING';

function SearchBar() {

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <Feather name="search" size={20} color="white" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#ffffff55"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
    paddingBottom: SPACING,
    marginHorizontal:SPACING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    backgroundColor: '#1e293b',
    padding: 8,
    borderRadius: SPACING,
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: SPACING,
    color: 'white',
    backgroundColor: '#1e293b',
    borderRadius: 5,
  },
});

export default SearchBar;
