import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { ThemedText } from "./ThemedText";
import { RelativePathString, useRouter } from "expo-router";


type ThemedButtonProps = PressableProps & {
    text?: string,
    link?: RelativePathString
}

export default function ThemedNavigator({ link, text = '', ...rest }: ThemedButtonProps) {

    const nav = useRouter()

    return (
        <Pressable
            onPress={() => { if (link) { nav.navigate(link) } }}
            style={({ pressed }) => {
                const baseStyle: StyleProp<ViewStyle> = {
                    backgroundColor: pressed ? "#0000009d" : "#1515159d",
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                };
                return [baseStyle, { borderWidth: 1, borderColor: '#a1a1a1', borderRadius: 5, margin: 10, padding: 20 }];
            }}
            {...rest}
        >
            <ThemedText type='subtitle'>
                {text}
            </ThemedText>
        </Pressable>
    )
}

