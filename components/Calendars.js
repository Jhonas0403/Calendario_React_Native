import React,{useState} from 'react'
import {LocaleConfig,Calendar} from 'react-native-calendars'
import { Button,View,Text, TouchableOpacity } from 'react-native';

export default ()=>{

    const[buttonD, setButtonD] = useState(true) //habilita botón
    const [dia1, setDia]=useState("")
    const dates = {
      '2022-05-14':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
      '2022-05-15':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
      '2022-05-16':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
      '2022-05-17':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
      '2022-05-18':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
      '2022-05-19':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
      '2022-05-20':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
      '2022-05-21':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
      '2022-05-22':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
      '2022-05-23':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
    }

   /* const renderDays = (day: String, fecha: string) =>{
      return (
        <View style={{borderColor: day1 === day ? 'blue' : 'red'}}>
          <Text disabed={!date[fecha]}>

          </Text>
        </View>
      )
    }*/

    LocaleConfig.locales['es'] ={
        monthNames:[
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Setiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sept', 'Oct', 'Nov', 'Dec'],
        dayNames:['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        Today: "Hoy"
      };
      LocaleConfig.defaultLocale='es';

    return(
       <>
         <Calendar
        onDayPress={day => {
          setButtonD(!buttonD)
          setDia(day.dateString)
          console.log(day);
        }}

        markedDates={
          {
            '2022-05-14':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
            '2022-05-15':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
            '2022-05-16':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
            '2022-05-17':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
            '2022-05-18':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
            '2022-05-19':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
            '2022-05-20':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
            '2022-05-21':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
            '2022-05-22':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
            '2022-05-23':{selectedTextColor:'#5B36F2',selectedColor:'#E2DFFD',selected:true},
          }
        }
        headerStyle={{backgroundColor:'#5B36F2', borderBottomColor:'#FFFFFF'}}
        dayComponent={({date, state, marking}) =>{
          return (<View style={{borderWidth: 1, borderColor: 'red'}}>
          <Text>{date.day}</Text>
          </View>)
        }}
        
        theme={{
          monthTextColor:'#FFFFFF',
          arrowColor:'#FFFFFF',
          todayTextColor:'#161D1F',
          todayBackgroundColor:'white',
          indicatorColor:'red',
          dayTextColor:'#4F6168',
          weekVerticalMargin:5,
          //selectedDayBackgroundColor:'#5B36F2'
          'stylesheet.calendar.header':{
            week: {
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor:"#FFFFFF",
              borderColor:'#FFFF',
            },
          }
          
        }}
        />
       <Button
        title='Confirmar'
        disabled={buttonD}
        onPress={()=>{
          console.log(buttonD,dia);
        }}
        >
          
          </Button>
       </>
    )
    
          
        
}