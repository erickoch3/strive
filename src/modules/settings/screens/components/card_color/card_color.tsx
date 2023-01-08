import React, {useContext, useState} from 'react';
import {View, ListItem, Button, Icon, Modal} from '@core/components';
import {CardColorOneContext, CardColorTwoContext} from '@core/contexts';
import ColorPicker from 'react-native-wheel-color-picker';

export const CardColorOneInput = (): JSX.Element => {

    const {cardColorOne, setCardColorOne} = useContext(CardColorOneContext);
    const [modalVisible, setModalVisible] = useState(false);

    const onChange = (value: string): void => {
        setCardColorOne(value);
        console.log("Changed color one: ", value);
    };
    return (
        <View>
        <ListItem style={"flex: 1"}
        title='Card Color One'
        description='Adjust the top of the card color gradient.'
        accessoryLeft={() => <Icon name='palette' />}
        accessoryRight={() => 
            <View>
                <Button onPress={() => setModalVisible(true)} 
                    style={{
                        backgroundColor: cardColorOne,
                        borderColor: cardColorOne
                    }}
                >
                </Button>
            </View>
        }
        />
        <Modal
            animationType="fade"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={{marginRight: 30, marginLeft: 30}}>
                <View style={{marginBottom: 20}}>
                    <ColorPicker
                        color={cardColorOne}
                        onColorChangeComplete={onChange}
                    />
                </View>
                <Button onPress={() => setModalVisible(false)}>
                    Done
                </Button>
            </View>
        </Modal> 
        </View>
    );
};

export const CardColorTwoInput = (): JSX.Element => {

    const {cardColorTwo, setCardColorTwo} = useContext(CardColorTwoContext);
    const [modalVisible, setModalVisible] = useState(false);

    const onChange = (value: string): void => {
        setCardColorTwo(value);
        console.log("Changed color two: ", value);
    };
    return (
        <View>
        <ListItem
        title='Card Color Two'
        description='Adjust the bottom of the card color gradient.'
        accessoryLeft={() => <Icon name='palette' />}
        accessoryRight={() => 
            <View>
                <Button onPress={() => setModalVisible(true)} 
                    style={{
                        backgroundColor: cardColorTwo,
                        borderColor: cardColorTwo
                    }}
                >
                </Button>
            </View>
        }
        />
        <Modal
            animationType="fade"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={{marginRight: 30, marginLeft: 30}}>
                <View style={{marginBottom: 20}}>
                    <ColorPicker
                        color={cardColorTwo}
                        onColorChangeComplete={onChange}
                    />
                </View>
                <Button onPress={() => setModalVisible(false)}>
                    Done
                </Button>
            </View>
        </Modal> 
        </View>
    );
};