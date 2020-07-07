
    


State = {
pfno:"",
pfnoError:"",
password:"",
passwordError:"",
};
 

handleChange = (event) => {
this.setState({
[event.target.name]:event.target.value,
    });
if (event.target.name === "pfno") {
this.setState({ pfnoError:"" });
    }
if (event.target.name === "password") {
this.setState({ passwordError:"" });
    }
  };
validate = () => {
letpfnoError = "";
letpasswordError = "";
 
if (!this.state.pfno) {
pfnoError = "PF Number is required!";
    }
 
if (!this.state.password) {
passwordError = "Password is required!";
    }
 
if (pfnoError || passwordError) {
this.setState({ pfnoError, passwordError });
returnfalse;
    }
 
returntrue;
  };
handleSubmit = (event) => {
event.preventDefault();
constisValid = this.validate();
if (isValid) {
axios
        .post("http://3.7.1.24:4949/api/staff/authenticate", {
pf_number:this.state.pfno,
password:this.state.password,
        })
        .then(async (res) => {
if (res.data.status) {
// console.log(res.data.data);
this.props.addUserData(res.data.data);
this.props.addToken(res.data.token);
awaitlocalStorage.setItem("token", res.data.token);
// await localStorage.setItem(
//   "user_data",
//   JSON.stringify(res.data.data)
// );
 
this.props.history.push("/dashboard");
          } else {
alert(res.data.message);
          }
        })
        .catch((err) => {
console.log(err);
        });
    }
  };




    

<InputGroupclassName="mb-3">
<InputGroupAddonaddonType="prepend">
<InputGroupText>
<iclassName="icon-user"></i>
</InputGroupText>
</InputGroupAddon>
<Input
type="text"
placeholder="PF Number"
name="pfno"
value={this.state.pfno}
onChange={this.handleChange}
/>
<spanstyle={{ fontSize:12, color:"red" }}>
<b>{this.state.pfnoError}</b>
</span>
</InputGroup>

