import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { ThemedText } from "./ThemedText";
import { Link, RelativePathString, useRouter } from "expo-router";
import ThemedContainer from "./ThemedContainer";

type ThemedButtonProps = PressableProps & {
    text?: string,
    link: RelativePathString
}

export default function ThemedButton({ link, text = '', ...rest }: ThemedButtonProps) {

    const nav = useRouter()

    return (
        <Pressable
            onPress={() => nav.navigate(link)}
            style={({ pressed }) => {
                const baseStyle: StyleProp<ViewStyle> = {
                    backgroundColor: pressed ? "#0000009d" : "#1515159d",
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                };
                return [baseStyle, { borderRadius: 5, margin: 10, padding: 20 }];
            }}
            {...rest}
        >
            <ThemedText type="link">
                {text}
            </ThemedText>
        </Pressable>
    )
}

