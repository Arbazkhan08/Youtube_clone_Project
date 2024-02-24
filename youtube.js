const Data ={
    "videos": [
        {
            "title": "CYBERSECURITY RoadMap",
            "link": "https://youtu.be/vK4Mno4QYqk?si=EdXylvnMkGdMViZ1",
            "profile_image": "channels4_profile1.jpg",
            "views": 10000,
            "likes": 500,
            "dislikes": 20
        },
        {
            "title": "The Importance of Python",
            "link": "https://youtu.be/RgcEylkiaXE?si=vK_MHTyuO7PJM97g",
            "profile_image": "channels4_profile2.jpg",
            "views": 15000,
            "likes": 700,
            "dislikes": 30
        },
        {
            "title": "Learn JavaScript in 30 Minutes",
            "link": "https://www.youtube.com/watch?v=wZZ7oFKsKzY",
            "profile_image": "https://randomuser.me/api/portraits/men/3.jpg",
            "views": 20000,
            "likes": 1000,
            "dislikes": 40
        },
        {
            "title": "Travel Vlog: Exploring Bali",
            "link": "https://www.youtube.com/watch?v=HMUDVMiITOU",
            "profile_image": "https://randomuser.me/api/portraits/women/4.jpg",
            "views": 25000,
            "likes": 1200,
            "dislikes": 50
        },
        {
            "title": "Introduction to Data Science",
            "link": "https://www.youtube.com/watch?v=IZb6z-ORtTk",
            "profile_image": "https://randomuser.me/api/portraits/men/5.jpg",
            "views": 30000,
            "likes": 1500,
            "dislikes": 60
        },
        {
            "title": "DIY Home Renovation Ideas",
            "link": "https://www.youtube.com/watch?v=KxGRhd_iWuE",
            "profile_image": "https://randomuser.me/api/portraits/women/6.jpg",
            "views": 35000,
            "likes": 1800,
            "dislikes": 70
        },
        {
            "title": "How to Start a YouTube Channel",
            "link": "https://www.youtube.com/watch?v=SkRSXFQerZs",
            "profile_image": "https://randomuser.me/api/portraits/men/7.jpg",
            "views": 40000,
            "likes": 2000,
            "dislikes": 80
        },
        {
            "title": "The Art of Photography",
            "link": "https://www.youtube.com/watch?v=WZjFMj7OHTw",
            "profile_image": "https://randomuser.me/api/portraits/women/8.jpg",
            "views": 45000,
            "likes": 2200,
            "dislikes": 90
        },
        {
            "title": "Healthy Cooking Recipes",
            "link": "https://www.youtube.com/watch?v=StTqXEQ2l-Y",
            "profile_image": "https://randomuser.me/api/portraits/men/9.jpg",
            "views": 50000,
            "likes": 2500,
            "dislikes": 100
        },
        {
            "title": "Gardening Tips for Beginners",
            "link": "https://www.youtube.com/watch?v=Z8jZo7Mjoa0",
            "profile_image": "https://randomuser.me/api/portraits/women/10.jpg",
            "views": 55000,
            "likes": 2800,
            "dislikes": 110
        },
        {
            "title": "How to Play Guitar",
            "link": "https://www.youtube.com/watch?v=NBVvxaRWfGI",
            "profile_image": "https://randomuser.me/api/portraits/men/11.jpg",
            "views": 60000,
            "likes": 3000,
            "dislikes": 120
        },
        {
            "title": "Personal Finance Tips",
            "link": "https://www.youtube.com/watch?v=I_izvAbhExY",
            "profile_image": "https://randomuser.me/api/portraits/women/12.jpg",
            "views": 65000,
            "likes": 3200,
            "dislikes": 130
        },
        {
            "title": "Learn French in 30 Days",
            "link": "https://www.youtube.com/watch?v=13QD0Gb6j-0",
            "profile_image": "https://randomuser.me/api/portraits/men/13.jpg",
            "views": 70000,
            "likes": 3500,
            "dislikes": 140
        },
        {
            "title": "Home Workout Routine",
            "link": "https://www.youtube.com/watch?v=FbGFeJb7CEM",
            "profile_image": "https://randomuser.me/api/portraits/women/14.jpg",
            "views": 75000,
            "likes": 3700,
            "dislikes": 150
        }
    ]
}

const maincontent = document.querySelector(".maincontent");

const main = async () => {
    Data.videos.forEach(video => {
        const embedLink = video.link.replace('watch?v=', 'embed/');
        maincontent.innerHTML += `
        <div class="video-container">
            <div class="mainvideo1"><iframe src="${embedLink}" frameborder="0" allowfullscreen></iframe></div>
            <div class="mainvideo">
                <div class="videocontent">
                    <img class="videocontent" src="${video.profile_image}" alt="">
                </div>
                <div class="Videotitle">
                    <h4>${video.title}</h4>
                    <p>${video.views} views</p>
                </div>
            </div>
        </div>`;
    });
};

main();

