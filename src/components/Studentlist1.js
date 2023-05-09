import Formadd1 from "./Formadd1";
import Student from "./Student1";
import uuid from "react-uuid";
import { useState } from "react";
import Formedit from "./Formedit";
import FourButton from "./4button";
const getlist = (stulist, flag) => {
    if (flag == "fillAll") {
        return stulist;
    } else if (flag == "fillChecked") {
        return stulist.filter((item) => item.isComplete);
    } else if (flag == "fillNoChecked") {
        return stulist.filter((item) => !item.isComplete);
    } else {
        return stulist;
    }
};
export default function Studentlist1() {
    const [flag, setFlag] = useState("fillAll");
    const [editID, setEditID] = useState("");
    const [list, setList] = useState([
        {
            id: 1,
            name: "Lê Văn Tí",
            isComplete: false,
        },
        {
            id: 2,
            name: "Lê Văn Sửu",
            isComplete: false,
        },
        {
            id: 3,
            name: "Lê Văn Dần",
            isComplete: false,
        },
    ]);
    const themMoi = (tenMoi) => {
        setList([...list, { id: uuid(), name: tenMoi, isComplete: false }]);
    };
    const xoa = (id) => {
        const dsMoi = list.filter((stu) => stu.id !== id);
        setList(dsMoi);
    };
    const toggle_complete = (id) => {
        setList(
            list.map((value) =>
                value.id === id ? { ...value, isComplete: !value.isComplete } : value
            )
        );
    };
    const toggle_edit = (id) => {
        setEditID(id);
    };
    const editList = (id, name) => {
        setList(
            list.map((value) => (value.id === id ? { ...value, name: name } : value))
        );
        setEditID("");
    };
    const fillAll = () => {
        setFlag("fillAll");
    };
    const fillChecked = () => {
        setFlag("fillChecked");
    };
    const fillNoChecked = () => {
        setFlag("fillNoChecked");
    };
    const XoaChecked = () => {
        const dsCheck = list.filter((stu) => !stu.isComplete);
        setList(dsCheck);
    };
    return (
        <div className="studentList">
            <Formadd1 themmoi={themMoi} />
            {getlist(list, flag).map((value, index) => (
                // value.isEdit ? (
                //     <Formedit value={value} key={index} editList={editList} />
                // ) /// cách 1
                <Student
                    student={value}
                    key={index}
                    xoa={xoa}
                    toggle_complete={toggle_complete}
                    toggle_edit={toggle_edit}
                    editID={editID}
                    editList={editList}
                />
            ))}
            <FourButton
                fillAll={fillAll}
                fillChecked={fillChecked}
                fillNoChecked={fillNoChecked}
                XoaChecked={XoaChecked}
            />
        </div>
    );
}
