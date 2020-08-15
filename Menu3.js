import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { AirbnbRating } from 'react-native-ratings';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Comments from './comments/comments'

let openImagePickerAsync3 = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
}

export default function Menu3() {
    state = { value: 0, image: null };



    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>

                    <Text style={styles.header}>
                        Mahallah Ali Cafe
      </Text>

                    <Image
                        style={styles.customimage}
                        source={require('./assets/images/ali1.png')}
                    />



                    <Text style={styles.paragraph}>
                        Opening Hours
      </Text>


                    <Text style={styles.description}>
                        Monday-Sunday 8.00AM - 12.00PM
      </Text>


                    <Text style={styles.paragraph}>
                        Menu Highlight
      </Text>


                    <ScrollView horizontal={true}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View >
                                <Image
                                    style={styles.imageCarousel}
                                    source={require('./assets/images/ali2.jpg')}
                                />
                            </View>
                            <View style={{ paddingLeft: 11 }}>
                                <Image
                                    style={styles.imageCarousel}
                                    source={require('./assets/images/ali3.jpg')}
                                />
                            </View>
                            <View style={{ paddingLeft: 11 }}>
                                <Image
                                    style={styles.imageCarousel}
                                    source={require('./assets/images/ali4.jpg')}
                                />
                            </View>
                            <View style={{ paddingLeft: 11 }}>
                                <Image
                                    style={styles.imageCarousel}
                                    source={require('./assets/images/ali6.jpg')}
                                />
                            </View>
                            <View style={{ paddingLeft: 11 }}>
                                <Image
                                    style={styles.imageCarousel}
                                    source={require('./assets/images/ali5.jpg')}
                                />
                            </View>





                        </View>


                    </ScrollView>

                    <Text style={styles.paragraph}>
                        Reviews
      </Text>
                    <Comments />

                    <View style={styles.MainContainer}>


                        <TextInput
                            style={styles.TextInputStyleClass}
                            underlineColorAndroid="transparent"
                            placeholder={"Add your review here."}
                            placeholderTextColor={"#9E9E9E"}
                            numberOfLines={10}
                            multiline={true}
                        />

                    </View>
                    <View style={styles.imageCarousel}>
                        <Button
                            onPress={openImagePickerAsync3}
                            title="Take Photo"
                        />
                    </View>



                    <AirbnbRating />




                    <Button style={styles.MainContainer}
                        onPress={() => {
                            alert('Thank you for your feedback!');
                        }}
                        title="Submit"
                    />


                </View>
            </ScrollView>
        </SafeAreaView>



    );



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'auto',
    },
    description: {
        paddingLeft: 12,
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'auto',
    },
    header: {
        margin: 34,
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'auto',
    },
    customimage: {
        width: 300,
        height: 300,
        justifyContent: 'center',

    },
    heading: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'auto',

    },
    imageCarousel: {
        width: 100,
        height: 170,
        justifyContent: 'center',
        borderRadius: 10,
    },

    button: {
        width: 100,
        height: 170,
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    MainContainer: {

        flex: 1,
        paddingTop: 12,
        justifyContent: 'center',
        margin: 4


    },

    TextInputStyleClass: {

        textAlignVertical: 'top',
        textAlign: "left",
        padding: 11,
        height: 170,
        borderWidth: 2,
        borderColor: '#F5FCFF',
        borderRadius: 23,
        backgroundColor: "#FFFFFF",


    }

});
