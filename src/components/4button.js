export default function FourButton(props) {
    const btnList=[
        {
            id:1,
            name:'Xóa Checked',
            handleClick:()=> props.XoaChecked()
        },
        {
            id:2,
            name:'Lọc Tất Cả',
            handleClick:()=> props.fillAll()
        },
        {
            id:3,
            name:'Lọc Checked',
            handleClick:()=> props.fillChecked()
        },
        {
            id:4,
            name:'Lọc noChecked',
            handleClick:()=> props.fillNoChecked()
        }
    ]
    return (
        <div className="fourButton">
            {btnList.map((item,key)=>(
                <button key={key} onClick={item.handleClick}>{item.name}</button>
            ))}
        </div>
    )
}