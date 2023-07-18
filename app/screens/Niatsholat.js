import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SPACING from "../config/SPACING";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import CardMenu from "../components/CardMenu";
import { DataMenu } from "../data/DataMenu";
import Footer from "../components/Footer";
import CardNiatshalat from "../components/Niatshalat/CardNiatshalat";
import Data from "../data/niatshalat.json";
const logo = require("../../assets/logo-dark-01.png");

const Niatsholat = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredData, setFilteredData] = useState(Data.data);
  const handleSearch = (text) => {
    setSearchKeyword(text);
  
    const filtered = Data.data.filter((item) =>
      item.name && item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          {/* header */}
          <View
            style={{
              paddingTop: SPACING * 4,
              paddingHorizontal: SPACING,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* logo */}
            <TouchableOpacity
              style={{
                borderRadius: SPACING,
                overflow: "hidden",
                width: SPACING * 5,
                height: SPACING * 4,
              }}
            >
              <View
                style={{
                  height: "100%",
                }}
              >
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  source={logo}
                />
              </View>
            </TouchableOpacity>
            {/* logo mode */}
            <TouchableOpacity
              style={{
                borderRadius: SPACING,
                overflow: "hidden",
                width: SPACING * 5,
                height: SPACING * 4,
              }}
            >
              <View
                style={{
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Feather name="sun" size={SPACING * 2} color="white" />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: SPACING * 8 }}>
            <Text
              style={{
                color: colors.white,
                fontSize: SPACING * 3.5,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Niat Sholat
            </Text>
          </View>

          {/* serach */}
          <View style={styles.scontainer}>
            <View style={styles.searchContainer}>
              <View style={styles.iconContainer}>
                <Feather name="search" size={20} color="white" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="#ffffff55"
                onChangeText={(text) => handleSearch(text)}
                value={searchKeyword}
              />
            </View>
          </View>

          <View style={styles.app}>
            {filteredData.map((item) => {
              return (
                <CardNiatshalat name={item.name} arabic={item.arabic} translation={item.translation} key={item.number} />
              );
            })}
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  app: {
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
  },
  scontainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#1e293b",
    paddingBottom: SPACING,
    marginHorizontal: SPACING,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    backgroundColor: "#1e293b",
    padding: 8,
    borderRadius: SPACING,
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: SPACING,
    color: "white",
    backgroundColor: "#1e293b",
    borderRadius: 5,
  },
};
export default Niatsholat;
