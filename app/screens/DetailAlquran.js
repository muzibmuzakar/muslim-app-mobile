import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SPACING from "../config/SPACING";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";
import Footer from "../components/Footer";

import axios from "axios";
import CardAyat from "../components/Alquran/CardAyat";
const logo = require("../../assets/logo-dark-01.png");

const DetailAlquran = ({ route }) => {
  const { number } = route.params;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await axios.get(
        `https://apimuslimify.vercel.app/api/v2/surah?number=${number}`
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
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

          <View style={{ marginVertical: SPACING * 4 }}>
          {isLoading ? (
              <View>
                
              </View>
            ) : (
            <View style={styles.header}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 3,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                {data.data && data.data.surah_number}
              </Text>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 25,
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  {data.data && data.data.transliteration}
                </Text>
                <Text
                  style={{
                    color: "gray",
                    fontSize: SPACING * 1.5,
                    textAlign: "center",
                  }}
                >
                  {data.data && data.data.translation}
                </Text>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 25,
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  {data.data && data.data.arabic}
                </Text>
                <Text
                  style={{
                    color: "gray",
                    fontSize: SPACING * 1.5,
                    textAlign: "center",
                  }}
                >
                  {data.data && data.data.total_ayat}
                </Text>
              </View>
            </View>
            )}
          </View>

          <View style={styles.app}>
            {isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.white} />
              </View>
            ) : (
              <View style={styles.app}>
                {data.data &&
                  data.data.ayat.map((item) => (
                    <CardAyat
                      number={item.ayat_number}
                      arabic={item.arabic}
                      translation={item.translation}
                      key={item.ayat_number}
                    />
                  ))}
              </View>
            )}
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
  header: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    margin: 10,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  loadingContainer: {
    marginVertical: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};
export default DetailAlquran;
