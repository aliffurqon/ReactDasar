import React, { Component } from "react";
import { Text, View, Image } from "react-native";

class MateriFlexBox extends Component{
    render(){
        return(
            <View>
                <View style={{flexDirection: 'row', backgroundColor:'#c8d6e5', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{backgroundColor:'#ee2523', width: 50, height: 50}}></View>
                    <View style={{backgroundColor:'#feca57', flex: 1, height: 100}}></View>
                    <View style={{backgroundColor:'#1dd1a1', flex: 2, height: 150}}></View>
                    <View style={{backgroundColor:'#5f27cd', flex: 3, height: 200}}></View>
                </View>

                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>Playlist</Text>
                    <Text>Komunitas</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems:'center', marginTop: 20}}>
                    <Image 
                        source={{uri: 'https://avatars.githubusercontent.com/u/30147966?s=460&u=8e89d2cccb7f3ff25eefca92bc48af633da0f5a4&v=4'}}
                        style={{width:100, height:100, borderRadius:50, marginRight:14}}
                    />
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Alif Furqon</Text>
                        <Text>1 jt subscriber</Text>
                    </View>
                </View>
            </View>
        ) 
        
    }
}

export default MateriFlexBox;