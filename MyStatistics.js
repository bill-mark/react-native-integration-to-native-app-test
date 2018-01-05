import React,{Component} from 'react';
import {TouchableOpacity,NativeModules,AppRegistry, StyleSheet, Image,Text, View,ScrollView,Dimensions} from 'react-native';
import MyCell from './commonmycell';
import Resolution from "./Resolution"
import axios from 'axios'


var RNModules = NativeModules.RTModule;

export default class MyStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
  }

  componentDidMount(){
      axios.get('http://10.240.106.13:8180/my_statis/statis',{
        params:{
        },
        headers:  {
            "Token":  '925fcfe404867a53c78cf0f6abbf2230',
            "APP_ID":  '244'
        }
      })
      .then((res)=>{
        let params = []
        for(let key in res.data.data){
            params.push(res.data.data[key])
        }
        this.setState({
           data:params
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  static navigationOptions = {
    headerTitle: '我的统计',
    header:null,
  };
  render() {
    let data = this.state.data
    return (
      <Resolution.FixWidthView style={styles.container}>
          <View style={styles.title}>
              <TouchableOpacity onPress={()=>RNModules.RNOpenOneVC('测试')}>
               <Image source={require('./img/return.png')} style={styles.titleimg}/>
              </TouchableOpacity>
                <Text style={styles.titletext}  >
                  我的统计
                </Text>
              
          </View>
          <View style={styles.CellStyle}>
              <MyCell 
                   leftIconName={require('./img/bp.png')}
                   leftTitle="我的积分"
                   rightTitle={data[2]+"积分"}
                   navigation={this.props.navigation}
                   navigationTitle='MyIntegral'
              />
              <MyCell 
                   leftIconName={require('./img/client.png')}
                   leftTitle="我的客户"
                   rightTitle={"共"+data[1]+"位客户"}
                   navigation={this.props.navigation}
                   navigationTitle='Customer'
              />
              <MyCell 
                   leftIconName={require('./img/enlist.png')}
                   leftTitle="我的招募"
                   rightTitle={"本月招募客户"+data[0]+"位"}
                   navigation={this.props.navigation}
                   navigationTitle='MyEnlist'
              />
              <MyCell 
                   leftIconName={require('./img/ahcieve.png')}
                   leftTitle="我的业绩"
                   rightTitle={data[3]+"元"}
                   navigation={this.props.navigation}
                   navigationTitle='MyAchievement'
              />
              <MyCell 
                   leftIconName={require('./img/qr.png')}
                   leftTitle="我的二维码"
                   navigation={this.props.navigation}
                   navigationTitle='MyQr'
              />
          </View>
      </Resolution.FixWidthView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:30,
    height:128,
    backgroundColor:'white',
  },
  titleimg:{
    width:18,
    height:32,
    marginTop:30,
  },
  titletext:{
    marginLeft:260,
    marginTop:30,
    fontSize:36,
  },
  CellStyle:{
    flex: 1,
    marginLeft:30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
});