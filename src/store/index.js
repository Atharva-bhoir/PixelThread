import { proxy } from "valtio";




// This is a default global state that will be used to manage the state of the application
// Whenever a key value changes, only that part of the UI will be re-rendered
// This is a performance optimization technique to avoid re-rendering the entire UI
const state = proxy({
    intro: true,
    color: '#EFBD4E',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './catLogo.png',
    fullDecal: './texture.jpg',
    model: 'tshirt'
});

export default state;