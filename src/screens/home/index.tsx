import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import React, {useState} from 'react'; 

import { Participant } from './components/Participant';

export function Home(){

    // Gerenciadores de estado
    const [participantes, setParticipantes] = useState<string[]>([]);
    const [participanteName, setParticipanteName] = useState('');
    
    // função para adicionar um participante
    function handleParticipantAdd(){
        if(participantes.includes(participanteName)){
            return Alert.alert("Pariticapente existente", "Já tem alguem com esse nome!");
        }
        setParticipantes(prevState => [...prevState, participanteName]);
        setParticipanteName('');
    }

    // função para remover um participante
    function handleParticipantRemove(name: string){

        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () =>  setParticipantes(prevState => prevState.filter(participantes =>participantes !== name))
            },

            {
                text: 'Cancelar',
                style: 'cancel'
            }
            
        ]);
    }

    // function handleState(value: string){
    //     setParticipanteName(value);
    //     console.log(participanteName);
    // }

    // retornando minha aplicação/layout
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
                onChangeText={setParticipanteName}
                value={participanteName}
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        {/* exibir lista de participantes */}
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
                    Adicione alguem a sua lista.
                </Text>
            )}
        />
    </View>
    )
}