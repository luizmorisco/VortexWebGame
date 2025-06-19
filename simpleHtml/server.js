const nextButton = document.querySelector('.next-btn')
const video = document.querySelector('.hero-video')

const movieList = [
  "../mediaFiles/videos/hero-1.mp4",
  "../mediaFiles/videos/hero-2.mp4",
  "../mediaFiles/videos/hero-3.mp4",
  "../mediaFiles/videos/hero-4.mp4"
]

let index = 0

nextButton.addEventListener('click', () => {
  index = (index + 1) % movieList.length
  video.querySelector('source').src = movieList[index]
  video.load()
  video.play()
})
