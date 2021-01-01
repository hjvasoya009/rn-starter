import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: 1 || -1 }

    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };

        case 'decrement':
            return (state.count <= 0) ? state : { ...state, count: state.count - action.payload };

        default:
            return state;
    }
};

const CounterScreen = () => {
    const  [state, dispatch] = useReducer(reducer, { count: 0 });
    
    return (
        <View>
            <Button
                onPress={() => {
                    dispatch({ type: 'increment', payload: 1 });
                }}
                title = "Increase"
            />
            
            <Button
                onPress={() => {
                    dispatch({ type: 'decrement', payload: 1 });
                }}
                title = "Decrease"
            />

            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const CounterScreen = () => {
//     const  [counter, setCounter] = useState(0);
    
//     return (
//         <View>
//             <Button
//                 onPress={() => {
//                     setCounter(counter + 1);
//                 }}
//                 title = "Increase"
//             />
            
//             <Button
//                 onPress={() => {
//                     setCounter(counter - 1);
//                 }}
//                 title = "Decrease"
//             />

//             <Text>Current Count: {counter}</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({

// });

// export default CounterScreen;