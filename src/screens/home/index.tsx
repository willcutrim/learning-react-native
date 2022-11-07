import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from './components/Participant';

export function Home(){
    const participantes = [
        'willyam', 
        'deborah', 
        'brenda', 
        'Junior', 
        'lucas', 
        'ingrid',
        'daniel',
        'alberth',
        'adassah',
        'alexandra',
    ];
    
    function handleParticipantAdd(){
        if(participantes.includes("ney delas")){
            return Alert.alert("Pariticapente existente", "Já tem alguem com esse nome!");
        }
        console.log('adicionado');
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("deletado com sucesso!")
            },

            {
                text: 'Cancelar',
                style: 'cancel'
            }
            
        ]);
    }

    return (
    <View style={styles.container}>
        <Text 
        style={styles.eventName}>
            Nome do evento
        </Text>

        <Text 
        style={styles.eventData}>
            Domingo, 6 de novembro
        </Text>

        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor='#6B6B6B'
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        <FlatList 
            data={participantes}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                    key={item}
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)}
                />
            )}  

            ListEmptyComponent={() => (
                <Text style={styles.listaVazia}>
                    Adicione alguem a sua lita.
                </Text>
            )}
        
        />

    </View>
    )
}