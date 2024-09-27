document.addEventListener('DOMContentLoaded', () => {
  const contentContainer = document.getElementById('content');
  const sidebarLinks = document.querySelectorAll('.sidebar-item a');

  // Function to load content dynamically
  function loadPage(page) {
      let htmlContent = '';

      switch (page) {
          case 'home':
              htmlContent = `
                  <h2 class="text-2xl font-bold mb-4">Ongoing Projects</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div class="project-card p-4 bg-white shadow-md rounded-lg" id="project-alpha">
                          <h3 class="project-title text-lg font-semibold cursor-pointer hover:text-blue-500" onclick="showProjectDetails('alpha')">Project Alpha</h3>
                          <p class="text-gray-600">Description: Building a comprehensive marketing platform.</p>
                          <progress class="w-full" value="70" max="100"></progress>
                      </div>
                      <div class="project-card p-4 bg-white shadow-md rounded-lg" id="project-beta">
                          <h3 class="project-title text-lg font-semibold cursor-pointer hover:text-blue-500" onclick="showProjectDetails('beta')">Project Beta</h3>
                          <p class="text-gray-600">Description: Creating a mobile app for fitness tracking.</p>
                          <progress class="w-full" value="40" max="100"></progress>
                      </div>
                  </div>
                  <div id="project-details" class="mt-4" style="display:none;"></div>
                  <h2 class="text-2xl font-bold mt-6">Work History</h2>
                  <div id="work-history" class="mt-2"></div>
              `;
              break;

          case 'profile':
              htmlContent = `
                  <h2 class="text-2xl font-bold mb-4">Profile Settings</h2>
                  <form class="profile-form bg-white p-4 rounded-lg shadow-md">
                      <label for="username" class="block mb-2">Username:</label>
                      <input type="text" id="username" value="John Doe" required class="border p-2 rounded w-full">
                      <label for="email" class="block mt-4 mb-2">Email:</label>
                      <input type="email" id="email" value="john.doe@example.com" required class="border p-2 rounded w-full">
                      <label for="password" class="block mt-4 mb-2">Change Password:</label>
                      <input type="password" id="password" class="border p-2 rounded w-full">
                      <label for="profile-picture" class="block mt-4 mb-2">Profile Picture:</label>
                      <input type="file" id="profile-picture" class="border p-2 rounded w-full">
                      <button type="submit" class="mt-4 bg-blue-500 text-white p-2 rounded">Save Changes</button>
                  </form>
                  <p id="profile-feedback" class="mt-4 text-green-500" style="display:none;">Profile updated successfully!</p>`;
              break;

          case 'settings':
              htmlContent = `
                  <h2 class="text-2xl font-bold mb-4">Settings</h2>
                  <form class="settings-form bg-white p-4 rounded-lg shadow-md">
                      <label for="theme" class="block mb-2">Choose Theme:</label>
                      <select id="theme" class="border p-2 rounded w-full">
                          <option value="light">Light</option>
                          <option value="dark">Dark</option>
                      </select>
                      <label for="notifications" class="block mt-4 mb-2">Email Notifications:</label>
                      <input type="checkbox" id="notifications" checked class="mr-2"> Enable Notifications
                      <button type="submit" class="mt-4 bg-blue-500 text-white p-2 rounded">Apply Settings</button>
                  </form>
                  <p id="settings-feedback" class="mt-4 text-green-500" style="display:none;">Settings applied successfully!</p>`;
              break;

          case 'messages':
              htmlContent = `
                  <h2 class="text-2xl font-bold mb-4">Conversations</h2>
                  <div class="chat-box bg-white p-4 rounded-lg shadow-md max-h-96 overflow-y-auto">
                      <div class="chat-message">
                          <strong>Admin:</strong> Hello, how can I assist you today?
                      </div>
                      <div class="chat-message user">
                          <strong>You:</strong> I need some help with my project setup.
                      </div>
                  </div>
                  <div class="chat-input mt-4 flex">
                      <input type="text" id="chat-input" placeholder="Type your message..." class="border p-2 rounded w-full">
                      <button id="send-btn" class="ml-2 bg-blue-500 text-white p-2 rounded">Send</button>
                  </div>`;
              break;

          case 'projects':
              htmlContent = `
                  <h2 class="text-2xl font-bold mb-4">Available Projects</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div class="project-card bg-white p-4 rounded-lg shadow-md">
                          <h3 class="text-lg font-semibold">Project 1</h3>
                          <p class="text-gray-600">Description: A media marketing campaign.</p>
                          <a href="#" data-project-id="1" class="view-project-link text-blue-500 hover:underline">View Project</a>
                      </div>
                      <div class="project-card bg-white p-4 rounded-lg shadow-md">
                          <h3 class="text-lg font-semibold">Project 2</h3>
                          <p class="text-gray-600">Description: Web development for a startup.</p>
                          <a href="#" data-project-id="2" class="view-project-link text-blue-500 hover:underline">View Project</a>
                      </div>
                  </div>`;
              break;

          default:
              htmlContent = '<h2 class="text-2xl font-bold">Page not found</h2>';
      }

      contentContainer.innerHTML = htmlContent;

      // Add event listeners for the "View Project" links
      if (page === 'projects') {
          document.querySelectorAll('.view-project-link').forEach(link => {
              link.addEventListener('click', (e) => {
                  e.preventDefault();
                  const projectId = e.target.getAttribute('data-project-id');
                  loadProjectDetails(projectId);
              });
          });
      }

      // Handle profile form submission
      if (page === 'profile') {
          const profileForm = document.querySelector('.profile-form');
          profileForm.addEventListener('submit', (e) => {
              e.preventDefault();
              document.getElementById('profile-feedback').style.display = 'block'; // Show success feedback
          });
      }

      // Handle settings form submission
      if (page === 'settings') {
          const settingsForm = document.querySelector('.settings-form');
          settingsForm.addEventListener('submit', (e) => {
              e.preventDefault();
              document.getElementById('settings-feedback').style.display = 'block'; // Show success feedback
          });
      }

      // Event listener for the "Send" button in the chat box
      if (page === 'messages') {
          const sendBtn = document.getElementById('send-btn');
          const chatInput = document.getElementById('chat-input');
          const chatBox = document.querySelector('.chat-box');

          sendBtn.addEventListener('click', () => {
              const userMessage = chatInput.value.trim();
              if (userMessage) {
                  const userMessageHtml = `<div class="chat-message user"><strong>You:</strong> ${userMessage}</div>`;
                  chatBox.innerHTML += userMessageHtml;
                  chatInput.value = ''; // Clear input
                  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
              }
          });
      }
  }

  // Function to load project details dynamically
  function loadProjectDetails(projectId) {
      const dummyProjects = {
          '1': {
              title: 'Media Marketing Campaign',
              description: 'A detailed media marketing campaign to boost online visibility.',
              tasks: ['Task 1: Design the campaign', 'Task 2: Create media content', 'Task 3: Launch ads']
          },
          '2': {
              title: 'Web Development for a Startup',
              description: 'A website development project for a tech startup.',
              tasks: ['Task 1: Define requirements', 'Task 2: Develop website', 'Task 3: Deploy']
          }
      };

      const project = dummyProjects[projectId];
      if (project) {
          const projectHtml = `
              <h3 class="text-xl font-semibold">${project.title}</h3>
              <p class="text-gray-600">${project.description}</p>
              <ul class="list-disc pl-5 mt-2">
                  ${project.tasks.map(task => `<li>${task}</li>`).join('')}
              </ul>`;
          document.getElementById('project-details').innerHTML = projectHtml;
          document.getElementById('project-details').style.display = 'block';
      }
  }

  // Handle sidebar link clicks
  sidebarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const page = e.target.getAttribute('data-page');
          loadPage(page);
      });
  });

  // Load the default "home" page
  loadPage('home');
});
