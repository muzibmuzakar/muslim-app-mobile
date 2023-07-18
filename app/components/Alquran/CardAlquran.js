import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CardAlquran = ({ number, name, translation, arabic, ayat }) => {
  const navigation = useNavigation();

  const handleDetailPress = (id) => {
    navigation.navigate('DetailAlquran', { number });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => handleDetailPress(number)} >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{number}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{translation}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{arabic}</Text>
        <Text style={styles.subTitle}>{ayat}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        backgroundColor: "#1e293b",
        width: "100%",
        marginBottom: 10,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textContainer: {
        padding: 10,
      },
      title: {
        fontSize: 15,
        fontWeight: "normal",
        color: "white",
        textAlign: "center",
      },
      subTitle: {
        fontSize: 12,
        color: "gray",
        textAlign: "center",
      },
});

export default CardAlquran;
