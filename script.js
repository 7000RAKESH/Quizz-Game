let loginbtn = document.querySelector(".login");
let signupbtn = document.querySelector(".signup");

let loginSubmit = document.getElementById("loginsub");
let signupSubmit = document.querySelector("#signupsub");
let loginForm = document.getElementById("loginform");
let signupForm = document.getElementById("signupform");
let member = document.querySelector(".member");

// loginForm.style.display = "none";
signupForm.style.display = "none";
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

let otpBox = document.querySelector("#otpbox");
otpBox.style.display = "none";
signupSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let userName = document.querySelector("#username").value;
  let input2 = document.querySelector("#signupmail").value;
  let password2 = document.getElementById("signuppassword").value;
  let confirmPass = document.querySelector("#csignuppassword").value;
  if (password2 != confirmPass || password2 == "" || confirmPass == "") {
    alert("please enter correct password");
  } else if (password2 == confirmPass) {
    userExist(userName, input2, password2);
  }
});

async function userExist(userName, input2, password2) {
  let response = await fetch("https://json-server-users.onrender.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  let users = await response.json();
  let userExists = users.some(
    (user) => user.userName === userName && user.email === input2
  );

  if (userExists) {
    alert("Username or email already exists. Please try a different one.");
    return; // Stop further execution if user exists
  } else {
    alert("registered successfully");
    signup(userName, input2, password2);
  }
}

function signup(userName, email, password) {
  let otp = Math.floor(Math.random() * 10000);
  alert(`OTP : ${otp}`);

  signupForm.style.display = "none";
  otpBox.style.display = "flex";

  let otpBut = document.querySelector(".otpbut");

  otpBut.addEventListener("click", async () => {
    let otpInput = document.querySelector("#otp").value;

    if (otp == otpInput) {
      alert("OTP verified. Registering...");

      try {
        let postResponse = await fetch(
          "https://json-server-users.onrender.com/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ userName, email, password }),
          }
        );

        if (postResponse.ok) {
          alert("Registration successful!");
          window.location.href = "./home.html";
        } else {
          alert("Failed to register. Please try again.");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration. Please try again.");
      }
    } else {
      alert("Wrong OTP. Please try again.");
    }
  });
}

async function signin(input, password) {
  let data = await fetch("https://json-server-users.onrender.com/users");
  let users = await data.json();
  let user = users.find(
    (element) => element.email === input && element.password === password
  );
  if (user) {
    alert("login successfull");
    window.location.href = "./home.html";
    // window.open("./home.html");
  } else {
    alert("User not Found or Entered  Invalid Details ");
  }
}
loginSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.querySelector("#loginmail").value;
  let password = document.getElementById("loginpassword").value;
  signin(input, password);
});

loginbtn.addEventListener("click", () => {
  loginForm.style.display = "flex";
  signupForm.style.display = "none";
  otpBox.style.display = "none";
});
signupbtn.addEventListener("click", () => {
  loginForm.style.display = "none";
  signupForm.style.display = "flex";
  otpBox.style.display = "none";
});
member.addEventListener("click", () => {
  signupForm.style.display = "flex";
  loginForm.style.display = "none";
  otpBox.style.display = "none";
});
