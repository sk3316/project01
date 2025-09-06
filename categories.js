const blogPosts = [
  {
    title: "Understanding Machine Learning",
    image: "https://source.unsplash.com/400x250/?machine-learning",
    category: "Machine Learning",
    author: "John Doe",
    date: "Sept 5, 2025",
    description: "An intro to how machines learn from data and make decisions.",
  },
  {
    title: "Deep Learning Explained",
    image: "https://source.unsplash.com/400x250/?deep-learning",
    category: "Deep Learning",
    author: "Jane Smith",
    date: "Aug 22, 2025",
    description: "Delve into neural networks, backpropagation, and CNNs.",
  },
  {
    title: "AI in Robotics: A New Era",
    image: "https://source.unsplash.com/400x250/?robotics,ai",
    category: "Robotics",
    author: "Alan Turing",
    date: "July 30, 2025",
    description: "How AI is transforming modern robotics applications.",
  },
  {
    title: "NLP: Teaching Machines Language",
    image: "https://source.unsplash.com/400x250/?nlp,language",
    category: "NLP",
    author: "Ada Lovelace",
    date: "Sept 2, 2025",
    description: "Explore natural language processing and its challenges.",
  },
  {
    title: "AI Ethics: What You Need to Know",
    image: "https://source.unsplash.com/400x250/?ai,ethics",
    category: "AI Ethics",
    author: "Grace Hopper",
    date: "Aug 15, 2025",
    description: "Important ethical considerations in deploying AI systems.",
  },
  {
    title: "Reinforcement Learning Basics",
    image: "https://source.unsplash.com/400x250/?reinforcement-learning",
    category: "Machine Learning",
    author: "Richard Sutton",
    date: "Sept 10, 2025",
    description: "Learn how agents learn to make decisions through rewards.",
  },
  {
    title: "Convolutional Neural Networks",
    image: "https://source.unsplash.com/400x250/?cnn,deep-learning",
    category: "Deep Learning",
    author: "Geoffrey Hinton",
    date: "Aug 28, 2025",
    description: "Understand the architecture behind image recognition.",
  },
  {
    title: "Robotics and Automation in Industry",
    image: "https://source.unsplash.com/400x250/?industrial-robotics",
    category: "Robotics",
    author: "Elon Musk",
    date: "Sept 1, 2025",
    description: "Industrial applications of robots powered by AI.",
  },
];

function renderPosts(posts) {
  const container = document.getElementById("blog-container");
  container.innerHTML = "";

  posts.forEach((post) => {
    container.innerHTML += `
      <div>
        <div class="card h-100">
          <img src="${post.image}" alt="${post.title}" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text text-muted">By ${post.author} | ${post.date}</p>
            <p class="card-text">${post.description}</p>
          </div>
        </div>
      </div>
    `;
  });
}

function filterPosts(category) {
  if (category === "All") {
    renderPosts(blogPosts);
  } else {
    const filtered = blogPosts.filter((post) => post.category === category);
    renderPosts(filtered);
  }
}

// Initial render
renderPosts(blogPosts);
