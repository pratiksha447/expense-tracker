// import {Button, withAuthenticator} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import {handleSignOut} from "./components/SignOut.tsx";
import DynamDBService from "./services/DynamDBService.tsx";
import {Button} from "@aws-amplify/ui-react";

function App() {
    return (
        <>
            <h1>Hello, Amplify!!!!</h1>
            <Button
            onClick={handleSignOut}>
                Sign out!!
            </Button>
            <DynamDBService>

            </DynamDBService>
        </>
    );
}

export default App;
// export default withAuthenticator(App);