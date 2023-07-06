import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import * as ImagePicker from 'expo-image-picker';
import SelectDropdown from 'react-native-select-dropdown'
const UpdateProfile = () => {
    const [uri, setUri] = useState('../assets/googlelogo.png')
    const [image, setImage] = useState({ uri: "https://images.rawpixel.com/image_700/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg" });

    const [name, setName] = useState("Akash Chowdhury");
    const [phone, setPhone] = useState("9547655052");
    const [email, setEmail] = useState("akashaboutstudy@gmail.com");
    const [birthday, setBirthday] = useState("07/06/2003");
    const [gender, setGender] = useState("Male")

    const countries = ["Male", "Female", "Prefer not to say"]



    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            quality: 1,
        });
        setImage(result.assets[0]);
    };

    useEffect(() => {
        if (image.uri != "") {
            setUri(image.uri)
        }
        // console.log(image);


    }, [image])

    return (
        <View style={styles.main}>
            <StatusBar barStyle="dark-content" backgroundColor="#eee" translucent={false} />
            <View style={styles.top}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={styles.topText}>Complete your Profile</Text>

            </View>
           
                <View style={styles.imageSection}>
                    <TouchableOpacity onPress={pickImageAsync} style={{ width: 200, alignSelf: "center" }}>
                        <Image
                            style={styles.changeImage}
                            source={{ uri: uri }}
                        />
                        <Text style={styles.changeImageText}>Change Photo</Text>
                    </TouchableOpacity>





                </View>

                <View style={styles.form}>
                    <View style={styles.inputField}>
                        <Text style={styles.nameText}>Name*</Text>
                        <View style={styles.inputBox}>
                            <TextInput style={styles.input} placeholder='Enter Name' value={name} onChange={(e) => {
                                setName(e.nativeEvent.text)
                            }} />


                        </View>

                    </View>


                    <View style={styles.inputField}>
                        <Text style={styles.nameText}>Phone Number</Text>
                        <View style={styles.inputBox}>
                            <View style={styles.country}>
                                <Image
                                    style={styles.flagImage}
                                    source={require('../assets/indianflag.png')}
                                />
                                <Text> +91</Text>

                            </View>
                            <TextInput style={styles.phoneinput} placeholder='Enter Phone number' value={phone} onChange={(e) => {
                                setPhone(e.nativeEvent.text)
                            }} />
                            <Text style={styles.chageText}>Change</Text>

                        </View>

                    </View>

                    <View style={styles.inputField}>
                        <Text style={styles.nameText}>Email</Text>
                        <View style={styles.inputBox}>
                            <TextInput style={styles.input} placeholder='Enter Email ID' value={email} onChange={(e) => {
                                setEmail(e.nativeEvent.text)
                            }} />
                            <Text style={styles.chageText}>Change</Text>

                        </View>

                    </View>


                    <View style={styles.inputField}>
                        <Text style={styles.nameText}>Birthday</Text>
                        <View style={styles.inputBox}>
                            <TextInput style={styles.input} placeholder='Enter Email ID' value={birthday} readOnly={true} />


                        </View>

                    </View>
                    {/* <SelectDropdown
	data={countries}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/> */}
                    <View style={styles.inputField}>
                        <Text style={styles.nameText}>Gender</Text>
                        <View style={styles.inputBox}>
                            <TextInput style={styles.input} value={gender} onChange={(e) => {
                                setGender(e.nativeEvent.text)
                            }} />
                            <AntDesign name="caretdown" size={12} color="#ccc" />


                        </View>

                    </View>

                    <TouchableOpacity style={{ width: '100%', height: 50, backgroundColor: '#ff4242', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 500, color: '#fff' }}>Update Profile</Text>

                    </TouchableOpacity>
                </View>
                



        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    main: {
        flex: 1,

    },
    top: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    topText: {
        fontSize: 20,
        fontWeight: 500,
        marginLeft: 10,
    },
    imageSection: {
        width: '100%',
        height: 150,
    },
    changeImage: {
        width: 120,
        height: 120,
        borderRadius: 500,
        marginTop: 10,
        alignSelf: 'center',
    },
    changeImageText: {
        fontSize: 20,
        fontWeight: 500,
        alignSelf: 'center',
        marginTop: 10,
        color: '#ff4242',
    },
    form: {
        width: '100%',
        height: 300,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    inputField: {
        width: '100%',
        height: 50,
        marginTop: 10,
        marginBottom: 30,
    },
    nameText: {
        fontSize: 15,
        fontWeight: 500,
        color: '#111',
    },
    inputBox: {
        width: '100%',
        height: 30,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    input: {
        width: '80%',
        height: "100%",
        fontSize: 15,
        color: '#000',

    },
    phoneinput: {
        width: '60%',
        height: "100%",
        fontSize: 15,
        color: '#000',

    },
    chageText: {
        fontSize: 17,
        fontWeight: 500,
        color: '#ff4242',
    },
    country: {
        width: "19%",
        height: 20,
        borderColor: "#ccc",
        borderRightWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 10,
        marginRight: 10,

    },
    flagImage: {
        width: 30,
        height: 20,

    },


})