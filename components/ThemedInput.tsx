import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function ThemedInput({ ...rest }: TextInputProps) {
    return (
        <>
            <TextInput
                {...rest}
                style={[rest.style, styles.input]}
                placeholderTextColor={"gray"} />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        backgroundColor: '#a1a1a1',
        color: 'yellow'
    }
})