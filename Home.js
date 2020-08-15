import React, { Component } from "react";
import { Image, Text, View, StyleSheet, Button,ScrollView,TextInput } from 'react-native';




export default class Home extends Component {
    render() {
        return (

            
            <View style={styles.container}>
            <ScrollView>
                    <View>
                        <Button style={styles.button1}

                            onPress={() => this.props.navigation.navigate('profile')} title="Profile">
                        </Button>
                    </View>
                    <View>
                        <Text style={styles.header}>
                        
                        IIUM Food Review</Text>

                        
                    </View>


                    <View style={styles.formContent}>
                        <View style={styles.inputContainer}>
                            <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/search/androidL/100/000000' }} />
                            <TextInput style={styles.inputs}
                                ref={'txtSearch'}
                                placeholder="Search"
                                underlineColorAndroid='transparent'
                                onChangeText={(name_address) => this.setState({ name_address })} />
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',}}>

                    

                        <Image style={styles.imageCarousel}
                        source={{ uri: "https://pbs.twimg.com/media/C8X98RuV0AAB6r_.jpg" }}  />
                      
                      
                        <View style={styles.customimage}>
                            <Button style={styles.button1}
                                onPress={() => this.props.navigation.navigate('Menu')} title="Student Mall">
                            </Button>
                      </View>
                      

                        <Image style={styles.imageCarousel}
                         source={{ uri: "https://news.iium.edu.my/wp-content/uploads/2019/07/photo6174793221134198964.jpg" }}  />
                        <View style={styles.customimage}>
                            <Button style={styles.button1}

                                onPress={() => this.props.navigation.navigate('Menu2')} title="Kulliyyah of Islamic Revelaed Knowledge and Human Sciences">
                            </Button>


                     </View>
                  
                        <Image style={styles.imageCarousel}
                        source={{ uri: "https://4.bp.blogspot.com/-4nnRqM1wuXw/TrI1VFiVQtI/AAAAAAAABnA/8liaMIdr8Sw/s1600/01112011449.jpg" }}  />
                        <View style={styles.customimage}>
                            <Button style={styles.button1}
                                onPress={() => this.props.navigation.navigate('Menu3')} title="Mahallah Ali">
                            </Button>
                        </View>
                     
                        <Image style={styles.imageCarousel}
                        source={{ uri: "https://pbs.twimg.com/media/EP0qOoiUwAAk79Z.jpg" }}  />
                        <View style={styles.customimage}>
                            <Button style={styles.button1}
                                onPress={() => this.props.navigation.navigate('Menu4')} title="Mahallah Faruq">
                            </Button>
                        </View>
                       
                        <Image style={styles.imageCarousel}
                        source={{ uri: "https://static.wixstatic.com/media/9b8976_7a7cb68a5c4e401cbc2e85169a764879.jpg" }}  />
                        <View style={styles.customimage}>
                            <Button style={styles.button1}
                                onPress={() => this.props.navigation.navigate('Menu4')} title="Mahallah Ruqayyah"></Button>
                        </View>
                      
                        <Image style={styles.imageCarousel}
                        source={{ uri: "https://1.bp.blogspot.com/-uINu9W45Yxc/Uw31UFxzdrI/AAAAAAAAACQ/o9t0HFB8vSQ/s1600/hafsahh.jpg" }}  />
                        <View style={styles.customimage}>
                            <Button style={styles.button1}
                                onPress={() => this.props.navigation.navigate('Menu4')} title="Mahallah Hafsa">
                            </Button>

                        </View>
                     



                    </View>




                
            </ScrollView>
            
            </View>
            
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        textAlignVertical: 'top',
    },

    button1: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        width: 35,
        borderRadius: 50,
        elevation: 8,
        backgroundColor: "#4ff678",
       
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'auto',
    }, formContent: {
        flexDirection: 'row',
        marginTop: 30,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconBtnSearch: {
        alignSelf: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    notificationList: {
        marginTop: 20,
        padding: 10,
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
        height: 80,
          

    },
    heading: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'auto',

    },
    imageCarousel: {
        width: 290,
        height: 200,
        justifyContent: 'center',
        borderRadius: 10,
    },
    list: {
        paddingHorizontal: 17,
        backgroundColor: "#E6E6E6",
    },
    separator: {
        marginTop: 10,
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 8,
        backgroundColor: "white"
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        backgroundColor: "#EEEEEE",
    },
    cardImage: {
        flex: 1,
        height: 150,
        width: null,
    },

});