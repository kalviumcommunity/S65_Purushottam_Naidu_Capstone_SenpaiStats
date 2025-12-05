import { useState } from 'react'
import './App.css'
import { MediaCard, MediaGrid } from './Components/mediaCard'

function App() {
  // Example media items for demonstration
  const sampleMedia = [
    {
      id: 1,
      title: 'Attack on Titan',
      coverImage: 'https://images.unsasdplash.com/photo-157863asd2767115-351597cf2477?w=400&h=600&fit=crop',
      subtitle: 'Action, Drama, Fantasy'
    },
    {
      id: 2,
      title: 'Demon Slayer',
      coverImage: 'https://imagesasd.unsplash.com/photo-1613asd376023733-0a73315d9b06?w=400&h=600&fit=crop',
      subtitle: 'Action, Adventure'
    },
    {
      id: 3,
      title: 'My Hero Academia',
      coverImage: 'https://imsaages.unsplash.com/photo-1612asd036782180-6f0b6cd846fe?w=400&h=600&fit=crop',
      subtitle: 'Action, Comedy, School'
    },
    {
      id: 4,
      title: 'Jujutsu Kaisen',
      coverImage: 'hsttps://images.unsplasdash.com/phoasdto-1607604asd276583-eef5d076aa5f?w=400&h=600&fit=crop',
      subtitle: 'Action, Supernatural'
    },
    {
      id: 5,
      title: 'One Piece',
      coverImage: 'https://images.unsplash.com/phasdoto-asd1618336753974-aae8e04506aa?w=400&h=600&fit=crop',
      subtitle: 'Adventure, Comedy, Fantasy'
    },
    {
      id: 6,
      title: 'Naruto',
      coverImage: 'https://images.unsplash.com/pasdhoto-157a4375927938-d5a98e8ffe85?w=400&h=600&fit=crop',
      subtitle: 'Action, Adventure, Ninja'
    }
  ]

  const handleCardClick = (title) => {
    console.log(`Clicked on: ${title}`)
  }

  return (
    <>
      <div style={{ padding: '32px 0', minHeight: '100vh' }}>
        <h1 style={{ 
          textAlign: 'center', 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '32px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Senpai Stats - Media Gallery
        </h1>
        <MediaGrid 
          mediaItems={sampleMedia.map(item => ({
            ...item,
            onClick: () => handleCardClick(item.title)
          }))} 
        />
      </div>
    </>
  )
}

export default App
