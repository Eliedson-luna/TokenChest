import { deleteItemInfo } from "@/src/data/dao/storageListDao";
import { useRouter } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";


type ItemOptionsParams = {
    handleCloseAction: () => void,
    itemId: number | undefined
}

export default function ItemOptions({ handleCloseAction, itemId }: ItemOptionsParams) {
    const router = useRouter();

    async function deleteItem(itemId: number | undefined) {
        try {
            if (itemId == null || itemId == undefined) { throw Error(`ID inválido: ${itemId}`) }
            deleteItemInfo(itemId);
            Toast.show({ type: 'success', text1: "Lista de senhas atualizada" })
            router.back();
        } catch (error) {
            if (error instanceof Error) {
                Toast.show({ type: 'error', text1: error.message })
            }
            else {
                Toast.show({ type: 'error', text1: 'Erro desconhecido ao excluir item' })
            }
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={handleCloseAction}
                style={{ flex: 1, zIndex: 9 }} />
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { deleteItem(itemId) }}
                >
                    <Text>
                        Editar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => { deleteItem(itemId) }}
                >
                    <Text style={{ color: '#b90000' }}>
                        Excluir
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        paddingVertical: 10,
        paddingHorizontal: '10%',
        backgroundColor: '#00000010'
    },
    button: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#e6e6e6",
        borderColor: '#00000080',
        borderWidth: 1,
        borderRadius: 5,
        elevation: 5,
        alignItems: 'center'
    }

})