
import "../styles/Header.css";

export default function Header({ data, setData }) {

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
        <div className="header-container">
            <input className="name" onChange={e => handleHeaderData(e, "name")} value={data.name} />
            <input className="title" onChange={e => handleHeaderData(e, "title")} value={data.title} />
            <div className="contact-container">
                <input className="location" onChange={e => handleHeaderData(e, "location")} value={data.location} />
                <span className="hypen">-</span>
                <input className="phone" maxLength="12" onChange={e => handleHeaderData(e, "phone")} value={data.phone} />
                <span className="hypen">-</span>
                <input className="email" onChange={e => handleHeaderData(e, "email")} value={data.email} />
            </div>
        </div>
    );
}