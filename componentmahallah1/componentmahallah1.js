import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class Componentmahallah1 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="1f4168e2-8a5d-4cf8-a75d-5bc49ae142fd" style={styles.componentmahallah1}>
        <Text data-layer="dbb30210-15b4-411d-ba8d-db569ae2a355" style={styles.componentmahallah1_kulliyah}>Kulliyah</Text>
        <View data-layer="29497905-90c6-4430-b7aa-080c69081122" style={styles.componentmahallah1_cafe1}>
            <ReactImage data-layer="bc7f876d-7481-480a-a2c2-bf3fe12ef2dd" source={require('./assets/rectangle8.png')} style={styles.componentmahallah1_cafe1_rectangle8} />
            <ReactImage data-layer="ff093663-1bf9-48d5-a177-5c1e621582a3" source={require('./assets/maskGroup1.png')} style={styles.componentmahallah1_cafe1_maskGroup1} />
        </View>
        <View data-layer="3310f6a2-bf5c-4549-9521-eb9c4dc9f035" style={styles.componentmahallah1_modalSimple}>
            <View data-layer="104ab0fd-617c-4074-aa82-8a6d73d131e6" style={styles.componentmahallah1_modalSimple_rectangle355}></View>
            <View data-layer="93fe0d74-61e1-422e-a859-0527f14619be" style={styles.componentmahallah1_modalSimple_group273}>
                <Text data-layer="cd5d01fa-edf9-4aef-81e2-c4eaed819672" style={styles.componentmahallah1_modalSimple_group273_openingHours8Am6pm}>Opening Hours ⋅ 8-AM - 6PM
</Text>
                <View data-layer="21e1e027-76a1-4126-9d16-3c50d57a2b69" style={styles.componentmahallah1_modalSimple_group273_group252}>
                    <Text data-layer="81152cc2-25b1-4eb1-a2c3-a74d62e2d7ae" style={styles.componentmahallah1_modalSimple_group273_group252_studentMall}>Student Mall</Text>
                </View>
                <View data-layer="816939c2-a1f1-451b-ad9c-36162f814498" style={styles.componentmahallah1_modalSimple_group273_group251}>
                    <Text data-layer="766dbb9d-176d-4e9d-a43d-ffd651cd32df" style={styles.componentmahallah1_modalSimple_group273_group251_x60361964000}>+60361964000</Text>
                </View>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Componentmahallah1.propTypes = {

}

Componentmahallah1.defaultProps = {

}


const styles = StyleSheet.create({
  "componentmahallah1": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(238, 240, 249, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 921,
    "left": 0,
    "top": 0
  },
  "componentmahallah1_kulliyah": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 50, 91, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Display",
    "textAlign": "left",
    "lineHeight": 38,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 365,
    "height": 87,
    "left": 25,
    "top": 90
  },
  "componentmahallah1_line2": {
    "opacity": 0.12999999523162842,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 365,
    "height": 1,
    "left": 25,
    "top": 920.5
  },
  "componentmahallah1_cafe1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 365,
    "height": 273,
    "left": 25,
    "top": 152
  },
  "componentmahallah1_cafe1_rectangle8": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 50,
    "borderTopRightRadius": 50,
    "borderBottomLeftRadius": 50,
    "borderBottomRightRadius": 50,
    "width": 291,
    "height": 36,
    "left": 37,
    "top": 237
  },
  "componentmahallah1_cafe1_maskGroup1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 365,
    "height": 273,
    "left": 0,
    "top": 0
  },
  "componentmahallah1_cafe1_maskGroup1_steveJohnson1210701Unsplash": {
    "opacity": 0.8500000238418579,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 402,
    "height": 273,
    "left": -19,
    "top": 0
  },
  "componentmahallah1_cafe1_maskGroup1_rectangle4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(247, 252, 253, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 50,
    "borderTopRightRadius": 50,
    "borderBottomLeftRadius": 50,
    "borderBottomRightRadius": 50,
    "width": 365,
    "height": 273,
    "left": 0,
    "top": 0
  },
  "componentmahallah1_modalSimple": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 365,
    "height": 191,
    "left": 25,
    "top": 461
  },
  "componentmahallah1_modalSimple_rectangle355": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 12,
    "borderTopRightRadius": 12,
    "borderBottomLeftRadius": 12,
    "borderBottomRightRadius": 12,
    "shadowColor": "rgb(17,  17,  17)",
    "shadowOpacity": 0.14901960784313725,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 24,
    "width": 365,
    "height": 191,
    "left": 0,
    "top": 0
  },
  "componentmahallah1_modalSimple_group273": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 301,
    "height": 143,
    "left": 32,
    "top": 24
  },
  "componentmahallah1_modalSimple_group273_openingHours8Am6pm": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(136, 136, 136, 1)",
    "fontSize": 17,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Inter",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 301,
    "height": 54,
    "left": 0,
    "top": 89
  },
  "componentmahallah1_modalSimple_group273_group252": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 301,
    "height": 57,
    "left": 0,
    "top": 32
  },
  "componentmahallah1_modalSimple_group273_group252_studentMall": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(17, 17, 17, 1)",
    "fontSize": 24,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 301,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "componentmahallah1_modalSimple_group273_group251": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 253,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "componentmahallah1_modalSimple_group273_group251_x60361964000": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(17, 17, 17, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 253,
    "height": 20,
    "left": 0,
    "top": 0
  }
});