import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";

export type ThemedContainerTypes = ScrollViewProps & {
    type: string,
    backgroundColor?: string
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
        paddingHorizontal: 15,
        marginVertical: 0,
        borderRadius: 5
    },
    subContainer: {
        padding: 10,
        marginVertical: 10,
        borderRadius: 5
    }
})
    ;
