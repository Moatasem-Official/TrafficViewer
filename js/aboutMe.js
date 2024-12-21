// Team members data
const userData = {
    member1: {
        name: "Moatasem Nagy",
        role: "Team Leader",
        email: "moatasem.nagy@example.com",
        location: "Cairo, Egypt",
        education: "Faculty of Engineering, Communications Department, 3rd Year",
        bio: "Team leader and full-stack developer with expertise in traffic management systems. Passionate about creating efficient and scalable solutions.",
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        social: {
            linkedin: "https://linkedin.com/in/moatasem-nagy",
            github: "https://github.com/moatasem-nagy",
            twitter: "https://twitter.com/moatasem_nagy"
        }
    },
    member2: {
        name: "Mostafa Elbadry",
        role: "Web Development",
        email: "mostafa.elbadry@example.com",
        location: "Cairo, Egypt",
        education: "Faculty of Engineering, Communications Department, 3rd Year",
        bio: "Backend developer with expertise in building secure and scalable systems. Focused on creating reliable communication between web platforms and IoT devices.",
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&clotheType=ShirtCrewNeck&clotheColor=Blue02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        social: {
            linkedin: "https://linkedin.com/in/mostafa-elbadry",
            github: "https://github.com/mostafa-elbadry",
            twitter: "https://twitter.com/mostafa_elbadry"
        }
    },
    member3: {
        name: "Mahmoud Walid",
        role: "Software Development",
        email: "mahmoud.walid@example.com",
        location: "Cairo, Egypt",
        education: "Faculty of Engineering, Communications Department, 3rd Year",
        bio: "Software engineer specializing in ESP and Arduino programming. Expert in device synchronization and embedded systems development.",
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&clotheType=ShirtVNeck&clotheColor=Blue01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        social: {
            linkedin: "https://linkedin.com/in/mahmoud-walid",
            github: "https://github.com/mahmoud-walid",
            twitter: "https://twitter.com/mahmoud_walid"
        }
    },
    member4: {
        name: "Yousef Mostafa",
        role: "Software Development",
        email: "yousef.mostafa@example.com",
        location: "Cairo, Egypt",
        education: "Faculty of Engineering, Communications Department, 3rd Year",
        bio: "Backend developer focusing on server optimization and database management. Expert in creating efficient and scalable backend solutions.",
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&clotheType=BlazerShirt&clotheColor=Blue02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        social: {
            linkedin: "https://linkedin.com/in/yousef-mostafa",
            github: "https://github.com/yousef-mostafa",
            twitter: "https://twitter.com/yousef_mostafa"
        }
    },
    member5: {
        name: "Ibrahim Yasser",
        role: "Hardware Development",
        email: "ibrahim.yasser@example.com",
        location: "Cairo, Egypt",
        education: "Faculty of Engineering, Communications Department, 3rd Year",
        bio: "Hardware testing specialist ensuring system stability and performance. Expert in troubleshooting and optimizing hardware modules.",
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Blue02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        social: {
            linkedin: "https://linkedin.com/in/ibrahim-yasser",
            github: "https://github.com/ibrahim-yasser",
            twitter: "https://twitter.com/ibrahim_yasser"
        }
    },
    member6: {
        name: "Yousef Moawad",
        role: "Awareness Video Creator",
        email: "yousef.moawad@example.com",
        location: "Cairo, Egypt",
        education: "Faculty of Engineering, Communications Department, 3rd Year",
        bio: "Creative video producer specializing in technical content. Expert in explaining complex systems through engaging visual content.",
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMedium&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light",
        social: {
            linkedin: "https://linkedin.com/in/yousef-moawad",
            github: "https://github.com/yousef-moawad",
            twitter: "https://twitter.com/yousef_moawad"
        }
    },
    member7: {
        name: "Rodania Moeen",
        role: "Software Development",
        email: "rodania.moeen@example.com",
        location: "Cairo, Egypt",
        education: "Faculty of Engineering, Communications Department, 3rd Year",
        bio: "Firmware developer specialized in traffic flow management systems. Experienced in developing reliable and efficient control systems.",
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&clotheColor=PastelRed&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        social: {
            linkedin: "https://linkedin.com/in/rodania-moeen",
            github: "https://github.com/rodania-moeen",
            twitter: "https://twitter.com/rodania_moeen"
        }
    },
    member8: {
        name: "Sara Zaki",
        role: "Hardware Development",
        email: "sara.zaki@example.com",
        location: "Cairo, Egypt",
        education: "Faculty of Engineering, Communications Department, 3rd Year",
        bio: "Hardware integration specialist focusing on scalable traffic control solutions. Expert in bridging hardware and software components.",
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&clotheColor=PastelRed&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        social: {
            linkedin: "https://linkedin.com/in/sara-zaki",
            github: "https://github.com/sara-zaki",
            twitter: "https://twitter.com/sara_zaki"
        }
    }
};

// Get modal elements
const modal = document.getElementById("aboutMeModal");
const closeBtn = document.querySelector(".close-modal");
const memberButtons = document.querySelectorAll("[id^='member']");

// Function to update modal content based on member ID
function updateModalContent(memberId) {
    const user = userData[memberId];
    if (!user) return;
    
    // Update user information
    document.getElementById("userAvatar").src = user.avatar;
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userRole").textContent = user.role;
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userLocation").textContent = user.location;
    document.getElementById("userEducation").textContent = user.education;
    document.getElementById("userBio").textContent = user.bio;
    
    // Update social links
    document.getElementById("userLinkedin").href = user.social.linkedin;
    document.getElementById("userGithub").href = user.social.github;
    document.getElementById("userTwitter").href = user.social.twitter;
}

// Event Listeners for member buttons
memberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const memberId = button.id;
        updateModalContent(memberId);
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    });
});

// Close button event
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
});

// Click outside modal to close
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    }
});
