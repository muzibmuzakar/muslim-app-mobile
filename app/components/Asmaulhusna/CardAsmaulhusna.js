import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function CardAsmaulhusna({ latin, arabic }) {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.arabic}>{arabic}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{latin}</Text>
      </View>
    </TouchableOpacity>
  );
}

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
  },
  textContainer: {
    padding: 10,
  },
  arabic: {
    fontSize: 25,
    fontWeight: "normal",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "normal",
    color: "white",
    textAlign: "center",
  },
});

export default CardAsmaulhusna;
