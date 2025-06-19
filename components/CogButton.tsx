import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export default function CogButton({ ...rest }: TouchableOpacityProps) {
    return (
        <TouchableOpacity
            style={{ alignSelf: 'center' }}
            {...rest}
        >
            <Entypo
                name={'cog'}
                size={20}
                color="black"
            />
        </TouchableOpacity>
    )
}