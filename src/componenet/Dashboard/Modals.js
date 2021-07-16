import React from "react";
import "./Modals.css";
import './Cards'
import { Button, Modal } from "react-bootstrap";
import Cards from "./Cards";

// I have used react-bootstrap for styling purposes

class Modals extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      fieldvalues: {
        Gname: "",
        Descip: ""
      }

    };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }
  handleCard() {
    this.setState({ show: !this.state.show });
    <Cards />
  }
  render() {
    return (
      <div className="modals">
        <Button
          className="createGroup"
          onClick={() => {
            this.handleModal();
          }}
        >
          Create
        </Button>
        <Modal show={this.state.show} onHide={() => this.handleModal()}>
          <Modal.Header closeButton>
            <b>Create Group</b>
          </Modal.Header>

          <Modal.Body>
{/* 
          Inline styling have in done at input tag.Please go through it */}
          .

            <div>
             
              <label style={{ color: "#8181A5", fontSize: "15px" }}>
                Name of group
              </label>
              <br />
              <input
                style={{ backgroundColor: "ivory" }}
                type="text"
                placeholder=" Enter Name of group"
                maxLength="50"
                value={}
              />
              <br />
              <br />
              <label style={{ color: "#8181A5", fontSize: "15px" }}>
                Description 
              </label>
              <br />
              <textarea 
                style={{ backgroundColor: "ivory",width: "400px"}}
                type="text"
                rows="4"
                column='40'
                placeholder="About the group"
                value={}
               
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="createGroup"
              onClick={() => {
                this.handleCard();
                // <Cards />
              }}
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Modals;



//  <div className={classes.paper}>
//    <h2 id="transition-modal-title">Create Group</h2>
//    <p id="transition-modal-description">react-transition-group animates me.</p>
//    <h4>Group type</h4>
//    <input type="radio" value="OPEN" defaultChecked name="Group" /> Open
//    <input type="radio" value="CLOSE" name="Group" /> Close
//    <p>Name of the group</p>
//    <input type="text" placeholder="Name of the group">
//      {" "}
//    </input>
//  </div>;





















// import React from "react";
// import "./Modals.css";
// import './Cards'
// import { Button, Modal } from "react-bootstrap";
// import Cards from "./Cards";

// // I have used react-bootstrap for styling purposes

// class Modals extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show: false,

//     };
//   }

//   handleModal() {
//     this.setState({ show: !this.state.show });
//   }
//   handleCard() {
//     this.setState({ show: !this.state.show });
//     <Cards />
//   }
//   render() {
//     return (
//       <div className="modals">
//         <Button
//           className="createGroup"
//           onClick={() => {
//             this.handleModal();
//           }}
//         >
//           Create
//         </Button>
//         <Modal show={this.state.show} onHide={() => this.handleModal()}>
//           <Modal.Header closeButton>
//             <b>Create Group</b>
//           </Modal.Header>

//           <Modal.Body>
// {/* 
//           Inline styling have in done at input tag.Please go through it */}
//           .

//             <div>
             
//               <label style={{ color: "#8181A5", fontSize: "15px" }}>
//                 Name of group
//               </label>
//               <br />
//               <input
//                 style={{ backgroundColor: "ivory" }}
//                 type="text"
//                 placeholder=" Enter Name of group"
//                 maxLength="50"
//                 value={}
//               />
//               <br />
//               <br />
//               <label style={{ color: "#8181A5", fontSize: "15px" }}>
//                 Description 
//               </label>
//               <br />
//               <textarea 
//                 style={{ backgroundColor: "ivory",width: "400px"}}
//                 type="text"
//                 rows="4"
//                 column='40'
//                 placeholder="About the group"
//                 value={}
               
//               />
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               className="createGroup"
//               onClick={() => {
//                 this.handleCard();
//                 // <Cards />
//               }}
//             >
//               Create
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default Modals;