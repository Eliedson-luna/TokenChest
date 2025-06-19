import PasswordInput from "@/components/PasswordInput";
import ThemedButton from "@/components/ThemedButton";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedInput from "@/components/ThemedInput";
import { ThemedText } from "@/components/ThemedText";
import { savePassword } from "@/src/data/dao/passWordDao";
import { SecurePassword, SecureStr } from "@/src/data/storage/secureStore";
import { useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Formulary() {
    const [info, setInfo] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [passwd, setPasswd] = useState<string>('');

    function clearFields() {
        setInfo(''); setPasswd(''); setUser('');
    }

    const save = async () => {
        try {
            await savePassword(info, user, passwd);
            Toast.show({ type: 'success', text1: 'Sua senha foi guardada em seu baú' })
        } catch (error) {
            if (error instanceof Error) {
                Toast.show({ type: 'error', text2: error.message })
            }
        } finally {
            clearFields();
        }
    }

    return (
        <ThemedContainer type="subContainer">
            <ThemedInput placeholder="Descrição" onChangeText={(text) => setInfo(text)} value={info} />
            <ThemedInput placeholder="usuário" onChangeText={(text) => setUser(text.trim())} value={user} />
            <PasswordInput placeholder="senha" onChangeText={(text) => setPasswd(text.trim())} value={passwd} />
            <View style={{ alignItems: 'center' }}>
                <ThemedButton onPress={save} text="Guardar" />
            </View>
        </ThemedContainer>
    )
}