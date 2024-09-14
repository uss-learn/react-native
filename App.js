import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, TextInput, ScrollView, FlatList} from "react-native";

export default function App() {
    const persons = [
        {
            "id": "66e52609d266c487b4d9c25a",
            "index": 0,
            "guid": "db889a93-4586-4972-b0dd-a0574d0f80a0",
            "age": 29,
            "name": "Angelita Kelley",
            "email": "angelitakelley@unia.com",
            "phone": "+1 (898) 566-2321",
            "address": "860 Prospect Place, Charco, Tennessee, 7754"
        },
        {
            "id": "66e526090e496bf50ab3eda8",
            "index": 1,
            "guid": "a5180053-a4da-4f52-bd3d-ba9c021fa056",
            "age": 27,
            "name": "Marcella Mcmahon",
            "email": "marcellamcmahon@unia.com",
            "phone": "+1 (894) 587-2983",
            "address": "305 Union Avenue, Needmore, New Hampshire, 6426"
        },
        {
            "id": "66e526096d55864a6b945f71",
            "index": 2,
            "guid": "a40990fa-496d-41af-be03-8ea7c41a4900",
            "age": 33,
            "name": "Wynn Lester",
            "email": "wynnlester@unia.com",
            "phone": "+1 (923) 521-2830",
            "address": "359 Woodhull Street, Brandermill, North Dakota, 4537"
        },
        {
            "id": "66e52609ec3eb408251035aa",
            "index": 3,
            "guid": "69ebc2a2-fa63-4205-bf20-38a98267a608",
            "age": 38,
            "name": "Rae Foreman",
            "email": "raeforeman@unia.com",
            "phone": "+1 (830) 425-3963",
            "address": "273 Albany Avenue, Woodruff, New Mexico, 5120"
        },
        {
            "id": "66e52609ac9b8464e99de86f",
            "index": 4,
            "guid": "ac7509f4-3f4a-42e8-b262-78e5863d7896",
            "age": 32,
            "name": "Suzanne Hurst",
            "email": "suzannehurst@unia.com",
            "phone": "+1 (977) 475-3709",
            "address": "319 Calder Place, Greenbush, Kentucky, 5495"
        },
        {
            "id": "66e52609d291f49d86976126",
            "index": 5,
            "guid": "ff047cd5-e639-40ef-b109-8b1d6749f506",
            "age": 34,
            "name": "Jodie Parrish",
            "email": "jodieparrish@unia.com",
            "phone": "+1 (963) 521-3173",
            "address": "764 Hanson Place, Hasty, Virgin Islands, 1079"
        },
        {
            "id": "66e52609a813113a0df11dbd",
            "index": 6,
            "guid": "745f2f9a-cc1d-4dd5-ac5c-9d6f233427ea",
            "age": 39,
            "name": "Marshall Brooks",
            "email": "marshallbrooks@unia.com",
            "phone": "+1 (959) 455-2814",
            "address": "788 Plymouth Street, Homeland, Kansas, 1526"
        },
        {
            "id": "66e5260915083ca76c565ced",
            "index": 7,
            "guid": "e98ed5b8-d007-4ee3-a417-85d786749aaa",
            "age": 22,
            "name": "June Farley",
            "email": "junefarley@unia.com",
            "phone": "+1 (929) 522-2556",
            "address": "911 Neptune Court, Mansfield, Mississippi, 5901"
        },
        {
            "id": "66e52609d05075ba1e7b6743",
            "index": 8,
            "guid": "61440d5c-5a7f-48cf-b366-02c58a71fec8",
            "age": 23,
            "name": "Glenn Mccarthy",
            "email": "glennmccarthy@unia.com",
            "phone": "+1 (874) 594-3346",
            "address": "306 Madison Street, Castleton, Rhode Island, 3364"
        },
        {
            "id": "66e52609d96799fae00e3d60",
            "index": 9,
            "guid": "d8da6761-143a-4449-bd42-8c658500faab",
            "age": 25,
            "name": "Estelle Cooke",
            "email": "estellecooke@unia.com",
            "phone": "+1 (944) 565-3017",
            "address": "708 Sutton Street, Sterling, Wisconsin, 3981"
        },
        {
            "id": "66e52609722e605eaab8edef",
            "index": 10,
            "guid": "77d97991-2f56-4c9e-835d-400085469051",
            "age": 32,
            "name": "Johnnie Little",
            "email": "johnnielittle@unia.com",
            "phone": "+1 (909) 578-2172",
            "address": "533 Lott Place, Temperanceville, Oklahoma, 250"
        },
        {
            "id": "66e526091e58917f1a5279e3",
            "index": 11,
            "guid": "261a9df5-7cd0-47b9-8554-21fb7626cea4",
            "age": 27,
            "name": "Wheeler Gill",
            "email": "wheelergill@unia.com",
            "phone": "+1 (974) 493-3374",
            "address": "868 Keen Court, Coultervillle, Delaware, 6420"
        },
        {
            "id": "66e5260994f85d764e619cc6",
            "index": 12,
            "guid": "1a212fc3-4d1a-412b-9295-a4231dfea87c",
            "age": 35,
            "name": "Claudia Hammond",
            "email": "claudiahammond@unia.com",
            "phone": "+1 (924) 589-2334",
            "address": "303 Varanda Place, Drummond, North Carolina, 1507"
        },
        {
            "id": "66e52609b352dae656d02f3a",
            "index": 13,
            "guid": "4246642b-990a-41a6-85c2-d1ae27af7d22",
            "age": 24,
            "name": "Luz Rojas",
            "email": "luzrojas@unia.com",
            "phone": "+1 (912) 540-2072",
            "address": "876 Fleet Street, Independence, Indiana, 3474"
        },
        {
            "id": "66e526095a8e14bd4a480bc9",
            "index": 14,
            "guid": "27143a58-e97a-45fc-b90e-f20b5147cfeb",
            "age": 23,
            "name": "Tammi Willis",
            "email": "tammiwillis@unia.com",
            "phone": "+1 (954) 597-2893",
            "address": "138 Thornton Street, Elrama, California, 5007"
        },
        {
            "id": "66e52609899fbcb9d1e568ac",
            "index": 15,
            "guid": "294dcadf-ba83-4a5a-be8b-53a8b9695c73",
            "age": 32,
            "name": "Jordan Hardy",
            "email": "jordanhardy@unia.com",
            "phone": "+1 (842) 444-2905",
            "address": "286 Ford Street, Springdale, Maryland, 9325"
        },
        {
            "id": "66e526093d7081f71598e61f",
            "index": 16,
            "guid": "ef4ac235-2a76-4da7-a577-aa95609a4831",
            "age": 35,
            "name": "Salazar Steele",
            "email": "salazarsteele@unia.com",
            "phone": "+1 (802) 546-3551",
            "address": "725 Ross Street, Geyserville, South Carolina, 2622"
        },
        {
            "id": "66e52609f79824f8d9b72ca3",
            "index": 17,
            "guid": "471e2dbf-1879-48c1-9ff9-65b95e0da71b",
            "age": 26,
            "name": "Valerie Dudley",
            "email": "valeriedudley@unia.com",
            "phone": "+1 (872) 547-2287",
            "address": "514 Brown Street, Norwood, Puerto Rico, 5545"
        },
        {
            "id": "66e52609a7a1eccc899d5248",
            "index": 18,
            "guid": "638f78c8-65a4-45f3-b55a-50b48af8a867",
            "age": 36,
            "name": "Katrina Neal",
            "email": "katrinaneal@unia.com",
            "phone": "+1 (883) 438-3841",
            "address": "984 Metropolitan Avenue, Manchester, New Jersey, 2270"
        },
        {
            "id": "66e526095421b124fde5d877",
            "index": 19,
            "guid": "227087e6-69ef-4440-8f30-b4938ce1874f",
            "age": 40,
            "name": "Lorna Sweeney",
            "email": "lornasweeney@unia.com",
            "phone": "+1 (928) 523-2833",
            "address": "189 Pine Street, Movico, American Samoa, 8824"
        },
        {
            "id": "66e52609e4b11bebc7a2c48e",
            "index": 20,
            "guid": "7bb6b5ff-54a2-4b4e-968b-49ddd2ee32ab",
            "age": 37,
            "name": "Olive Puckett",
            "email": "olivepuckett@unia.com",
            "phone": "+1 (969) 495-2139",
            "address": "938 Lott Street, Lafferty, Illinois, 3356"
        },
        {
            "id": "66e52609e58b3c50775bdd21",
            "index": 21,
            "guid": "243c622c-7580-4baf-829d-6a1d71a13479",
            "age": 25,
            "name": "Chavez Nelson",
            "email": "chaveznelson@unia.com",
            "phone": "+1 (866) 495-3022",
            "address": "728 Jerome Avenue, Veyo, Alabama, 4156"
        },
        {
            "id": "66e526095406d403d4bf7057",
            "index": 22,
            "guid": "064fed32-f37e-4384-b31e-07a7aecea39b",
            "age": 28,
            "name": "Tasha Boyle",
            "email": "tashaboyle@unia.com",
            "phone": "+1 (811) 599-3235",
            "address": "152 Belvidere Street, Cochranville, Utah, 794"
        },
        {
            "id": "66e5260993c2dea87f285b11",
            "index": 23,
            "guid": "46e63ef6-789c-4c77-bf5b-f2d412c53162",
            "age": 32,
            "name": "Becky Bender",
            "email": "beckybender@unia.com",
            "phone": "+1 (808) 546-2167",
            "address": "625 Eagle Street, Balm, Alaska, 3529"
        },
        {
            "id": "66e52609a885034a5b21d8cd",
            "index": 24,
            "guid": "64e96dc6-bc61-4eed-8d19-8b4f9d915655",
            "age": 35,
            "name": "Mccall Peck",
            "email": "mccallpeck@unia.com",
            "phone": "+1 (966) 457-3730",
            "address": "686 Bevy Court, Hondah, Colorado, 4013"
        },
        {
            "id": "66e526098fdc1ed5dfb2f005",
            "index": 25,
            "guid": "fc7d1218-85ad-46ad-b93f-7260d4aeb90b",
            "age": 37,
            "name": "Lester Carroll",
            "email": "lestercarroll@unia.com",
            "phone": "+1 (910) 574-3630",
            "address": "578 Montague Terrace, Croom, Idaho, 5150"
        },
        {
            "id": "66e5260902644f67b27ea31c",
            "index": 26,
            "guid": "fe02dfc2-cadd-4d48-b393-33500ea27215",
            "age": 35,
            "name": "Marcia Aguirre",
            "email": "marciaaguirre@unia.com",
            "phone": "+1 (951) 492-2456",
            "address": "321 Homecrest Court, Bath, Georgia, 1902"
        },
        {
            "id": "66e52609d8b93d3aea732f5f",
            "index": 27,
            "guid": "91c0486f-926f-47c1-aba6-a676484f55af",
            "age": 26,
            "name": "Sonia Greer",
            "email": "soniagreer@unia.com",
            "phone": "+1 (934) 592-2763",
            "address": "368 Irving Place, Kimmell, Wyoming, 1828"
        },
        {
            "id": "66e526093f79b2ad94b252a5",
            "index": 28,
            "guid": "09a02007-9ac6-4fcb-b28f-4aa79bb29038",
            "age": 27,
            "name": "Forbes Miller",
            "email": "forbesmiller@unia.com",
            "phone": "+1 (994) 463-2049",
            "address": "644 Fountain Avenue, Cawood, West Virginia, 7367"
        }
    ]

    const [families, setFamilies] = useState(persons);
    return (
        <View style={styles.wrapper}>
            <ScrollView style={{display: 'none'}}>
                {
                    families.map((person, key) => (
                        <View key={key} style={styles.viewList}>
                            <Text style={styles.viewListText}><Text style={styles.viewListTextBold}>Name: </Text>{person?.name}</Text>
                            <Text style={styles.viewListText}><Text style={styles.viewListTextBold}>Age: </Text> {person?.age}</Text>
                        </View>
                    ))
                }
            </ScrollView>

            <FlatList
                data={families}
                renderItem={({item}) => (
                    <View style={styles.viewList}>
                        <Text style={styles.viewListText}><Text style={styles.viewListTextBold}>Name: </Text>{item?.name}</Text>
                        <Text style={styles.viewListText}><Text style={styles.viewListTextBold}>Age: </Text> {item?.age}</Text>
                    </View>
                )}
                keyExtractor={(item, key) => key}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        flexDirection: 'column'
    },
    viewOne: {backgroundColor: 'green'},
    textOne: {fontWeight: 'bold', textAlign: 'center'},
    viewTwo: {backgroundColor: 'tomato'},
    textTwo: {fontSize: 20, fontWeight: 'bold', textAlign: 'center'},
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    viewList: {
        marginTop: 30,
        backgroundColor: 'purple',
    },
    viewListText: {
        color: 'white'
    },
    viewListTextBold: {
        fontWeight: 'bold'
    },
})
