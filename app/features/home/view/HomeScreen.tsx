import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Image, ImageBackground, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackParamList, detailScreen } from "../../../components/configs/AppRouteNames";
import { SafeAreaView } from "react-native-safe-area-context";
import { CARD_BG_IMAGE, SEARCH_ICON } from "../../../components/configs/AppConst";
import HomeViewModel from "../viewModel/HomeViewModel";

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, "HomeScreen">

type props = {
    navigation: HomeScreenProps,
}

const HomeScreen = (props: props) => {
    return (
        <SafeAreaView style={{
            backgroundColor: '#fff'
        }}>
            <View style={{
                flexDirection: 'column',
                width: '100%',
                height: '100%'
            }}>
                <HomeHeader />
                <HomeContent {...props} />
            </View>
        </SafeAreaView>
    );
}

const HomeHeader = () => {
    return (
        <>
            <View style={{
                backgroundColor: '#fff',
                width: '100%',
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 10,
                paddingBottom: 10,
            }}>
                <Text style={{
                    color: '#00643E',
                    fontWeight: 'bold',
                    fontSize: 25,
                }}>Home</Text>
            </View>
            <View style={{
                backgroundColor: '#F4F4F4',
                flexDirection: 'row',
                marginHorizontal: 16,
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#DCDCDC'
            }}>
                <Image
                    source={SEARCH_ICON}
                    style={{
                        width: 18,
                        height: 18,
                        marginRight: 14,
                    }}
                />
                <TextInput style={{
                    flex: 1,
                }} placeholder="Search" placeholderTextColor={'#2D2D2D'} />
            </View>
        </>
    )
}

const HomeContent = ({ navigation: { navigate } }: props) => {

    const vm = new HomeViewModel();

    return (
        <ScrollView style={{
            width: '100%',
            marginTop: 16,
        }}>
            <View style={{
                marginLeft: 16,
                marginRight: 16,
                marginBottom: 6,
            }}>
                <Text style={{
                    color: '#00643E',
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>Best Seller</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={{
                    flexDirection: 'row',
                }}>
                    {
                        vm.data.map((e, index) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={{
                                        marginLeft: 20,
                                        marginVertical: 10,
                                    }}
                                    onPress={() => navigate("DetailScreen", {
                                        data: e,
                                    })}
                                    key={index}>
                                    <ImageBackground
                                        source={CARD_BG_IMAGE}
                                        style={{
                                            backgroundColor: '#00643E',
                                            borderRadius: 15,
                                        }}>
                                        <View
                                            style={{
                                                paddingTop: 18,
                                                paddingLeft: 13,
                                                paddingRight: 13,
                                                paddingBottom: 24,
                                                alignItems: 'center'
                                            }}>
                                            <Image source={e.image} style={{
                                                width: 105,
                                                height: 105,
                                            }} />
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 16,
                                                color: '#FFFFFF'
                                            }}>{e.name}</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            </ScrollView>
            <View style={{
                marginLeft: 16,
                marginRight: 16,
                marginBottom: 6,
                marginTop: 6,
            }}>
                <Text style={{
                    color: '#00643E',
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>Menu</Text>
            </View>
            <View style={{
                marginLeft: 16,
                marginRight: 16,
            }}>
                {
                    vm.data.map((e, index) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => navigate("DetailScreen", {
                                    data: e,
                                })}
                                key={index} style={{
                                    backgroundColor: 'white',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 16,
                                    marginTop: 16,
                                }}>
                                <View style={{
                                    backgroundColor: "#1AA570",
                                    padding: 6,
                                    borderRadius: 10,
                                    marginRight: 10,
                                }}>
                                    <Image source={e.image} style={{
                                        width: 73,
                                        height: 79,
                                    }} />
                                </View>
                                <View style={{
                                    flex: 1,
                                    marginRight: 10,
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: '400',
                                        color: 'black',
                                        marginBottom: 5,
                                    }}>{e.name}</Text>
                                    <Text
                                        numberOfLines={2}
                                        style={{
                                            fontSize: 13,
                                            color: '#8D8D8D',
                                        }}>{e.desc}</Text>
                                </View>
                                <Text style={{
                                    fontSize: 25,
                                    fontWeight: '400',
                                    color: 'black',
                                }}>{e.price}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>

        </ScrollView>
    );
}

export default HomeScreen;