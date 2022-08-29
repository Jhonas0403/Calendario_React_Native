import React, { useState } from "react";
import { LocaleConfig, Calendar } from "react-native-calendars";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  dayButton: {
    borderWidth: 1,
    borderRadius: 30,
    width: 30.34,
    height: 30.34,
    alignItems: "center",
    alignContent: "center",
    padding: 2.5,
    marginTop: 16.5,
    marginLeft: 10.23,
    marginRight: 12.1,
    borderColor: "#FFFFFF",
  },
  dayText: {
    fontSize: 15.17,
    color: "#4F6168",
  },
  header: {
    backgroundColor: "#5B36F2",
    borderBottomColor: "#FFFFFF",
    alignContent: "center",
    //alignItems:'center',
    height: 90, //ancho de la cabecera entre mes y dias
    //justifyContent:'center'
    //marginBottom: 20
    //marginTop:50
    //height:65.73
  },
  todayButton: {
    borderWidth: 1.5,
    borderRadius: 30,
    width: 30.34,
    height: 30.34,
    alignItems: "center",
    alignContent: "center",
    padding: 2.5,
    marginTop: 16.5,
    marginLeft: 10.23,
    marginRight: 12.1,
    borderColor: "#5B36F2",
  },
  todayText: {
    fontSize: 15.17,
    color: "#161D1F",
  },
  markedButton: {
    borderRadius: 30,
    width: 30.34,
    height: 30.34,
    alignItems: "center",
    alignContent: "center",
    padding: 4,
    marginTop: 16.5,
    marginLeft: 10.23,
    marginRight: 12.1,
    backgroundColor: "#E2DFFD",
  },
  textMarked: {
    fontSize: 15.17,
    color: "#5B36F2",
  },
  daySelectedButton: {
    borderRadius: 30,
    width: 30.34,
    height: 30.34,
    alignItems: "center",
    alignContent: "center",
    padding: 4,
    marginTop: 16.5,
    marginLeft: 10.23,
    marginRight: 12.1,
    backgroundColor: "#5B36F2",
  },
  textDaySelected: {
    fontSize: 15.17,
    color: "#FFFFFF",
  },
  markedButtonToday: {
    borderWidth: 1.5,
    borderRadius: 30,
    width: 30.34,
    height: 30.34,
    alignItems: "center",
    alignContent: "center",
    padding: 2,
    marginTop: 16.5,
    marginLeft: 10.23,
    marginRight: 12.1,
    backgroundColor: "#E2DFFD",
    borderColor: "#5B36F2",
  },
  confirmar: {
    width: 275,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 3,
  },
  textConfirmar: {
    fontSize: 14,
  },
  etiqueta: {
    fontSize: 11,
    color: "#4A4F55",
    //justifyContent:"center",
    alignSelf: "center",
    marginTop: 9,
  },
  buttonLegend: {
    marginTop: 7,
    height: 18,
    width: 18,
    alignSelf: "center",
    marginRight: 4,
    marginLeft: 18,
  },
  legend: {
    marginTop: 24,
    marginBottom: 24,
    borderTopColor: "#DDEAF2",
    borderBottomColor: "#FFFFFF",
    borderRightColor: "#FFFFFF",
    borderLeftColor: "#FFFFFF",
    borderWidth: 1,
    //alignContent:"center"
    //justifyContent:"center"
    //alignItems:
  },
});

//arreglo de dias marcados como disponibles
const dayMarked = [
  "2022-05-14",
  "2022-05-15",
  "2022-05-16",
  "2022-06-17",
  "2022-05-18",
  "2022-05-19",
  "2022-05-20",
  "2022-05-21",
  "2022-05-25",
  "2022-05-09",
];

//recuperando la fecha de hoy
const getCurrentDate = () => {
  var year = new Date().getFullYear();
  var mes = new Date().getMonth() + 1;
  mes = mes < 10 ? "0" + mes : mes;
  /*if (mes < 10) {
    mes = "0" + mes;
  }*/
  var day = new Date().getDate();
  day = day < 10 ? "0" + day : day;

  var dateT = year + "-" + mes + "-" + day;

  return dateT;
};

