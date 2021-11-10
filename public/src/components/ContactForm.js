


//

//import Swal from 'sweetalert2';

//

import React,{useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
  return(
    <p>Your message has been successfully sent. we will contact you soon.</p>
  )
}
     function ContactForm (props) {
     const result = useState(false);
     const showResult = useState(false);
     const sendEmail = (e) => {
      e.preventDefault();
    
    emailjs.sendForm("service_ireaen2","template_6xsfrrb",e.target,"user_SqFXomacMciyfPDTErzh1")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    showResult(true);
    };
    //const state = {
      //error: undefined
    //};
    
  
      return (
        <contactform>
        <div>
        <div className="Cform" >
          <form  action="" onSubmit={sendEmail}>
          
            <div className="formline2">
            <input className="add-option__input" type="text" name="fullName" placeholder=" Your Name..." required />
            <input className="add-option__input" type="text" name="email" placeholder=" Your Email..." required />
            </div>
            <div>
            <input className="msg__input" type="text" name="phone" placeholder="Phone Number..." required />
            </div>
            <div>
            <input className="msg__input" type="text" name="subject" placeholder="subject..." required />
            </div>
            <div>
            <textarea className="textarea__input" type="textarea" name="message"  placeholder=" Message..." required />
            </div>
            <br />
              <div ><button type="submit"  className="submit-btn">Send Message</button>
              
              </div>
            
          </form>
          </div>
        </div>
        </contactform>
      );
      }
  export default ContactForm;