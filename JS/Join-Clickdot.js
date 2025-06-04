
        document.addEventListener('click', function(e) {
            const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b','#FF5252', '#4CAF50', '#2196F3', '#FFC107', '#9C27B0',  '#4361ee', '#4895ef', '#3f37c9', '#4cc9f0', '#f72585', '#b5179e', '#7209b7', '#560bad', '#3a0ca3', '#5f0f40',
  '#9a031e', '#fb8b24', '#e36414', '#0f4c5c', '#1b9aaa', '#62bbc1', '#b2f7ef', '#d9faff', '#3a86ff', '#8338ec',
  '#ff006e', '#ffbe0b', '#fb5607', '#023e8a', '#0077b6', '#0096c7', '#00b4d8', '#48cae4', '#90e0ef', '#ade8f4',
  '#caf0f8', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4', '#9d4edd', '#7b2cbf', '#5a189a', '#3c096c', '#240046',
  '#10002b', '#6930c3', '#5e60ce', '#5390d9', '#4ea8de', '#48bfe3', '#56cfe1', '#64dfdf', '#72efdd', '#80ffdb',
  '#ffcad4', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff', '#2ec4b6', '#cbf3f0', '#ffbf69', '#ff9f1c', '#d81159',
  '#8f2d56', '#218380', '#73d2de', '#4a4e69', '#9a8c98', '#c9ada7', '#f2e9e4', '#22223b', '#cdb4db', '#e63946',
  '#f1faee', '#a8dadc', '#457b9d', '#1d3557', '#ffb4a2', '#e5989b', '#b5838d', '#6d6875', '#00a896', '#05668d',
  '#028090', '#00b2ca', '#70c1b3', '#b2dbbf', '#ffe066', '#f4978e', '#fbc4ab', '#ffdab9', '#e0bbe4', '#957dad',
  '#d291bc', '#fec8d8', '#ffdfd3', '#d0f4de', '#a9def9', '#e4c1f9', '#c1fba4', '#fff1e6', '#ffb5a7', '#ff9aa2',
  '#ff7f50', '#ff6f61', '#6a0572', '#ab83a1', '#ee6c4d', '#3b3b98', '#706fd3', '#f8a5c2', '#f78fb3', '#e77f67',
  '#cf6a87', '#574b90', '#63cdda', '#3dc1d3', '#e15f41', '#e66767', '#c44569', '#30336b', '#4834d4', '#be2edd',
  '#22a6b3', '#7ed6df', '#130f40', '#535c68', '#dff9fb', '#c7ecee', '#ffb142', '#ff793f', '#ffda79', '#f19066',
  '#f6b93b', '#fa983a', '#e58e26', '#f8c291', '#b33771', '#6d214f', '#e55039', '#eb2f06', '#b71540', '#1e3799',
  '#0c2461', '#3c6382', '#60a3bc', '#3ae374', '#10ac84', '#00d2d3', '#54a0ff', '#2e86de', '#341f97', '#5f27cd',
  '#ee5253', '#ff6b6b', '#576574', '#8395a7', '#222f3e', '#c8d6e5', '#ff9ff3', '#f368e0', '#00cec9', '#00b894',
  '#fd79a8', '#e84393', '#fab1a0', '#ff7675', '#ffeaa7', '#fdcb6e', '#e17055', '#d63031', '#a29bfe', '#6c5ce7',
  '#74b9ff', '#0984e3', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800',
  '#ff5722', '#795548', '#9e9e9e', '#607d8b', '#000000', '#ffffff', '#f5f6fa', '#dcdde1', '#7f8fa6', '#718093',
  '#192a56', '#273c75', '#353b48', '#2f3640', '#dcdde1', '#718093', '#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da',
  '#adb5bd', '#6c757d', '#495057', '#343a40', '#212529', '#fae3d9', '#bbded6', '#8ac6d1', '#cdb4db', '#ffc8dd',
  '#ffafcc', '#bde0fe', '#a2d2ff', '#6fffe9', '#3a86ff', '#8338ec', '#ff006e', '#fb5607', '#ffbe0b', '#ff595e',
  '#ffca3a', '#8ac926', '#1982c4', '#6a4c93', '#d0f4de', '#a9def9', '#e4c1f9', '#c1fba4', '#fff1e6', '#c8b6ff',
  '#ffd6ff', '#fffffc', '#fdfcdc', '#feca57', '#ff9f43', '#ff6b6b', '#48dbfb', '#1dd1a1', '#feca57', '#ff6b6b',
  '#48dbfb', '#1dd1a1', '#a29bfe', '#dfe6e9', '#636e72', '#2d3436', '#ffeaa7', '#fd79a8', '#fab1a0', '#ff7675'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            const dot = document.createElement('div');
            dot.className = 'click-dot';
            dot.style.background = `radial-gradient(circle, ${randomColor} 0%, rgba(59,130,246,0) 70%)`;
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
            document.body.appendChild(dot);
            setTimeout(() => dot.remove(), 800);
            
            // Play click sound
            const clickSound = new Audio('https://assets.codepen.io/605876/click.mp3');
            clickSound.volume = 0.5;
            clickSound.play().catch(e => console.log("Audio play failed:", e));
        });