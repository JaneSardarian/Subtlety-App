import item1 from './images/item-1.jpg'
import item2 from './images/item-2.jpg'
import item3 from './images/item-3.jpg'
import item4 from './images/item-4.jpg'
import item5 from './images/item-5.jpg'
import call from './images/call.jpg'
import email from './images/email.jpg'
import chat from './images/chat.jpg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#bestsellers', text: 'bestsellers' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#about', text: 'about' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: email,
    title: 'EMAIL A BEAUTY ADVISOR',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,officia.',
  },
  {
    id: 2,
    icon: call,
    title: 'ENJOY A FREE SAMPLE',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,officia.',
  },
  {
    id: 3,
    icon: chat,
    title: 'LIVE CHAT WITH AN EXPERT',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,officia.',
  },
]

export const bestsellers = [
  {
    id: 1,
    image: item1,
    title: 'Toning Toner',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?',
    price: '29,99',
  },
  {
    id: 2,
    image: item2,
    title: 'Centella Cream',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?',
    price: '26,99',
  },
  {
    id: 3,
    image: item3,
    title: 'Centella Travel Kit',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?',
    price: '39,99',
  },
  {
    id: 4,
    image: item4,
    title: 'Light Cleansing Oil',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?',
    price: '23,99',
  },
  {
    id: 5,
    image: item5,
    title: 'Ampoule Facial Serum',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?',
    price: '36,99',
  },
]
