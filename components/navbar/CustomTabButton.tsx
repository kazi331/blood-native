import { Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const CustomTabButton = ({ onPress, children }: { onPress: any, children: React.ReactNode }) => {
    return (<Pressable
        onPress={onPress}
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            // shadow 


        }}
    >
        {/* <View style={{
            width: 60, height: 60,
            borderRadius: 15,
            shadowColor: '#7F5DF0',
            shadowOffset: {
                width: 0,
                height: 10,
            },

            shadowOpacity: 0.5,
            shadowRadius: 3.5,
            elevation: 3,

            backgroundColor: '#F04C7B',
        }}>
            {children}
        </View> */}

        <LinearGradient colors={['#FF78A9', '#DF1B49']}
            style={{
                width: 60, height: 60,
                borderRadius: 15,
                shadowColor: '#7F5DF0',
                shadowOffset: {
                    width: 0,
                    height: 10,
                },

                shadowOpacity: 0.5,
                shadowRadius: 3.5,
                elevation: 3,

                backgroundColor: '#F04C7B',
            }}>
            {children}
        </LinearGradient>
    </Pressable>)
}

export default CustomTabButton;