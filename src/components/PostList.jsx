import React, { useState, useEffect } from 'react';

export default function PostList() {
  // 1. 상태 관리: 데이터, 로딩 상태, 에러 상태를 각각 분리하여 관리합니다.
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. 생명주기 및 비동기 처리: 컴포넌트 마운트 시 최초 1회 데이터를 요청합니다.
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 비동기 통신 (Async/Await 패턴 적용)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // HTTP 상태 코드가 200~299 범위를 벗어날 경우 명시적 에러 발생
        if (!response.ok) {
          throw new Error('데이터를 불러오는데 실패했습니다.');
        }
        
        const data = await response.json();
        
        // 실습 화면의 가독성을 위해 100개의 데이터 중 상위 10개만 절삭하여 상태에 저장합니다.
        setPosts(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); // 성공/실패 여부와 관계없이 로딩 상태를 해제합니다.
      }
    };

    fetchPosts();
  }, []);

  // 3. 조건부 렌더링: 데이터 통신 상태에 따라 다른 UI를 반환합니다.
  if (isLoading) return <p>데이터를 불러오는 중입니다...</p>;
  if (error) return <p style={{ color: 'red' }}>에러 발생: {error}</p>;

  // 4. 리스트 렌더링: 통신이 완료되면 map() 함수를 통해 배열 데이터를 화면에 출력합니다.
  return (
    <div style={{ padding: '20px' }}>
      <h2>JSONPlaceholder 게시글 목록</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li 
            key={post.id} 
            style={{ 
              border: '1px solid #ddd', 
              marginBottom: '10px', 
              padding: '15px', 
              borderRadius: '5px' 
            }}
          >
            <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>
              {post.id}. {post.title}
            </h4>
            <p style={{ margin: 0, color: '#666' }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}