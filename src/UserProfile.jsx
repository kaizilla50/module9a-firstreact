function UserProfile() {
  const name = "Kai Shimoda";
  const bio = "Computer Science student passionate about technology, problem solving, and building communities through coding and collaboration.";
  const profileImage = "https://th.bing.com/th/id/R.19cef1b98a62fc013aa2a8fa2397f991?rik=%2bD2CNU8h8CVFVw&pid=ImgRaw&r=0";

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e1e5e9', marginBottom: '16px' }}
      />
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000' }}>{name}</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>{bio}</p>
    </div>
  );
}

export default UserProfile;
