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
    let data = fetch("https://json-server-users.onrender.com/users");
    data
      .then((res) => {
        return res.json();
      })
      .then((indata) => {
        indata.forEach((element) => {
          if (element.email == input2 && element.userName == userName) {
            alert("user is already exist");
          } else if (element.email != input2 && element.userName != userName) {
            signup(userName, input2, password2);
          }
        });
      });
  }
});

// function fetch(userName, input2, password2) {
//   let data = fetch("http://localhost:3000/users");
//   data
//     .then((res) => {
//       return res.json();
//     })
//     .then((indata) => {
//       indata.forEach((element) => {
//         if (element.email == input2 && element.userName == userName) {
//           alert("user is already exist");
//         } else if (element.email != input2 && element.userName != userName) {
//           signup(userName, input2, password2);
//         }
//       });
//     });
// }

function signup(userName, input2, password2) {
  let otp = Math.floor(Math.random() * 10000);
  alert(`otp : ${otp}`);
  signupForm.style.display = "none";
  otpBox.style.display = "flex";
  let otpBut = document.querySelector(".otpbut");
  otpBut.addEventListener("click", () => {
    let otpInput = document.querySelector("#otp").value;
    if (otp == otpInput) {
      alert("registered successfull");
      let post = fetch("https://json-server-users.onrender.com/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userName, input2, password2 }),
      });
      let data = fetch("https://json-server-users.onrender.com/users");
      data
        .then((res) => {
          return res.json();
        })
        .then((indata) => {
          console.log(indata);
        });
      window.location.href = "./home.html";
    } else {
      alert("wrong otp");
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
