import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </nav>
      </header>
      <main>
        <form>
          <div class="form-group">
            <label for="email">Email address:</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              id="email"
            />
          </div>

          <div class="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter password"
              id="pwd"
            />
          </div>
          <div class="form-group">
            <label for="pwd">Re-type Password:</label>
            <input
              type="password"
              class="form-control"
              placeholder="Re-type password"
              id="pwd"
            />
          </div>
          <div class="name">
            <div class="form-group">
              <label for="Firstname">First Name:</label>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                id="Firstname"
              />
              <label for="Firstname">Last Name:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                id="Lastname"
              />
            </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              I agree with terms and conditions
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label">
              I want to receive the newsletter
            </label>
          </div>
          <div class="reg">
            <button type="submit" class="btn btn-primary reg">
              Register
            </button>
          </div>
        </form>
      </main>
      <footer>
        <p>Copyright ©2021 by Sliti Mehdi. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
