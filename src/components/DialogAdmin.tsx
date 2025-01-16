import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function DialogAdmin() {
  const [visible, setVisible] = useState<boolean>(false);
  const toast = useRef<Toast>(null);
  const navigate = useNavigate();

  const accept = () => {
    toast.current?.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have accepted",
      life: 3000,
    });
    navigate("/admin");
  };

  const reject = () => {
    toast.current?.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog
        group="declarative"
        visible={visible}
        onHide={() => setVisible(false)}
        message="Etes vous admin ?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
        style={{ width: "50vw" }}
        breakpoints={{ "1100px": "75vw", "960px": "100vw" }}
      />
      <div className="card flex justify-content-center">
        <Button
          path={""}
          onClick={() => setVisible(true)}
          labelButton="Admin"
        />
      </div>
    </>
  );
}
