import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import volume_down_icon from './speaker-down.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'

import bbimg1 from './bollywood/images/bb1.jpg'
import bbimg2 from './bollywood/images/bb2.jpg'
import bbimg3 from './bollywood/images/bb3.jpg'
import bbimg4 from './bollywood/images/bb4.jpg'
import bbimg5 from './bollywood/images/bb5.jpg'
import bbimg6 from './bollywood/images/bb6.jpg'
import bbimg7 from './bollywood/images/bb7.jpg'
import bbimg8 from './bollywood/images/bb8.jpg'
import bbimg9 from './bollywood/images/bb9.jpg'
import bbimg10 from './bollywood/images/bb10.jpg'


import bbsong1 from "./bollywood/aajkiraat.mp3"
import bbsong2 from "./bollywood/jurajabi.mp3"
import bbsong3 from "./bollywood/Oye-Bhootni.mp3"
import bbsong4 from "./bollywood/Gori-Hai-Kalaiyan.mp3"
import bbsong5 from "./bollywood/jaat.mp3"

import bbsong6 from "./bollywood/ghar.mp3"
import bbsong7 from "./bollywood/bharat.mp3"
import bbsong8 from "./bollywood/hum-apke-bina.mp3"
import bbsong9 from "./bollywood/pushpa.mp3"
import bbsong10 from "./bollywood/Bad-Newz.mp3"

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
    volume_down_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        category:"Trending-India",
        id:0,
        name: "Aaj Ki Raat",
        album: "Stree 2",
        image: bbimg1,
        file:bbsong1,
        desc:"Amitabh Bhattacharya, Sachin-Jigar, Madhubanti Bagchi, Divya Kumar ",
        duration:"3:49"

    },
    {
        category:"Top-50-India",
        id:1,
        name: "Zohra Jabeen",
        album: "Sikandar",
        image: bbimg2,
        file:bbsong2,
        desc:"Pritam, Dev Negi, Nakash Aziz, Mellow D, Danish Sabri, Sameer ",
        duration:"3:24"

    },
    {
        category:"Trending-India",
        id:2,
        name: "Oye Bhootni Ke",
        album: "Oye Bhootni Ke",
        image: bbimg3,
        file:bbsong3,
        desc:"Nakash Aziz, Asif Chandwani  ",
        duration:"3:48"

    },
    {
        category:"Trending-India",
        id:3,
        name: "Gori Hai Kalaiyan",
        album: "Mere Husband Ki Biwi",
        image: bbimg4,
        file:bbsong4,
        desc:"Badshah, Akshay & IP, Kanika Kapoor  ",
        duration:"2:16"

    },
    {
        category:"Top-50-India",
        id:4,
        name: "Jaat Theme Song ",
        album: "Jaat",
        image: bbimg5,
        file:bbsong5,
        desc:"Thaman S, Amrit Maan ",
        duration:"3:22"

    },
    {
        category:"Top-50-India",
        id:5,
        name: "Ghar",
        album: "The Diplomat",
        image: bbimg6,
        file:bbsong6,
        desc:"Anurag Saikia, Varun Jain, Kausar Munir, Romy ",
        duration:"3:51"

    },
    {
        category:"Top-50-India",
        id:6,
        name: "Bharat ",
        album: "The Diplomat",
        image: bbimg7,
        file:bbsong7,
        desc:"A.R. Rahman, Manan Bhardwaj ",
        duration:"3:19"

    },

    {
        category:"Trending-Global",
        id:7,
        name: "Hum Aapke Bina ",
        album: "Sikandar",
        image: bbimg8,
        file:bbsong8,
        desc:"Pritam, Arijit Singh, Sameer Anjaan ",
        duration:"4:52"

    },
    {
        category:"Mega-Hits",
        id:8,
        name: "Angaaron ",
        album: "Pushpa 2 The Rule",
        image: bbimg9,
        file:bbsong9,
        desc:"Shreya Ghoshal, Devi Sri Prasad, Raqueeb Alam ",
        duration:"4:20"

    },
    {
        category:"Trending-Global",
        id:9,
        name: "Mere Mehboob Mere Sanam ",
        album: "Bad Newz",
        image: bbimg10,
        file:bbsong10,
        desc:"Javed Akhtar, Udit Narayan, Alka Yagnik, Lijo George-Dj Chetas, Anu Malik  ",
        duration:"3:02"

    },
    {
        category:"Mega-Hits",
        id:10,
        name: "Song One",
        image: img1,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00"
    },
    {
        category:"Happy-Favorites",
        id:11,
        name: "Song Two",
        image: img2,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20"
    },
    {
        category:"Mega-Hits",
        id:12,
        name: "Song Three",
        category:"Trending-Global",
        image: img3,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        category:"Mega-Hits",
        id:13,
        name: "Song Four",
        image: img4,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:50"
    },
    {
        category:"Happy-Favorites",
        id:14,
        name: "Song Five",
        image: img5,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:10"
    },
    {
        category:"Happy-Favorites",
        id:15,
        name: "Song Six",
        category:"Trending-Global",
        image: img14    ,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    },
    {
        category:"Trending-Global",
        id:16,
        name: "Song Seven",
        image: img7,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18"
    },
    {
        category:"Trending-Global",
        id:17,
        name: "Song Eight",
        image: img12,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    },

   
]