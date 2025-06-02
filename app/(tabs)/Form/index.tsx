import ThemedContainer from "@/components/ThemedContainer";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from "react-native";
import Formulary from "./form";

export default function NewTokenFormulary() {
    return (
        <ThemedContainer type="defaut" style={styles.container} backgroundColor="#222">
            <ThemedContainer type="subContainer">
                <ThemedText type="title">
                    Você está guardando uma nova senha
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
