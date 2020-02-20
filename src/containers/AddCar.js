 import { connect } from 'react-redux';
 import  AddCar from '../components/AddCar';
 import { addCar } from  '../redux/actions'
 

 export const mapDispatchToProps = (dispatch)=> {
     return (
        (car) => dispatch(addCar(car))
     )
 }
 export default connect(null, mapDispatchToProps)(AddCar)

 