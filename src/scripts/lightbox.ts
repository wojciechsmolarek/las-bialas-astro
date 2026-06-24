// Lightbox gallery functionality
const images = [
  '/foto/lasbialas1.webp',
  '/foto/lasbialas2.webp',
  '/foto/lasbialas3.webp',
  '/foto/lasbialas4.webp',
  '/foto/lasbialas5.webp',
  '/foto/lasbialas6.webp',
  '/foto/lasbialas7.webp',
  '/foto/lasbialas8.webp',
  '/foto/lasbialas-jacuzzi1.webp',
  '/foto/sauna1.webp',
  '/foto/lasbialas1.webp',
  '/foto/sauna4.webp',
  '/foto/sauna5.webp',
  '/foto/lasbialas-jacuzzi2.webp',
  '/foto/sauna7.webp',
  '/foto/lasbialas-jacuzzi3.webp'
];

let currentImageIndex = 0;

export function openImage(index: number) {
  currentImageIndex = index;
  const overlay = document.getElementById('lightbox-overlay');
  const overlayImage = document.getElementById('lightbox-image') as HTMLImageElement;

  if (overlay && overlayImage) {
    overlayImage.src = images[currentImageIndex];
    overlay.classList.add('active');
  }
}

export function closeImage() {
  const overlay = document.getElementById('lightbox-overlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

export function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  const overlayImage = document.getElementById('lightbox-image') as HTMLImageElement;
  if (overlayImage) {
    overlayImage.src = images[currentImageIndex];
  }
}

export function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const overlayImage = document.getElementById('lightbox-image') as HTMLImageElement;
  if (overlayImage) {
    overlayImage.src = images[currentImageIndex];
  }
}

// Keyboard navigation
if (typeof document !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    const overlay = document.getElementById('lightbox-overlay');
    if (overlay && overlay.classList.contains('active')) {
      if (e.key === 'Escape') closeImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }
  });

  // Make functions globally available
  if (typeof window !== 'undefined') {
    (window as any).openImage = openImage;
    (window as any).closeImage = closeImage;
    (window as any).prevImage = prevImage;
    (window as any).nextImage = nextImage;
  }
}
