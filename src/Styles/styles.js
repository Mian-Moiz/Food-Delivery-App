import { Platform, StyleSheet } from "react-native";
import Colors from "../Colors/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const styles = StyleSheet.create({
  wrapper: {
     backgroundColor: Colors.green
     },
  lottie: {
    width: 100,
    height: 100,
    
  },
  dropdownButtonStyle1: {
    width: "100%",
    // height: wp(12),
    backgroundColor: Colors.offWhite,
    borderRadius: 4,
    height: Platform.OS === "ios" ? wp(12.5) : wp(13.5),
    marginTop: Platform.OS === "ios" ? wp(2) : wp(2.2),
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  dropdownButtonStyle: {
    width: "98%",
    // height: wp(12),
    backgroundColor: Colors.offWhite,
    borderRadius: 8,
    height: Platform.OS === "ios" ? wp(12.5) : wp(13),
    marginTop: Platform.OS === "ios" ? wp(2) : wp(2.2),
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  dropdownButtonTextStyle: {
    fontSize: 14,
    color: "black",
    textAlign: "left",
  },
  dropdownStyle: { backgroundColor: "#EFEFEF", borderRadius: 8 },
  dropdownRowStyle: { backgroundColor: "#EFEFEF", borderBottomColor: "#C5C5C5", },
  dropdownRowTextStyle: {
    fontSize: wp("4%"),
    color: Colors.black,
    textAlign: "left"
  },
  inputStyle: {
    // width: wp("90%"),
    height: wp(12),
    marginHorizontal: wp(0),
    marginVertical: wp(1.5),
    borderWidth: 1,
    padding: 6,
    paddingHorizontal: wp(3),
    borderRadius: 5,
    borderColor: Colors.gray,
    textAlign: "left",
    marginRight: wp(2),
    fontSize: 14,
    // 
    color: Colors.black,

  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.green,
    margin: 20,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexGrow: 0,
  },
  signupTextContainer: {
    marginTop: wp(10),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "5%",
    // fontFamily:Platform.OS =="android" ? JsonServer.fontFamilyBold : null
  },
  textInputStyle: {
    top: 5,
    // height: wp(12),
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: Colors.offWhite,
    marginTop: 10,
    // 
  },
  checkboxContainer: {
    flexGrow: 0,
    flexDirection: "row",
    marginTop: 20,
    marginRight: wp(10)
  },
  btnContainerChecked: {
    flexDirection: "row",
    backgroundColor: Colors.primaryColor,
    height: 50,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    backgroundColor: Colors.primaryColor,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp(10),
    height: wp(13),
  },
  btnContainerUnChecked: {
    flexDirection: "row",
    backgroundColor: Colors.offWhite,
    height: 50,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primaryColor,
  },
  txtContainerChecked: {
    fontSize: wp(6),
    lineHeight: Platform.OS == "android" ? null : wp(16),
    color: Colors.white,
    marginLeft:20
   
  },
  txtContainerUnChecked: {
    fontSize: 22,
    lineHeight: Platform.OS == "android" ? null : wp(14),
    color: Colors.primaryColor,
    

  },
  checkboxTextStyle: {
    textAlignVertical: "center", fontSize: 14,
     lineHeight: wp(5), color: Colors.black
  },
  termsConditionStyle: {
    color: Colors.primaryColor,
    fontSize: wp(3.5),
    
  },
  bottomTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    
  },
  bottomTextStyle: {
    color: Colors.primaryColor,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: Colors.primaryColor,
    fontSize: 14,
    
  },
  verificationText: { fontSize: 25, marginBottom: 10, color: Colors.black },
  otpInputStyle: { width: 50, height: 50, justifyContent: 'center', alignItems: "center" },
  OtpCodeInputFieldStyle: {
    width: 35,
    height: 45,
    borderWidth: 1,
    // borderBottomWidth: 1,
    borderRadius: 8,
    margin: 5,
    // padding:5,
    color: Colors.black,
    justifyContent: 'center',
    alignItems: "center",
    textAlign: "center",
    fontSize: 16
  },
  drawersection: {
    backgroundColor: Colors.white,
    flexDirection: "column",
    flex: 3,
  },
  draweritem: {
    padding: 12,
    flexDirection: "row",
  },
  itemname: {
    fontSize: 12,
    fontWeight: "700",
  },
  itemtext: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: "center",
  },
  dropdownText: { fontSize: wp(4), color: Colors.gray, marginLeft: wp(4), fontWeight: "600" },
  dropdownPickerStyle: {
    height: wp(13),
    marginTop: wp(5.5),
    marginBottom: wp(-1.5),
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: Colors.offWhite,
    borderColor: Colors.gray,
  },
  dropdownContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    height: wp(12),
  },
  dividerStyle: { width: wp("100%"), marginVertical: wp(1), borderColor: Colors.gray, elevation: 0.5, borderWidth: Platform.OS == "ios" ? 0.5 : null },
  modelStyle: { flex: 1, borderTopRightRadius: 20, borderTopLeftRadius: 20, marginTop: wp(5), borderColor: Colors.gray, borderBottomWidth: 0, elevation: 5, marginBottom: wp(-10), backgroundColor: Colors.offWhite, overflow: "hidden" },

});
export default styles;
