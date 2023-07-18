import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

const CardAyat = ({ number, translation, arabic }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.arabic}>{arabic}</Text>
      </View>
      <Text style={styles.subTitle}>"{translation}"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  number: {
    fontSize: 15,
    fontWeight: "normal",
    color: "white",
    marginRight: 10,
  },
  arabic: {
    fontSize: 20,
    fontWeight: "normal",
    color: "white",
    maxWidth: "80%",
  },
  subTitle: {
    fontSize: 12,
    color: "gray",
    textAlign: "left",
    fontStyle: "italic",
  },
});

export default CardAyat;
