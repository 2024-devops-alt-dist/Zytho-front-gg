import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { FloatLabel } from "primereact/floatlabel";
import AuthService from "../services/AuthService";
import { Password } from "primereact/password";

export default function DialogAdmin() {
  const [visible, setVisible] = useState<boolean>(false);
  const [authService] = useState(new AuthService());
  const toast = useRef<Toast>(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    try {
      authService.login({ email: email, password: password }).then((res) => {
        console.log(res);
        setPassword("");
        setEmail("");
        setVisible(false);
        accept();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const accept = () => {
    toast.current?.show({
      severity: "success",
      summary: "Confirmed",
      detail: "You have accepted",
      life: 3000,
    });
    navigate("/");
  };

  // const reject = () => {
  //   toast.current?.show({
  //     severity: "warn",
  //     summary: "Rejected",
  //     detail: "You have rejected",
  //     life: 3000,
  //   });
  // };

  return (
    <>
      <Toast ref={toast} />
      <div className="card flex justify-content-center">
        <div className="hidden lg:block">
          <Button label="Connexion" onClick={() => setVisible(true)} />
        </div>
        <div className="lg:hidden">
          <Button icon="pi pi-user" onClick={() => setVisible(true)} />
        </div>
        <Dialog
          header="Page de connexion"
          visible={visible}
          style={{ width: "80vw" }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <div className="card">
            <div className="flex flex-column md:flex-row">
              <div className="w-full md:w-5 flex flex-column align-items-center justify-content-around gap-5 py-5">
                <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                  <FloatLabel>
                    <label htmlFor="email" className="w-6rem">
                      Email
                    </label>
                    <InputText
                      id="email"
                      type="email"
                      inputMode="email"
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                      required
                      className="w-12rem"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatLabel>
                </div>
                <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                  <FloatLabel>
                    <label htmlFor="password" className="w-6rem">
                      Mot de passe
                    </label>
                    <Password
                      feedback={false}
                      id="password"
                      type="password"
                      className="w-12rem"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FloatLabel>
                </div>
                <Button
                  onClick={submitLogin}
                  label="Se connecter"
                  icon="pi pi-user-plus"
                  className="w-10rem mx-auto p-button-success"
                ></Button>
              </div>
              <div className="w-full md:w-2">
                <Divider layout="vertical" className="hidden md:flex"></Divider>
              </div>
              <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                <Button
                  label="Inscription"
                  icon="pi pi-user-plus"
                  severity="success"
                  className="w-10rem"
                ></Button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
