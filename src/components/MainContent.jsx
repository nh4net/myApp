import { useContext } from 'react';
import ThemeContext from './ThemeContext'

export default function MainContent(props) {
    const { theme, toggleTheme, lang, setLang } = useContext(ThemeContext);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            padding: '1.5rem',
            backgroundColor: theme === 'light' ? 'white' : 'black',
            color: theme === 'light' ? 'black' : 'white',
        }}
        >
            <p>테마 변경 가능한 웹 사이트입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>

            <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                style={{ marginLeft: '10px' }}
            >
                <option value="ko">한글</option>
                <option value="en">영어</option>
            </select>
            { lang==="ko" ? <p>안녕하세요.</p> : <p>Hello</p> }
        </div>
    );
}
