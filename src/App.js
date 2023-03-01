import logo from "./logo.svg";
import "./App.css";
import { CometChat } from "@cometchat-pro/chat";
import { CometChatUI } from "../src/cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/CometChatUI";

function App() {
  const appID = process.env.REACT_APP_ID;
  const region = process.env.REACT_APP_REGION;
  let authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY;
  const appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(region)
    .build();
  CometChat.init(appID, appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
    },
    (error) => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );

  const CreateUser = () => {
    var uid = "user2";
    var name = "sam";

    var user = new CometChat.User(uid);
    user.setName(name);
    CometChat.createUser(user, authKey).then(
      (user) => {
        console.log("user created", user);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };
  const LoginUser = () => {
    const uid = "SUPERHERO1";

    CometChat.login(uid, authKey).then(
      (user) => {
        console.log("Login Successful:", { user });
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      }
    );
  };
  LoginUser();

  return (
    <div style={{ width: "800px", height: "800px" }}>
      <CometChatUI />
    </div>
  );
}

export default App;
