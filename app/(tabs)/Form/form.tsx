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
            <ThemedInput placeholder="senha" secureTextEntry={true} onChangeText={(text) => setPasswd(text.trim())} value={passwd} />
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={save}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '50%',
                        backgroundColor: '#53520170',
                        borderRadius: 5,
                        elevation: 2
                    }}>
                    <ThemedText type='link'
                        style={{
                            padding: 10,
                        }
                        }>Armazenar</ThemedText>
                </TouchableOpacity>
            </View>
        </ThemedContainer>
    )
}