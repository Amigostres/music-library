import { useState } from 'react'

export default function GalleryItem ({ item }) {
    let [galleryItem, setGalleryItem] = useState(false)

    
    return(
        <div 
            onClick={() => setGalleryItem( !galleryItem )}
            style={{ 'display': 'inline-block' }}
        >
            <p>one Gallery Item</p>
        </div>
    )
}