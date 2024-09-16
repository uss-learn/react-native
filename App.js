import React, {useEffect, useState} from 'react'
import {Alert, Button, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import ButtonComponent from "./components/ButtonComponent";

export default function App() {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);


    const addProduct = (product) => {
        const key =  Date.now().toString()
        if (product?.length > 1) {
            setProducts((currentProducts) => [{key, name: product},  ...currentProducts])
        } else {
            setShowModal(true)
        }

        setDisplayModal(false)
    }

    const deleteProduct = (product) => {
        setProducts((currentProducts) => {
            return currentProducts.filter(el => el.key !== product.key)
        })
    }

    const cancelProductForm = () => {
        setDisplayModal(false)
    }

    return (
        <ImageBackground
            style={styles.container}
            source={{
                uri: 'https://cdn.pixabay.com/photo/2017/07/12/09/54/line-2496359_1280.png'
            }}
        >

            <ButtonComponent
                style={styles.btnBlue}
                btnTitle={"Nouveau produit"}
                onPressHandler={ () => {
                    setDisplayModal(true)
                } }
            />

            <AddProduct displayModal={displayModal} addProduct={addProduct} cancelProductForm={cancelProductForm}/>

            <Modal
                visible={showModal}
                onRequestClose={() => {
                    setShowModal(false)
                }}
                animationType={'slide'}
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalHeaderText}>
                                OOPS!
                            </Text>
                        </View>
                        <View style={styles.modalBody}>
                            <Image
                                source={{
                                    uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/40/abort-146072_1280.png'
                                }}
                                style={styles.redCheck128}
                            />
                            <Text style={styles.modalBodyText}>
                                Merci d'indiquer plus d'un caractère
                            </Text>
                        </View>
                        <View style={styles.modalFooter}>
                            <Pressable
                                style={styles.pressableModalBtnModal}
                                onPress={() => setShowModal(false)}
                            >
                                <Text style={styles.modalFooterText}>
                                    OK
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Products products={products} deleteProduct={deleteProduct}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 2,
        paddingVertical: 60,
        flex: 1,
    },
    productItems: {
        marginTop: 10,
    },
    productItem: {
        backgroundColor: '#ffb6c1',
        padding: 20,
        fontSize: 17,
        marginVertical: 6,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    modalContent: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '90%',
        height: 300,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    modalHeader: {
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        padding: 16
    },
    modalHeaderText: {
        color: 'grey',
        fontSize: 17,
        fontWeight: 'bold'
    },
    modalBody: {
        width: '100%',
        flex: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    modalBodyText: {
        fontSize: 17,
    },
    modalFooter: {
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    modalFooterText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    pressableModalBtnModal: {
        width: '100%',
        backgroundColor: 'lightseagreen',
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        paddingVertical: 16,
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

    },
    redCheck128: {
        width: 100,
        height: 100,
    },
    btnBlue: {
        width: '100%',
        backgroundColor: 'darkred',
        borderRadius: 30,
        paddingVertical: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white'
    }
})
