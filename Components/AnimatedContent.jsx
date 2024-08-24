
import {useRef, useEffect} from 'react'
import { Animated } from 'react-native';

export function AnimatedContent({children, index = 10}){

    const opacity = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            delay: index * 300
        }).start();
    }, [opacity, index])
    

    return (
        <Animated.View style={{opacity}}>
            {children}
        </Animated.View>
    )
}