import * as React from "react";
import { makeStyles, Image } from "@fluentui/react-components";
import { TEXT_LOGIN_BUTTON, TEXT_LOGIN_DESCRIPTION, TEXT_LOGIN_TITLE } from "../../constants";
import { QuirePrimaryButton } from "../components/QuireComponent";

const useStyles = makeStyles({
  login__view: {
    padding: "16px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
});

interface LoginViewProps {
  onLogIn?: () => void;
}

const LoginView: React.FC<LoginViewProps> = (prop: LoginViewProps) => {

  const styles = useStyles();

  return (
    <section className={styles.login__view}>
      <Image width="100%" height="auto" src="assets/welcome_start.png" title="welcome_view"/>
      <span>{TEXT_LOGIN_TITLE}</span>
      <span>{TEXT_LOGIN_DESCRIPTION}</span>
      <QuirePrimaryButton style={{ marginTop: "16px" }}
        content={TEXT_LOGIN_BUTTON} onClick={prop.onLogIn}/>
    </section>
  ) 
};

export default LoginView;