import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Cofee = () => {

  /*   const [coffeeData, setCoffeeData] = useState(null); */
    
    useEffect(() => {
        const coffeeData = async () => {
          try {
            const response = await axios.get('https://api.sampleapis.com/coffee/hot/$17');
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        coffeeData();
      }, []);

    return (<Text>Loading...</Text>
      /*   <ScrollView style={styles.container}>
        {coffeeData ? (
          coffeeData.map((coffee) => (
            <View key={coffee.id} style={styles.card}>
              <Text style={styles.title}>{coffee.title}</Text>
              <Image source={{ uri: coffee.image }} style={styles.image} />
              <Text style={styles.description}>{coffee.description}</Text>
              <Text style={styles.ingredientsTitle}>Ingredients</Text>
              
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView> */
    )
}


const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    card: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 3,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginBottom: 10,
    },
    description: {
      fontSize: 14,
      marginBottom: 10,
    },
    ingredientsTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    ingredient: {
      fontSize: 14,
    },
  });


export default Cofee

        /* const response = await axios.get('https://api.sampleapis.com/coffee/hot').catch(error => console.log(error)).then(response => console.log(response.data)) */
