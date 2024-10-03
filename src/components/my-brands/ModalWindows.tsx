"use client";

import Modal from "../shared/Modal";
import DeletePerson from "./DeletePerson";
import MovePerson from "./MovePerson";

export default function ModalWindows() {
  return (
    <>
      <Modal.Window name="delete-person">
        <DeletePerson />
      </Modal.Window>

      <Modal.Window name="move-person">
        <MovePerson />
      </Modal.Window>
    </>
  );
}
