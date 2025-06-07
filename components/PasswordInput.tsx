import { StyleSheet, TextInputProps, View } from "react-native";
import ThemedInput from "./ThemedInput";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";

type PasswordInputProps = TextInputProps & {
    value: string;
};

export default function PasswordInput({ value, ...rest }: PasswordInputProps) {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const icon = isHidden ? 'eye-with-line' : 'eye';
    return (
        <View style={styles.textBox}>
            <ThemedInput
                value={value}
                secureTextEntry={isHidden}
                readOnly={true}
                style={styles.input}
                {...rest}
            />
            <Entypo
                onPress={() => {
                    setIsHidden(!isHidden)
                }}
                style={{ alignSelf: 'center' }}
                name={icon}
                size={20}
                color="black"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    textBox: {
        flexDirection: 'row',
        gap: 20
    },
    input: {
        width: '62%'
    }
})