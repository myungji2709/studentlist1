import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Formedit from "./Formedit";

export default function Student1(props) {
    const { student, xoa, toggle_complete, toggle_edit, editID, editList } =
        props;
    const isEdit = editID === student.id;
    return (
        <div className="student">
            {isEdit ? (
                <Formedit value={student} editList={editList} />
            ) : (
                <>
                    <input
                        type="checkbox"
                        checked={student.isComplete}
                        onChange={() => toggle_complete(student.id)}
                    />
                    <span
                        onDoubleClick={() => toggle_edit(student.id)}
                    >
                        {student.name}
                    </span>
                    <BiEditAlt onClick={() => toggle_edit(student.id)} />
                    <AiOutlineDelete onClick={() => xoa(student.id)} />
                </>
            )}
        </div>
    );
}
