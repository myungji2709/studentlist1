import Formadd1 from "./Formadd1";
import Student from "./Student1";
import uuid from "react-uuid";
import { useState } from "react";
import Formedit from "./Formedit";
export default function Studentlist1() {
    const [list, setList] = useState([
        {
            id: 1,
            name: "Lê Văn Tí",
            isComplete: false,
            isEdit: false,
        },
        {
            id: 2,
            name: "Lê Văn Sửu",
            isComplete: false,
            isEdit: false,
        },
        {
            id: 3,
            name: "Lê Văn Dần",
            isComplete: false,
            isEdit: false,
        },
    ]);
    const [listsave, setLS] = useState(() => {
        let localList;
        if (localStorage.getItem("list")) {
            localList = JSON.parse(localStorage.getItem("list"));
        } else {
            localList = list;
        }
        return localList;
    });
    const themMoi = (tenMoi) => {
        const newList = [
            ...listsave,
            { id: uuid(), name: tenMoi, isComplete: false, isEdit: false },
        ];
        localStorage.setItem("list", JSON.stringify(newList));
        setLS(newList);
    };
    const xoa = (id) => {
        const dsMoi = listsave.filter((stu) => stu.id !== id);
        localStorage.setItem("list", JSON.stringify(dsMoi));
        setLS(dsMoi);
    };
    const toggle_complete = (id) => {
        setLS(
            listsave.map((value) =>
                value.id === id ? { ...value, isComplete: !value.isComplete } : value
            )
        );
    };
    const toggle_edit = (id) => {
        setLS(
            listsave.map((value) =>
                value.id === id ? { ...value, isEdit: !value.isEdit } : value
            )
        );
    };
    const editList = (id, name) => {
        setLS(
            listsave.map((value) =>
                value.id === id ? { ...value, name: name, isEdit: false } : value
            )
        );
    };
    return (
        <div className="studentList">
            <Formadd1 themmoi={themMoi} />
            {listsave.map((value, index) =>
                value.isEdit ? (
                    <Formedit value={value} key={index} editList={editList} />
                ) : (
                    <Student
                        student={value}
                        key={index}
                        xoa={xoa}
                        toggle_complete={toggle_complete}
                        toggle_edit={toggle_edit}
                    />
                )
            )}
        </div>
    );
}
