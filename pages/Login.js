import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const Login = ({navigation}) => {
    return (
        <View style={styles.main}>
             <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
           
            <View style={styles.banner}>
                <View style={styles.bannerButtons}>
                    <BlurView intensity={150} style={{ borderRadius: 20 }}>
                        <TouchableOpacity style={styles.bannerButton1}>
                            <Ionicons name="language-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                    </BlurView>

                    <BlurView intensity={200} style={{ borderRadius: 20 }}>
                        <TouchableOpacity style={styles.bannerButton2}>
                            <Text style={styles.bannerButtonText}>Skip</Text>
                        </TouchableOpacity>
                    </BlurView>


                </View>

                <Image
                    style={styles.bannerImage}
                    source={require('../assets/login-banner.jpg')}
                />


            </View>

            <View style={styles.body}>
                <Text style={styles.heading}>India's #1 Food Delivery and Dining App</Text>

                <View style={styles.hrBox}>
                    <View style={styles.hr} />
                    <Text style={styles.hrBoxText}>Log in or sign up</Text>
                    <View style={styles.hr} />

                </View>

                <View style={styles.phoneBox}>
                    <View style={styles.country}>
                    <Image
                            style={styles.flagImage}
                            source={require('../assets/indianflag.png')}
                        />
                        <AntDesign name="caretdown" size={14} color="#aaa" />

                    </View>
                    <View style={styles.phone}>
                        <Text style={styles.phoneText}>+91</Text>
                        <TextInput style={styles.phoneTextInput} placeholder='Enter Phone Number' />

                    </View>

                </View>
                <TouchableOpacity style={styles.continueButton} onPress={()=>{
                    navigation.navigate("updateprofile")
                }}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>

                <View style={styles.hrBox2}>
                    <View style={styles.hr2} />
                    <Text style={styles.hrBoxText2}>or</Text>
                    <View style={styles.hr2} />

                </View>

                <View style={styles.others}>
                    <View style={styles.google}>
                        <Image
                            style={styles.googleImage}
                            source={require('../assets/googlelogo.png')}
                        />
                    </View>
                    <View style={styles.threedots}>
                    <Feather name="more-horizontal" size={24} color="black" />
                    </View>

                </View>
                <Text style={styles.agreeText}>By continuing, you agree to our</Text>
                <Text  style={styles.agreeLink}>Terms of Service  Privacy Policy  Content Policy</Text>




            </View>




        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',

    },
    banner: {
        flex: 2,
        backgroundColor: 'red',
    },
    bannerImage: {
        width: '100%',
        height: "100%",
    },
    bannerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        height: 50,
        paddingHorizontal: 20,
        position: 'absolute',
        top: 10,
        left: 0,
        zIndex: 100,

    },
    bannerButton1: {
        width: "auto",
        height: 35,
        backgroundColor: 'rgba(0,0,0,.4)',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerButton2: {
        width: "auto",
        height: 35,
        backgroundColor: 'rgba(0,0,0,.6)',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    bannerButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    body: {
        flex: 3,
        paddingTop: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        fontWeight: 800,
    },
    hrBox: {
        width: "90%",
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30,
    },
    hr: {
        width: '30%',
        height: 1,
        backgroundColor: '#ddd',
    },
    hrBoxText: {
        fontSize: 16,
        color: '#888',
        fontWeight: 500,
    },
    phoneBox: {
        width: "90%",
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    country: {
        width: "22%",
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,

    },
    flagImage:{
        width: 30,
        height: 20,

    },
    phone: {
        width: "75%",
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",




    },
    phoneText: {
        fontSize: 17,
        fontWeight: 500,
        color: "#555",
        marginRight: 3,


    },
    phoneTextInput: {
        height: "100%",
        width: "88%",
        fontSize: 17,
        color: "#888",

    },

    continueButton: {
        width: "90%",
        height: 50,
        backgroundColor: 'red',
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',


    },
    continueButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 500,

    },
    hrBox2: {
        width: "90%",
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    hr2: {
        width: '45%',
        height: 1,
        backgroundColor: '#ddd',
    },
    hrBoxText2: {
        fontSize: 16,
        color: '#888',
        fontWeight: 500,
    },
    others: {
        width: "35%",
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    google: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    threedots: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    googleImage: {
        width: '60%',
        height: '60%',
    },
    agreeText: {
        fontSize: 14,
        color: '#888',
        fontWeight: 500,
        textAlign: 'center',
    },
    agreeLink: {
        fontSize: 14,
        color: '#888',
        fontWeight: 500,
        textAlign: 'center',
        TextDecorationLiner: 'underline',
    },


})