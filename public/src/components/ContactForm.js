


//import emailjs from 'emailjs-com';

//import Swal from 'sweetalert2';

//const SERVICE_ID = "gmail";
//const TEMPLATE_ID = "template_v11wukn";
//const USER_ID = "user_SqFXomacMciyfPDTErzh1";

import React from 'react';

  export default class ContactForm extends React.Component {
    state = {
      error: undefined
    };
   
    render() {
      return (
        <contactform>
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form >
          <div className="Cform" >
            <div className="formline2">
            <input className="add-option__input" type="text" name="name" placeholder=" Your Name..." />
            <input className="add-option__input" type="text" name="email" placeholder=" Your Email..." />
            </div>
            <div>
            <input className="msg__input" type="text" name="subject" placeholder="subject..." />
            </div>
            <div>
            <input className="textarea__input" type="textarea" name="message"  placeholder=" Message..." />
            </div>
            
              <div ><button type="submit"  className="submit-btn">Send Message</button></div>
            </div>
          </form>
        </div>
        </contactform>
      );
    }
  }