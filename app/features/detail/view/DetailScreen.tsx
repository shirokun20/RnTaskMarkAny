import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { CARD_BG_IMAGE, HOT_ICON, SNOW_ICON } from "../../../components/configs/AppConst";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../components/configs/AppRouteNames";
import { RouteProp } from "@react-navigation/native";
import HomeViewModel from "../../home/viewModel/HomeViewModel";

type DetailScreenNavProps = NativeStackNavigationProp<RootStackParamList, "DetailScreen">
type DetailScreenRouteProps = RouteProp<RootStackParamList, "DetailScreen">;
//
type props = {
    navigation: DetailScreenNavProps,
    route: DetailScreenRouteProps,
}

const DetailScreen = ({ route, navigation: { navigate } }: props) => {

    const {
        name,
        price,
        desc,
        image
    } = route.params.data;

    const vm = new HomeViewModel();
    //
    return (
        <View style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'white'
        }}>
            <ImageBackground
                source={CARD_BG_IMAGE}
                style={{
                    backgroundColor: '#00643E',
                    width: '100%',
                    height: 350
                }}>
            </ImageBackground>
            <View style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                right: 0,
                left: 0,
                bottom: 0,
            }}>
                <View style={{
                    height: 40,
                }}/>
                <SafeAreaView style={{
                    flexDirection: 'column'
                }}>
                    <ScrollView>
                        <View>
                            <View style={{ height: 40 }} />
                            <View style={{
                                marginHorizontal: 16,
                                marginTop: 20,
                                marginBottom: 20,
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 25,
                                    fontWeight: 'bold'
                                }}>{name}</Text>
                                <View style={{
                                    height: 30,
                                }} />
                                <Text style={{
                                    color: 'white',
                                    fontSize: 40,
                                    fontWeight: '400'
                                }}>{price}</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: 'white',
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                            width: '100%',
                        }}>
                            <Image
                                source={image}
                                style={{
                                    position: 'absolute',
                                    top: -220,
                                    right: -20,
                                    width: 250,
                                    resizeMode: 'contain'
                                }}
                            />
                            <View style={{
                                paddingHorizontal: 16,
                            }}>
                                <View style={{
                                    height: 40,
                                }} />
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '400',
                                    marginBottom: 7,
                                }}>{name}</Text>
                                <Text style={{
                                    fontSize: 15,
                                    color: '#8D8D8D',
                                    marginBottom: 30,
                                }}>{desc}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    <TouchableOpacity>
                                        <View style={{
                                            backgroundColor: 'white',
                                            borderWidth: 1,
                                            borderRadius: 10,
                                            borderColor: '#1AA570',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: 55,
                                            width: 55,
                                        }}>
                                            <Image source={HOT_ICON} style={{
                                                height: 24,
                                                width: 24,
                                            }} />
                                            <Text style={{
                                                color: '#8D8D8D',
                                                fontSize: 15,
                                            }}>Hot</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{
                                        width: 15,
                                    }} />
                                    <TouchableOpacity>
                                        <View style={{
                                            height: 55,
                                            width: 55,
                                            backgroundColor: '#1AA570',
                                            borderWidth: 1,
                                            borderRadius: 10,
                                            borderColor: '#1AA570',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <Image source={SNOW_ICON} style={{
                                                height: 24,
                                                width: 24,
                                            }} />
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 15,
                                            }}>Cool</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: 30 }} />
                                <Text style={{
                                    color: '#00643E',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                }}>Best Seller</Text>
                                <View style={{ height: 20 }} />
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
                                                        marginBottom: 20,
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
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    );
}

export default DetailScreen;