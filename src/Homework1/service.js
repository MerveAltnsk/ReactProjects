import axios from 'axios';

const getData = async (userId) => {
  try {
    // Kullanıcı bilgilerini çekme
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    // Kullanıcının postlarını çekme
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    
    // Kullanıcı bilgileri ve postları birleştirme
    const userData = userResponse.data;
    const userPosts = postsResponse.data;
    
    return {
      ...userData,
      posts: userPosts
    };
  } catch (error) {
    console.error('Veri alınırken hata oluştu:', error);
    throw error;
  }
};

export default getData;
