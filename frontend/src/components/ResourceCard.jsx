function ResourceCard({ resource }) {
  const formattedDate = resource.date
    ? new Date(resource.date).toLocaleDateString()
    : null;

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      margin: '1rem 0',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    }}>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>

      {resource.type === 'video' ? (
        <a href={resource.link} target="_blank" rel="noopener noreferrer">📺 Watch Video</a>
      ) : (
        <a href={resource.link} target="_blank" rel="noopener noreferrer">📄 View Document</a>
      )}

      {formattedDate && (
        <p style={{ fontSize: '0.8rem', color: '#777', marginTop: '0.5rem' }}>
          📅 Added on: {formattedDate}
        </p>
      )}
    </div>
  );
}

export default ResourceCard;