//const today=getCurrentDate().format('yyyy-mm-dd')
const today = getCurrentDate();

const comprobardiaMarcado = (day, dM) => {
  return dM.includes(day) ? true : false;
};

const todayIsMarked = comprobardiaMarcado(today, dayMarked);

//estado de boton

export default () => {
  //markado de botones
  const [botonDay, setBotonDay] = useState(today);
  const [daySelect, setDaySelect] = useState(false);

  LocaleConfig.locales["es"] = {
    monthNames: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Setiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthNamesShort: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Agos",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    dayNames: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
     
    ],
    dayNamesShort: ["D","L", "M", "M", "J", "V", "S"],
    Today: "Hoy",
  };
  LocaleConfig.defaultLocale = "es";
  return (
    <>
      <Calendar
        dayComponent={({ date }) => {
          return (
            <View
              style={
                botonDay === date.dateString && daySelect === true //verifica si el día ha sido seleccionado
                  ? styles.daySelectedButton
                  : styles.dayButton &&
                    today === date.dateString &&
                    todayIsMarked
                  ? styles.markedButtonToday
                  : styles.dayButton && today === date.dateString
                  ? styles.todayButton
                  : styles.dayButton && dayMarked.includes(date.dateString)
                  ? styles.markedButton
                  : styles.dayButton
              }
            >
              <TouchableOpacity
                disabled={dayMarked.includes(date.dateString) ? false : true}
                onPress={() => {
                  setBotonDay(date.dateString);
                  setDaySelect(true);
                }}
              >
                <Text
                  style={
                    botonDay === date.dateString && daySelect === true
                      ? styles.textDaySelected
                      : styles.dayText &&
                        today === date.dateString &&
                        todayIsMarked
                      ? styles.textMarked
                      : styles.dayText && today === date.dateString
                      ? styles.todayText
                      : styles.dayText && dayMarked.includes(date.dateString)
                      ? styles.textMarked
                      : styles.dayText
                  }
                >
                  {date.day}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        //se añade para cambiar el calendario
        firstDay={1}
        //ocultando días no necesarios
        hideExtraDays={true}
        //estableciendo style header
        headerStyle={styles.header}
        //estableciendo tamaño del calendario
        style={{
          //height: 537.73,
          height: 410,
          width: 313,
        }}
        //arrowColor={"#FFFFFF"}
        //aplicando estilo calendario menos días
        theme={{
          monthTextColor: "#FFFFFF",
          textMonthFontSize: 18,
          textSectionTitleColor: "#4F6168",
          textDayHeaderFontSize: 15.17,
          "stylesheet.calendar.header": {
            week: {
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              height: 70,
              marginBottom: 40,
            },
          },

          arrowColor: "#FFFFFF",
          arrowHeight:10,
          arrowWidth:10
          /*arrowStyle:{
            //zIndex:1
            height:2,
            width:2
          }*/
        }}
      />

      <TouchableOpacity
        disabled={!daySelect}
        style={[
          {
            backgroundColor: daySelect ? "#5B36F2" : "#D5E5F0",
          },
          styles.confirmar,
        ]}
        onPress={() => {
          console.log("Día confirmado: ", botonDay);
        }}
      >
        <Text
          style={[
            { color: daySelect ? "#FFFFFF" : "#8090BB" },
            styles.textConfirmar,
          ]}
        >
          Confirmar
        </Text>
      </TouchableOpacity>
      <View style={styles.legend}>
        <Text
          style={[styles.etiqueta, { alignSelf: "flex-start", marginTop: 16 }]}
        >
          Identifica los días
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.todayButton, styles.buttonLegend]} />
          <Text style={styles.etiqueta}>Día de hoy</Text>
          <Text style={[styles.markedButton, styles.buttonLegend]} />
          <Text style={styles.etiqueta}>Disponibles</Text>
          <Text style={[styles.daySelectedButton, styles.buttonLegend]} />
          <Text style={styles.etiqueta}>Seleccionado</Text>
        </View>
      </View>
    </>
  );
};
