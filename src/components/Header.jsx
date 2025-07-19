
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
        <>
            <textarea className="name" onChange={e => handleHeaderData(e, "name")} value={data.name} />
            <textarea className="title" onChange={e => handleHeaderData(e, "title")} value={data.title} />
            <textarea className="location" onChange={e => handleHeaderData(e, "location")} value={data.location} />
            <div className="contact-container">
                <textarea className="phone" onChange={e => handleHeaderData(e, "phone")} value={data.phone} />
                <span className="hypen">-</span>
                <textarea className="email" onChange={e => handleHeaderData(e, "email")} value={data.email} />
            </div>
        </>
    );
}