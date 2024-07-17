import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Link from '../Components/Link';

const Verify = () => {
    return (
        <View style={styles.container}>
            <View style={styles.arrow}>
                <Image source={require("../images/arrow-left.png")} />
            </View>
            <View style={styles.section}>

                <View style={styles.verifysection}>
                    <View style={styles.logotext}>
                        <Text style={{ fontSize: 26, color: '#19392C', paddingTop: 10, fontWeight: 900, }}>
                            Verify is that you?
                        </Text>
                        <Text style={{ fontSize: 14, color: '#19392C', textAlign: 'center', paddingHorizontal: 30, fontWeight: 400, }}>
                            One more step, please check your
                            verification code on your email
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


                    <View style={styles.logotext}>
                        <Text style={{ fontSize: 14, color: '#rgba(0, 0, 0, 0.4)', textAlign: 'center', paddingHorizontal: 30, fontWeight: 400, }}>
                            Don’t Receive the verification code?
                        </Text>
                        <Link url="#"> Resend Code</Link>
                        <Text style={{ fontSize: 14, color: '#F33D31', textAlign: 'center', paddingHorizontal: 30, fontWeight: 600, }}>
                            1:59
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Verify