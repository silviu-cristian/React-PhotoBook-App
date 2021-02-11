import React from "react";
import { Icon, Modal, Button, TextInput } from "react-materialize";
import "materialize-css/dist/css/materialize.min.css";

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
