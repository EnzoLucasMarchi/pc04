import './Card.css'
export const Card = ({ name, username, mail }) => {
    return (
        <>
            <li className="card">
                <div className="card-container">
                    <figure className="img-container">
                        <img className="card-img" src="https://fastly.picsum.photos/id/134/300/300.jpg?hmac=b3gMz-pfa737vVp8dKmvrVyW-eLFdbJ6Zju4XLUr62k"></img>
                    </figure>
                    <div className="card-body">
                        <div className='card-details'>
                            <h3 className="name">{name}</h3>
                            <p className="username">{`@${username}`}</p>
                            <p className="mail">{mail}</p>
                        </div>

                    </div>
                </div>
            </li>


        </>
    );
};

// 