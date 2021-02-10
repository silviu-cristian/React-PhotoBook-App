import React, { Component } from "react";
import { Icon, Modal, Button, TextInput } from "react-materialize";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

// class ContactForm extends Component {
//   componentDidMount() {
//     const options = {
//       onOpenStart: () => {
//         console.log("Open Start");
//       },
//       onOpenEnd: () => {
//         console.log("Open End");
//       },
//       onCloseStart: () => {
//         console.log("Close Start");
//       },
//       onCloseEnd: () => {
//         console.log("Close End");
//       },
//       inDuration: 250,
//       outDuration: 250,
//       opacity: 0.7,
//       dismissible: false,
//       startingTop: "4%",
//       endingTop: "10%"
//     };
//     M.Modal.init(this.ContactForm, options);
//     // let instance = M.Modal.getInstance(this.Modal);
//     // instance.open();
//     // instance.close();
//     // instance.destroy();
//   }

//   render() {
//     return (
//       <div>
//         <a
//           className="waves-effect waves-light btn modal-trigger"
//           data-target="modal1"
//         >
//           Modal
//         </a>

//         <div
//           ref={ContactForm => {
//             this.ContactForm = ContactForm;
//           }}
//           id="modal1"
//           className="modal"
//         >
//           {/* If you want Bottom Sheet Modal then add
//                         bottom-sheet class to the "modal" div
//                         If you want Fixed Footer Modal then add
//                         modal-fixed-footer to the "modal" div*/}
//           <div className="modal-content">
//             <h4>Modal Header</h4>
//             <p>A bunch of text</p>
//           </div>
//           <div className="modal-footer">
//             <a className="modal-close waves-effect waves-red btn-flat">
//               Disagree
//             </a>
//             <a className="modal-close waves-effect waves-green btn-flat">
//               Agree
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// class ContactForm extends Component {
//   componentDidMount() {
//     const options = {
//       onOpenStart: () => {
//         console.log("Open Start");
//       },
//       onOpenEnd: () => {
//         console.log("Open End");
//       },
//       onCloseStart: () => {
//         console.log("Close Start");
//       },
//       onCloseEnd: () => {
//         console.log("Close End");
//       },
//       inDuration: 250,
//       outDuration: 250,
//       opacity: 0.7,
//       dismissible: false,
//       startingTop: "4%",
//       endingTop: "10%"
//     };
//     M.Modal.init(this.ContactForm, options);
//     // let instance = M.Modal.getInstance(this.Modal);
//     // instance.open();
//     // instance.close();
//     // instance.destroy();
//   }
//   render() {
//     return (
//       <>
//         <a
//           className="waves-effect modal-trigger"
//           data-target="modal1"
//         >
//           Contact
//           <Icon left>mail_outline</Icon>
//         </a>

//         <div
//           ref={Modal => {
//             this.Modal = Modal;
//           }}
//           id="modal1"
//           className="modal"
//         >
//           <div className="modal-content">
//             <h5>Got questions?  Contact us!</h5>

//             <p>We usually answer within a day.</p>
//           </div>
//           <div className="modal-footer">

//             <a className="modal-close waves-effect waves-green btn-flat">
//               Send
//             </a>
//             <a className="modal-close waves-effect waves-red btn-flat">
//               Cancel
//             </a>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default ContactForm;

function ContactForm() {
  return (
    <>
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Send
          </Button>,
          <Button flat modal="close" node="button" waves="red">
            Cancel
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        id="Modal1"
        open={false}
        options={{
          dismissible: false,
          endingTop: "5%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        // root={[object HTMLBodyElement]}
        trigger={
          <a className="modal-trigger" data-target="modal1">
            Contact
            <Icon left>mail_outline</Icon>
          </a>
        }
      >
        <div className="container">
          <h4>Got questions? Contact us!</h4>
         

          <TextInput
            id="TextInput-4"
            placeholder="Your Name"
            icon={<Icon>person</Icon>}
          />
          <TextInput
            id="TextInput-4"
            placeholder="Your phone number"
            icon={<Icon>phone</Icon>}
          />
          <TextInput
            email
            icon={<Icon>email</Icon>}
            error="Invalid email format"
            id="TextInput-4"
            placeholder="Email"
            success="Great"
            validate
          />
          <TextInput
            data-length={100}
            id="TextInput-4"
            placeholder="Message"
            icon={<Icon>message</Icon>}
          />
        </div>
      </Modal>
    </>
  );
}

export default ContactForm;
