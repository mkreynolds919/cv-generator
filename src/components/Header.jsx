
export default function Header({ setData, header }) {

    function handleHeaderData(e, item) {
        const itemData = e.target.value;

        setData(prevData => ({
            ...prevData,
            header: {
                ...prevData.header,
                [item]: itemData,
            },
        }));
    }

    return (
        <>
            <textarea className="name" onChange={e => handleHeaderData(e, "name")}>{header.name}</textarea>
            <textarea className="title" onChange={e => handleHeaderData(e, "title")}>{header.title}</textarea>
            <textarea className="location" onChange={e => handleHeaderData(e, "location")}>{header.location}</textarea>
            <div className="contact-container">
                <textarea className="phone" onChange={e => handleHeaderData(e, "phone")}>{header.phone}</textarea>
                <span className="hypen">-</span>
                <textarea className="email">{e => handleHeaderData(e, "email")}</textarea>
            </div>
        </>
    );
}