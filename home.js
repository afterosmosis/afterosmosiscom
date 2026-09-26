// Native audio controls provide keyboard access and never autoplay.
const featuredAudio = document.querySelector('#featured audio');
featuredAudio.addEventListener('error', () => {
  const message = document.createElement('p');
  message.setAttribute('role', 'status');
  message.textContent = 'Audio could not be loaded. Listen on Bandcamp using the link here.';
  if (!document.querySelector('#featured [role="status"]')) featuredAudio.after(message);
});
