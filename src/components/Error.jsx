import { useNavigate, Link } from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate();

    const handleClick = () => {
        //navigate("/");
        navigate(-1);
    }

    return (
        <div style={{margin: 10}}>
            <h2>접속할 수 없는 URL입니다.</h2>
            <button onClick={handleClick}>홈으로</button>
        </div>
    )
}
