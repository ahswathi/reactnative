
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";

function Splash() {

  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Cofee");
    }, 3000)
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#19392C' }}>

      <Image source={require("../images/logo.png")} />
      <Text style={{ fontSize: 20, color: '#EDF1B6', fontSize: 20, paddingTop: 10 }}>
        rdlocker
      </Text>

    </View>
  );
}



export default Splash;