import { useNavigate, Link } from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/product/books/101")
    }
    
    return (
        <div style={{ margin: 10 }}>
            <h2>접속할 수 없는 URL 입니다.</h2>
            <button onClick={handleClick}>상품으로 이동</button>
        </div>
    );
}
