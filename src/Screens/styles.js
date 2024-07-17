// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    /* flex: 1,
    justifyContent: 'center',
    alignItems: 'center', */
    backgroundColor: '#19392C',
  },
  section: {
    width: '100%',
    height: '90%',
    borderRadius: 35,
    backgroundColor: '#EDF1B6',
    padding: 40,
    marginTop: 20,
  },
  logotext: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  label: {
    /*  width: '80%', */
    textAlign: 'left',
    marginBottom: 4,
    fontSize: 12,
    color: '#19392C',
    fontWeight: '500',
  },
  input: {
    height: 40,
    borderColor: '#CBE3C7',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    color: '#19392C',
  },
  arrow:{
    paddingLeft: 20,
    paddingTop: 30,
  },

  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#CBE3C7',
    borderRadius: 7,
  },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: '#CBE3C7', // Inactive tab background color
    alignItems: 'center',
    borderRadius: 7,
  },
  activeTab: {
    backgroundColor: '#ffffff',
    borderRadius: 7,
    margin: 2,
  },
  tabText: {
    color: '#000',
    fontSize: 14,
  },
  activetabText: {
    color: '#19392C',
    fontSize: 14,
    fontWeight: 700,

  },
  button: {
    backgroundColor: '#30472f', // Button background color
    padding: 15,
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
  },




  /* Verify screen */
  verifysection:{
   
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'center',
    gap: 10,
    paddingBottom: 200,
  },
  codecontainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  code: {
    width: 70,
    height: 60,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    borderColor: '#CBE3C7',
  },

  keycontainer: {
    padding: 20,
  },
  row:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  key:{
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBE3C7',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  keyText: {
    fontSize: 24,
    color: '#19392C',
  },
});
