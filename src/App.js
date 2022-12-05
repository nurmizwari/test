import logo from "./logo.svg";
import "./App.css";
import logo1 from "./asset/image 4.png";
import log1 from "./asset/Logo.png";
import log2 from "./asset/Digicoins.png";

function App() {
  return (
    <div className="App">
      <div>
        <nav class="navbar bg-dark">
          <div class="container-fluid">
            <div className="col">
              <img src={log1} alt="logo1" />
              <img src={log2} alt="logo2" />
            </div>
            <p>EN/USD | </p>
          </div>
        </nav>
      </div>

      <div className="container ">
        <div className="text-end mt-5">
          <p>Already Have Account? Login</p>
        </div>
        <div className="row">
          <div className="col">
            <img src={logo1} alt="logo" width={399} />
          </div>
          <div className="col">
            <h1>Sign up</h1>
            <p>use Your OpenId To Sign Up</p>
            <p>Email | Phone Number</p>
            <form>
              <div class="col-8 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="col-8 mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="col-8 mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <p>Referral ID(optional)</p>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  By signing up I agree that I'm 18 years of age or older,to the
                  User Agreements, Privacy Policy,Cookie Policy,E-Sign Consent
                </label>
              </div>

              <button type="submit" class="col-8 btn btn-primary mb-5">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
