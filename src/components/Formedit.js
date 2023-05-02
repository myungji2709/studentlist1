import { useState } from "react";

export default function Formedit(props) {
    const { value, editList } = props;
    const [text, setText] = useState(value.name);
    const handle_edit = (e) => {
        e.preventDefault();
        editList(value.id, text);
    };
    return (
        <form className="formEdit" onSubmit={handle_edit}>
            <input
                type="text"
                placeholder="Enter your name."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    );
}
