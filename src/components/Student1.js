import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export default function Student1(props) {
    const { student, xoa, toggle_complete, toggle_edit } = props;
    return (
        <div className="student">
            <span
                className={`${student.isComplete ? "complete" : ""}`}
                onClick={() => toggle_complete(student.id)}
            >
                {student.name}
            </span>
            <BiEditAlt onClick={() => toggle_edit(student.id)} />
            <AiOutlineDelete onClick={() => xoa(student.id)} />
        </div>
    );
}
