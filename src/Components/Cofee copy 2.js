import axios from 'axios';
import React, { useEffect } from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Cofee = () => {

    const [coffeeData, setCoffeeData] = useState(null);
    
    useEffect(() => {
        coffee()
    })
    const coffee = async () => {
        try{
            const response = await axios.get('https://api.sampleapis.com/coffee/ho');
            console.log(response.data)
        }
        catch(error){
            console.log(error);
        }
        finally{
            
        }


       

    }
    return (
        <ScrollView style={styles.container}>
        {coffeeData ? (
          coffeeData.map((coffee) => (
            <View key={coffee.id} style={styles.card}>
              <Text style={styles.title}>{coffee.title}</Text>
              <Image source={{ uri: coffee.image }} style={styles.image} />
              <Text style={styles.description}>{coffee.description}</Text>
              <Text style={styles.ingredientsTitle}>Ingredients</Text>
              <ul>
                {coffee.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <Text style={styles.ingredient}>{ingredient}</Text>
                  </li>
                ))}
              </ul>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    )
}

export default Cofee

        /* const response = await axios.get('https://api.sampleapis.com/coffee/hot').catch(error => console.log(error)).then(response => console.log(response.data)) */
