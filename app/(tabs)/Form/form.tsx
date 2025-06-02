import ThemedContainer from "@/components/ThemedContainer";
import ThemedInput from "@/components/ThemedInput";

export default function Formulary() {
    return (
        <ThemedContainer type="subContainer">
            <ThemedInput placeholder="origem" />
            <ThemedInput placeholder="usuário" />
            <ThemedInput placeholder="senha" passwordRules={'*'} />
        </ThemedContainer>
    )
}