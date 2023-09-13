import { Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const CustomTabButton = (props: any) => {

    return (<Pressable
        onPress={props.onPress}
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',

        }}
    >

        <LinearGradient colors={['#FF78A9', '#DF1B49']}
            style={{
                width: 60, height: 60,
                borderRadius: 15,
                shadowColor: '#F04C7B',
                elevation: 20,
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: .6,
                shadowRadius: 10.5,

            }}>
            {props.children}
        </LinearGradient>
    </Pressable>)
}

export default CustomTabButton;