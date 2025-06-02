import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";

export type ThemedContainerTypes = ScrollViewProps & {
    type: string,
    backgroundColor?: string
    style?: {}
}

export default function ThemedContainer({ style, type = 'default', backgroundColor, ...rest }: ThemedContainerTypes) {


    return (
        <ScrollView
            style={[
                { backgroundColor: backgroundColor },
                type === 'default' ? styles.default : undefined,
                type === 'subContainer' ? styles.subContainer : undefined,
                style
            ]}
            {...rest}
        />
    )
}


const styles = StyleSheet.create({
    default: {
        flex: 1,
        padding: 15,
        marginVertical: 5,
        borderRadius: 5
    },
    subContainer: {
        flexGrow: 1,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    }
});
