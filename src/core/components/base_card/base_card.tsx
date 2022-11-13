import React, {useState, useContext} from 'react';
import {Text, View, ScrollView, Input, Button, LongPressGestureHandler} from '@core/components';
import GestureFlipView from 'react-native-gesture-flip-card';
import AsyncStorage from '@react-native-community/async-storage';
import {styles} from './base_card.styles';
import LinearGradient from 'react-native-linear-gradient';
import {CardColorOneContext, CardColorTwoContext} from '@core/contexts';

export const BaseCard = (props: Props): JSX.Element => {

    const [isEditable, setIsEditable] = useState(false);
    const [frontText, setFrontText] = useState('');
    const [backText, setBackText] = useState('');

    const {cardColorOne, setCardColorOne} = useContext(CardColorOneContext);
    const {cardColorTwo, setCardColorTwo} = useContext(CardColorTwoContext);

    type Side = {
        text: string,
        setFunction: (value: string) => void,
        key: string,
        style: object,
    }
    const Front = {text: frontText, setFunction: setFrontText, key: 'frontText', style: styles.frontText};
    const Back = {text: backText, setFunction: setBackText, key: 'backText', style: styles.backText};

    const memoryKey = (side: Side) => {
        console.log(props.cardType + "Card" + side.key + props.cardNumber);
        return (props.cardType + "Card" + side.key + props.cardNumber)
    }

    const updateEditState = () => {
        setIsEditable(!isEditable);
    };

    const saveText = async (newText: string, side: Side) => {
        const key = memoryKey(side);
        try {
            side.setFunction(newText);
            await AsyncStorage.setItem(key, newText);
        } catch (err) {
            console.error(err);
        }
    };

    const retrieveText = async (side: Side) => {
        const key = memoryKey(side);
        try {
            const value = await AsyncStorage.getItem(key);
            if (value) {
                side.setFunction(value);
            }
        } catch (err) {
            console.error(err);
        }
    };
    retrieveText(Front);
    retrieveText(Back);

    const displayText = (side: Side) => {
        if (isEditable) {
            return (
                <View>
                    <Input style={side.style}
                        editable={true}
                        value={side.text}
                        onChangeText={(value: string) => saveText(value, side)}
                    />
                    <Button  
                        style={styles.buttonStyle}
                        onPress={() => updateEditState()}
                    >
                    Save
                    </Button>
                </View>
            )
        };
        return (
            <LongPressGestureHandler onGestureEvent={() => updateEditState()} minDurationMs={800}>
                <Text style={side.style}>
                    {side.text}
                </Text>
            </LongPressGestureHandler>
        );
    };

    const CardLayout = (props: Props): JSX.Element => {
        const {children} = props;
        return (
            <LinearGradient colors={[cardColorOne, cardColorTwo]} style={styles.cardStyle}>
                {children}  
            </LinearGradient>
        );
    };

    const renderFront = () => {
        return (
            <LinearGradient colors={[cardColorOne, cardColorTwo]} style={styles.cardStyle}>
                {displayText(Front)}  
            </LinearGradient>
        );
    };
    
    const renderBack = () => {
        return (
            <LinearGradient colors={[cardColorOne, cardColorTwo]} style={styles.cardStyle}>
                <ScrollView contentContainerStyle={styles.backScroll}>
                    {displayText(Back)}
                </ScrollView>
            </LinearGradient>
        );
    };

    return (
        <View>
            <GestureFlipView width={390} height={200}>
                {renderFront()}
                {renderBack()}
            </GestureFlipView>     
        </View>
    )
};