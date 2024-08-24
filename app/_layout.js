import { View } from "react-native";
import { styles } from "../AppStyles";
import { Slot } from 'expo-router';

export default function Layaout() {
    return (
        <View style={styles.container} >
            <Slot />
        </View>
    )
}