
import "../styles/Header.css";

export default function Header({ data, setData, isEditing }) {

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

    if (isEditing) {
        return (
            <div className="header-container">
                <input className="name" onChange={e => handleHeaderData(e, "name")} value={data.name} style={{width: `${Math.max(data.name.length + 2, 1)}ch`}} />
                <input className="title" onChange={e => handleHeaderData(e, "title")} value={data.title} style={{width: `${Math.max(data.title.length + 2, 1)}ch`}}/>
                <div className="contact-container">
                    <input className="location" onChange={e => handleHeaderData(e, "location")} value={data.location} style={{width: `${Math.max(data.location.length + 1, 1)}ch`}} />
                    <span className="hypen">-</span>
                    <input className="phone" maxLength="12" onChange={e => handleHeaderData(e, "phone")} value={data.phone} style={{width: `${Math.max(data.phone.length, 1)}ch`}} />
                    <span className="hypen">-</span>
                    <input className="email" onChange={e => handleHeaderData(e, "email")} value={data.email} style={{width: `${Math.max(data.email.length + 2, 1)}ch`}} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="header-container">
                <div className="name">{data.name}</div>
                <div className="title">{data.title}</div>
                <div className="contact-container">
                    <div className="location">{data.location}</div>
                    <div className="hypen">-</div>
                    <div className="phone">{data.phone}</div>
                    <div className="hypen">-</div>
                    <div className="email">{data.email}</div>
                </div>
            </div>
        );
    }


    
}