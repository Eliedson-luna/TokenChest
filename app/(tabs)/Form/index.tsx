import ThemedContainer from "@/components/ThemedContainer";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from "react-native";
import Formulary from "./form";

export default function NewTokenFormulary() {
    return (
        <ThemedContainer type="default" style={styles.container} backgroundColor="#222">
            <ThemedContainer style={{ elevation: 5, borderRadius: 10 }} backgroundColor='#4e4d4d' type="suContainer">
                <ThemedText type="title" style={{ color: "#c2c2c2", marginTop: 10, textAlign: 'center' }}>
                    Nova senha
                </ThemedText>
                <ThemedContainer type="subContainer">
                    <Formulary />
                </ThemedContainer>
            </ThemedContainer>
        </ThemedContainer>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: '50%'
    }
})
