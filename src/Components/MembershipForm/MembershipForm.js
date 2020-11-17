import React from 'react';
import { useForm } from 'react-hook-form';
import './MembershipForm.css';

import { TextField } from '@material-ui/core';
const MembershipForm = () => {
    

    const { register, handleSubmit } = useForm();

    const onSubmit = (data)=>{

            console.log(data)
    }
   
    return (
        <div className="row">
            <div className="col-75">
                <div className="contaier">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input id="inputName" name="riviewName" placeholder='Your Name' className="form-control" ref={register({ required: true })}/> */}
                <div className="row">
                    <div className="col-50">
                        <label for="cname">First Name</label>
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" ref={register({ required: true })}></input>
                        <label for="cname">Email</label>
                            <input type="text" id="email" name="email" placeholder="Email" ref={register({ required: true })}></input>
                        <label for="cname">Date of Birth</label>
                            
                        <TextField
                            id="date"
                            label=""
                            type="date"
                            defaultValue="2017-05-24"
                            // className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />


                        <label for="cname">Address Line 1</label>
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" ref={register({ required: true })}></input>

                        <label for="cname">City</label>
                            <input type="text" id="email" name="email" placeholder="Email" ref={register({ required: true })}></input>
                    </div>

                    <div className="col-50">
                    <label for="cname">Last Name</label>
                        <input type="text" id="cname" name="lastName" placeholder="" ref={register({ required: true })}></input>
                
                    <label for="cname">Phone</label>
                        <input type="text" id="phone" name="phone" placeholder="" ref={register({ required: true })}></input>
               
                    <label for="cname">Gender</label> 
                    <select id="country" name="country">
                        <option value="australia">Male</option>
                        <option value="canada">Female</option>
                        <option value="usa">Others</option>
                        </select>
                
                    <label for="cname">Country</label>
                        <input type="text" id="cname" name="lastName" placeholder="" ref={register({ required: true })}></input>
                
                <label for="cname">Post Code</label>
                    <input type="text" id="phone" name="text" placeholder="" ref={register({ required: true })}></input>


                    </div>


                </div>

                
                    
                    <button type="submit" style={{float:'right',backgroundColor:'yellow',
                    marginRight:'2%',padding:'10px',width:'5%',border:'none',cursor:'pointer'}}>Next</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default MembershipForm;