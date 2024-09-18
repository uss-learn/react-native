import React, {Component, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Caption, Paragraph, Text, Title, Drawer, TouchableRipple, Switch} from "react-native-paper";
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {MaterialIcons} from "@expo/vector-icons";

const CustomerDrawerContent = (props) => {
    const {navigation} = props
    const [isDark, setIsDark] = useState(false);

    const toggleDarkTheme = () => {
        setIsDark(!isDark)
    }
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContentContainer}>
                    <View style={styles.userInfoContainer}>
                        <View style={styles.userInfoContainerDetail}>
                            <Avatar.Image
                                size={100}
                                source={require('../assets/twitter.png')}
                            />
                            <View style={styles.userName}>
                                <Title style={styles.userTitle}>
                                    Youssifou Awanou
                                </Title>
                                <Caption  style={styles.userCaption}>
                                    @elussif
                                </Caption>
                            </View>
                            <View style={styles.followers}>
                                <View  style={styles.section}>
                                    <Paragraph style={styles.paragraph}> 24 </Paragraph>
                                    <Caption>Abonnements</Caption>
                                </View>
                                <View  style={styles.section}>
                                    <Paragraph style={styles.paragraph}> 48 </Paragraph>
                                    <Caption >Abonnés</Caption>
                                </View>
                            </View>
                        </View>
                    </View>


                    <Drawer.Section showDivider={false} style={styles.drawerSection}>
                        <DrawerItem
                            label={'Profile'} onPress={()=>{navigation.navigate('Profile')}}
                            icon={({color, size}) => <MaterialIcons name={"face"} color={color} size={size}/>}
                        />
                        <DrawerItem
                            label={'Listes'} onPress={()=>{navigation.navigate('Listes')}}
                            icon={({color, size}) => <MaterialIcons name={"list-alt"} color={color} size={size}/>}
                        />
                        <DrawerItem
                            label={'Sujets'} onPress={()=>{navigation.navigate('Sujets')}}
                            icon={({color, size}) => <MaterialIcons name={"comment"} color={color} size={size}/>}
                        />
                        <DrawerItem
                            label={'Signets'} onPress={()=>{navigation.navigate('Signets')}}
                            icon={({color, size}) => <MaterialIcons name={"bookmark-border"} color={color} size={size}/>}
                        />
                        <DrawerItem
                            label={'Moments'} onPress={()=>{navigation.navigate('Moments')}}
                            icon={({color, size}) => <MaterialIcons name={"flash-on"} color={color} size={size}/>}
                        />
                    </Drawer.Section>

                    <Drawer.Section showDivider={false} style={styles.reglageSection} title={'Réglage'}>
                        <DrawerItem
                            label={'Paramètre de confidentialité'} onPress={()=>{navigation.navigate('Settings')}}
                            icon={({color, size}) => <MaterialIcons name={"settings"} color={color} size={size}/>}
                        />
                        <TouchableRipple
                            onPress={toggleDarkTheme}
                        >
                            <View style={styles.settings}>
                                <Text>
                                    Mode sombre
                                </Text>
                                <View pointerEvents="none">
                                    <Switch value={isDark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section showDivider={false} style={styles.logoutSection}>
                <DrawerItem
                    label={'Déconnexion'} onPress={()=>{
                    console.warn("on logout");}}
                    icon={({color, size}) => <MaterialIcons name={"logout"} color={color} size={size}/>}
                />
            </Drawer.Section>
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerContentContainer: {
        flex: 1,
    },
    userInfoContainer: {
        paddingLeft: 20,
    },
    userInfoContainerDetail: {
        marginTop: 15,
    },
    userName: {
        marginTop: 15,
        justifyContent: 'center'
    },
    userTitle: {
        fontWeight: 'bold',
        fontSize: 20,

    },
    userCaption: {
        fontSize: 15,
    },
    followers: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 9,
    },
    paragraph: {
        fontWeight: 'bold',
    },
    drawerSection: {
        marginTop: 19,
        borderTopWidth: 0.5,
        borderBottomWidth: 0,
        borderTopColor: '#ccc',
        borderBottom: false
    },
    reglageSection: {
        marginTop: 10,
    },
    settings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    logoutSection: {
        marginBottom: 19,
        borderTopWidth: 0.5,
        borderTopColor: "#333"
    }
})

export default CustomerDrawerContent;

