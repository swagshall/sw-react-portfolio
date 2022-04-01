
import "./Contact.css";


const Contact = () => {

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's chat</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4e5An71TVIRGtPVmTLf87PQhhJSj3DGT3mGauPqukC0IeU1_NEkS6ngBI6pfUwIfOWk&usqp=CAU" alt="" className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGWNixrXfkjnfdzBf0kXHROBh-8ZPTLvOnA&usqp=CAU" alt="" />
              Shifrawagsahll@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRh-5664Cfs2snsLO9aTMKJAGQ0s2IA0yGkg&usqp=CAU" alt="" />
             Brooklyn, New York 
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Have any questions or inquiries, contact me!
          </p>
          <form >
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
