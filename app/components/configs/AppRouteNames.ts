
export const homeScreen = "HomeScreen";
export const loginScreen = "LoginScreen";
export const detailScreen = "DetailScreen";


export type RootStackParamList = {
    HomeScreen: undefined;
    LoginScreen: undefined;
    DetailScreen: { data: CardHomeModel };
};