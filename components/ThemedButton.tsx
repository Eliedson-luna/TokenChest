import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ThemedText } from "./ThemedText";

type ThemedButtonProps = TouchableOpacityProps & {
    text: string
}

export default function ThemedButton({ text, ...rest }: ThemedButtonProps) {
    return (
        <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                backgroundColor: '#2c2c2c',
                borderWidth: 1,
                borderColor: '#525252',
                borderRadius: 5,
                elevation: 5
            }}
            {...rest}
        >
            <ThemedText type='defaultSemiBold'
                style={{
                    padding: 10,
                    color: '#fff'
                }
                }>{text}</ThemedText>
        </TouchableOpacity>
    )
}