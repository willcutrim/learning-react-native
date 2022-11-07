
import {View, Text, TouchableOpacity} from 'react-native';;
import {styles} from './style'

// tipando com TS
type Props = {
    name: string;
    onRemove: () => void;
}

// nome de botão de remover usuario
export function Participant({name, onRemove}: Props){
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    );
}