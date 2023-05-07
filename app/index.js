import { View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons, images, SIZES } from '../constants'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Nearbyjobs, ScreenHeaderBtn, Welcome, Popularjobs } from '../components'
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const Home = () => {

    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>

        </SafeAreaProvider>
    )
}

export default Home