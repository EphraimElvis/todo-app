//Google api Auth
window.onload = handleClientLoad();
let GoogleAuth;
let SCOPE = "https://www.googleapis.com/auth/drive"; //"https://www.googleapis.com/auth/drive";

function handleClientLoad() {
  //Load the API'c client and auth2 modules.
  // Call the initClient function after the modules load.
  gapi.load("client:auth2", initClient);
}

function initClient() {
  let discoveryUrl =
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
  gapi.client
    .init({
      apiKey: "AIzaSyBe3rR8naqNYcWIXmvzEowLYd7HFWILZKQ",
      clientId:
        "1006320060318-92d4obifbh5ju9c6vpeq93mlavcdns13.apps.googleusercontent.com",
      scope: SCOPE,
      discoveryDocs: [discoveryUrl],
    })
    .then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();
      //Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      GoogleAuth.currentUser.get();

      setSigninStatus();

      // Call handleAuthClick function when user clicks on
      //      "Sign In/Authorize" button.
      $("#sign-in-or-out-button").click(function () {
        handleAuthClick();
      });
      $("#revoke-access-button").click(function () {
        revokeAccess();
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      saveToFile();
    });
}

function handleAuthClick() {
  if (GoogleAuth.isSignedIn.get()) {
    //User is authorized and has clicked 'sign out' button.
    GoogleAuth.signOut();
  } else {
    GoogleAuth.signIn();
  }
}

function revokeAccess() {
  GoogleAuth.disconnect();
}

function setSigninStatus() {
  let user = GoogleAuth.currentUser.get();
  let isAuthorized = user.hasGrantedScopes(SCOPE);
  if (isAuthorized) {
    $("#sign-in-or-out-button").html("Sign out");
    $("#revoke-access-button").css("display", "inline-block");
    $("#auth-status").html(
      "You are currently signed in and have granted " + "access to this app."
    );
  } else {
    $("#sign-in-or-out-button").html("Sign In/Authorize");
    $("#revoke-access-button").css("display", "none");
    $("#auth-status").html(
      "You have not authorized this app or you are " + "signed out."
    );
  }
}

function updateSigninStatus() {
  setSigninStatus();
}

//save todos to google drive
//create the file name .json
//save to the file .json

function saveToFile() {
  gapi.client.drive.files
    .create(
      {
        kind: "drive",
        id: "19rpukN291ZBHUmnARsu2LLMswcJJ30Fv",
        name: "Cats",
        mimeType: "application/vnd.google-apps.folder",
      },
      function (err, file) {
        if (err) {
          //Handle error
          console.error(err);
        } else {
          console.log("Field id: ", file.id);
        }
      }
    )
    .then((res) => {
      console.log("response ", res);
    });
}
