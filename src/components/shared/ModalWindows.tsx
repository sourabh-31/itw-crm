"use client";

import AddNotes from "../my-brands/AddNotes";
import DeleteNode from "../my-brands/DeleteNode";
import DeleteNote from "../my-brands/DeleteNote";
import EditNote from "../my-brands/EditNote";
import MoveNode from "../my-brands/MoveNode";
import AddTask from "../tasks/AddTask";
import DeleteTask from "../tasks/DeleteTask";
import DuplicateTask from "../tasks/DuplicateTask";
import EditTask from "../tasks/EditTask";
import ReAssignTask from "../tasks/ReAssignTask";
import ReOpenTask from "../tasks/ReOpenTask";
import TaskDetails from "../tasks/TaskDetails";
import TaskSortBy from "../tasks/TaskSortBy";
import Modal from "./Modal";

export default function ModalWindows() {
  return (
    <>
      <Modal.Window name="delete-node">
        <DeleteNode />
      </Modal.Window>

      {/* Move person */}
      <Modal.Window name="move-person">
        <MoveNode title="Move Person" />
      </Modal.Window>

      {/* Move Department */}
      <Modal.Window name="move-department">
        <MoveNode title="Move Department" />
      </Modal.Window>

      {/* Move Department */}
      <Modal.Window name="move-location">
        <MoveNode title="Move Location" />
      </Modal.Window>

      {/* Add notes */}
      <Modal.Window name="add-notes">
        <AddNotes />
      </Modal.Window>

      {/* Edit note */}
      <Modal.Window name="edit-note">
        <EditNote />
      </Modal.Window>

      {/* Delete Note */}
      <Modal.Window name="delete-note">
        <DeleteNote />
      </Modal.Window>

      {/* Add task */}
      <Modal.Window name="add-task">
        <AddTask />
      </Modal.Window>

      {/* Edit task */}
      <Modal.Window name="edit-task">
        <EditTask />
      </Modal.Window>

      {/* View task info */}
      <Modal.Window name="view-task-info">
        <TaskDetails />
      </Modal.Window>

      {/* Delete task */}
      <Modal.Window name="delete-task">
        <DeleteTask />
      </Modal.Window>

      {/* Reassign task */}
      <Modal.Window name="reassign-task">
        <ReAssignTask />
      </Modal.Window>

      {/* Reopentask */}
      <Modal.Window name="reopen-task">
        <ReOpenTask />
      </Modal.Window>

      {/* Task sort by */}
      <Modal.Window name="taskSortBy">
        <TaskSortBy />
      </Modal.Window>

      {/* duplicate tasks */}
      <Modal.Window name="duplicate-task">
        <DuplicateTask />
      </Modal.Window>
    </>
  );
}
