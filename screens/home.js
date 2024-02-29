import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
  Share,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { navigate } from "../utils/navigationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import Greetings from "../components/greeting";
import CustomCard from "../components/card";
import axios from "axios";
import ViewShot, { captureRef } from "react-native-view-shot";

export default function Home({ user, navigation }) {
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      // navigation.navigate("Login");
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  const [swipeEvent, setSwipeEvent] = useState(0);
  const [data, setData] = useState([]);
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (swipeEvent % 3 == 0) {
      console.log("API Call");
      setLoading(true);
      async function fetchData() {
        baseURL = "https://api.quotable.io/";
        const newQuotes = await axios.get(
          baseURL + "quotes/random?maxLength=70&tags=motivational&limit=3"
        );
        setData(newQuotes?.data);
        setLoading(false);
        setSwipeEvent(0);
      }

      fetchData();
    }
  }, [swipeEvent % 3]);

  useEffect(() => {
    const name = data[swipeEvent]?.content;
    setQuote(name);
  }, [data, swipeEvent]);

  // sharing on whatsApp
  const viewShotRef = useRef(null);
  const shareOnWhatsApp = async () => {
    try {
      const uri = await captureRef(viewShotRef, {
        format: "png",
      });
      await Share.share({
        url: uri,
      });
    } catch (error) {
      console.error("Error capturing and sharing:", error);
    }
  };

  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.homeHeader}>
        <Image
          source={require("../assets/user.png")}
          style={styles.userImage}
        />
        <View style={styles.greetAndName}>
          <Greetings />
          <Text onPress={handleLogout} style={styles.username}>
            {user.name}
          </Text>
        </View>
      </View>

      <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 1 }}>
        <View style={styles.customCardContainer}>
          <CustomCard
            loading={loading}
            quote={quote}
            setSwipeEvent={setSwipeEvent}
          />
        </View>
      </ViewShot>

      <View style={styles.shareButtonContainer}>
        <TouchableOpacity
          style={styles.shareButton}
          onPress={shareOnWhatsApp}
          activeOpacity={0.7}
        >
          <Text style={styles.shareButtonText}>Motivate Someone</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
