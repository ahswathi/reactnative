import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Link from '../Components/Link';

const Security = () => {
    const keys = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['0', 'backspace'],
    ];
    return (
        <View style={styles.container}>
            <View style={styles.arrow}>
                <Image source={require("../images/arrow-left.png")} />
            </View>

            <View style={styles.section}>

                <View style={styles.verifysection}>
                    <View style={styles.logotext}>
                        <Text style={{ fontSize: 26, color: '#19392C', paddingTop: 10, fontWeight: 900, }}>
                            Add Security Pin
                        </Text>
                        <Text style={{ fontSize: 14, color: '#19392C', textAlign: 'center', paddingHorizontal: 30, fontWeight: 400, }}>
                            Secure your login with security pin
                        </Text>
                    </View>

                    <View style={styles.codecontainer}>
                        <TextInput style={styles.code}
                            keyboardType="numeric"
                        />
                        <TextInput style={styles.code}
                            keyboardType="numeric"
                        />
                        <TextInput style={styles.code}
                            keyboardType="numeric"
                        />
                        <TextInput style={styles.code}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.keycontainer}>
                        {keys.map((row, rowIndex) => (
                            <View key={rowIndex} style={styles.row}>
                                {row.map((key) => (
                                    <TouchableOpacity key={key} style={styles.key}>
                                        <Text style={styles.keyText}>{key}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </View>

                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Security